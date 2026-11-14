const test = require("node:test");
const assert = require("node:assert/strict");

const { registrarPrestamo } = require("./prestamo");

test("Registra un prestamo y actualiza el stock", () => {
  assert.equal(registrarPrestamo(5, 2), 3);
});

test("Permite prestar todas las unidades disponibles", () => {
  assert.equal(registrarPrestamo(2, 2), 0);
});

test("Rechaza un prestamo cuando no hay stock", () => {
  assert.throws(
    () => registrarPrestamo(0, 1),
    /No hay suficientes equipos disponibles/
  );
});

test("Rechaza una cantidad mayor al stock", () => {
  assert.throws(
    () => registrarPrestamo(3, 5),
    /No hay suficientes equipos disponibles/
  );
});

test("Rechaza una cantidad igual a cero", () => {
  assert.throws(
    () => registrarPrestamo(5, 0),
    /La cantidad debe ser un entero mayor que cero/
  );
});

test("Rechaza una cantidad negativa", () => {
  assert.throws(
    () => registrarPrestamo(5, -1),
    /La cantidad debe ser un entero mayor que cero/
  );
});

test("Rechaza una cantidad decimal", () => {
  assert.throws(
    () => registrarPrestamo(5, 1.5),
    /La cantidad debe ser un entero mayor que cero/
  );
});

test("Rechaza un stock negativo", () => {
  assert.throws(
    () => registrarPrestamo(-1, 1),
    /El stock debe ser un entero igual o mayor que cero/
  );
});
