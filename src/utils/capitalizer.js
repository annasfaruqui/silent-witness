export function capitalizeFirstLetter(input) {
  let string = input;
  return string[0].toUpperCase() + string.slice(1);
}

export function capitalizeFirstLetterEveryWord(input) {
  const result = input
    .split("-")
    .map((el) => capitalizeFirstLetter(el))
    .join(" ");

  return result;
}
