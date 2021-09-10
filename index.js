const input = document.getElementById("input");
const root = document.getElementById("root");
function main() {
  let inputValue = input.value;
  let string = inputValue.toString();

  const removeSpaces = (str) => str.replace(/\s/g, "");

  let idk = removeSpaces(string);
  console.log(idk);
  root.innerText = `Number of Letters: ${idk.length}`;
}
