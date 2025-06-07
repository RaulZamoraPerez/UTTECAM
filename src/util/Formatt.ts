const formatearTitulo=(titulo: string) => {
  return titulo
    .toLowerCase()
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join("");
}

export { formatearTitulo };