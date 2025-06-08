export function formatearTitulo(titulo: string) {
  // Quita la extensión .pdf
  let texto = titulo.replace(/\.pdf$/i, '');

  // Reemplaza guiones bajos por espacios
  texto = texto.replace(/_/g, ' ');

  // Inserta espacio antes de mayúsculas que vienen después de minúsculas o números
  texto = texto.replace(/([a-záéíóúñ0-9])([A-ZÁÉÍÓÚÑ])/g, '$1 $2');

  // Convierte todo a minúsculas para uniformar
  texto = texto.toLowerCase();

  // Capitaliza la primera letra de cada palabra
  texto = texto.replace(/\b\w/g, c => c.toUpperCase());

  // Limpia espacios extra
  texto = texto.replace(/\s+/g, ' ').trim();

  return texto;
}
