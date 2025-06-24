const supabase = require('../supabaseClient');
const prefix = process.env.SUPABASE_PREFIX || '';

async function obtenerPasajeros() {
  const tabla = `${prefix}pasajeros`;
  console.log("Consultando tabla:", tabla);

  const { data, error } = await supabase
    .from(tabla)
    .select('*');

  if (error) {
    console.error("Error al consultar Supabase:", error);
    throw new Error(error.message);
  }

  console.log("Datos obtenidos:", data);
  return data;
}

module.exports = { obtenerPasajeros };
