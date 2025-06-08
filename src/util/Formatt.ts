export function formatearTitulo(titulo: string) {

  let texto = titulo.replace(/\.pdf$/i, '');


  texto = texto.replace(/_/g, ' ');


  texto = texto.replace(/([a-záéíóúñ0-9])([A-ZÁÉÍÓÚÑ])/g, '$1 $2');


  texto = texto.toLowerCase();


  texto = texto.replace(/\b\w/g, c => c.toUpperCase());


  texto = texto.replace(/\s+/g, ' ').trim();

  return texto;
}

export const formatPhone = (phone?: string): string => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    const part1 = digits.slice(0, 3);
    const part2 = digits.slice(3, 6);
    const part3 = digits.slice(6, 10);
    return `${part1}-${part2}-${part3}`;
  }
  return phone;
};
