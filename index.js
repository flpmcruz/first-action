const core = require("@actions/core");

try {
  // Obtener el valor de la entrada
  const miInput = core.getInput("mi_input");

  // Hacer algo con la entrada
  console.log(`El valor de mi_input es: ${miInput}`);

  // Establecer un resultado de salida
  core.setOutput("mi_output", "Hola desde mi acción");
} catch (error) {
  // Manejar errores
  core.setFailed(error.message);
}
