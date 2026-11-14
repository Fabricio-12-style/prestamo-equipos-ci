function registrarPrestamo(stock, cantidad) {
  // Validar que el stock sea un entero igual o mayor que cero.
  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error("El stock debe ser un entero igual o mayor que cero");
  }

  // Validar que la cantidad sea un entero mayor que cero.
  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    throw new Error("La cantidad debe ser un entero mayor que cero");
  }

  // Verificar que existan equipos suficientes.
  if (cantidad > stock) {
    throw new Error("No hay suficientes equipos disponibles");
  }

  // Calcular y devolver el stock actualizado.
  return stock - cantidad;
}

module.exports = { registrarPrestamo };
