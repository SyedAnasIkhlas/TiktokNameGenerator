// Main section
const keyword = document.querySelector(".keyword");
const generateButton = document.querySelector(".generate-button");
// loading
const loading = document.querySelector(".loading");
// Table
const names = document.querySelector(".names");
const randomWordTable = document.querySelector(".random-word-table");
const loremTable = document.querySelector(".lorem-table");
const alphaNumTable = document.querySelector(".alpha-num-table");
const numTable = document.querySelector(".num-table");
const prefixTable = document.querySelector(".prefix-table");
const suffixTable = document.querySelector(".suffix-table");
const fakerTableFirstName = document.querySelector(".faker-table-first-name");
const fakerTableLastName = document.querySelector(".faker-table-last-name");
const table = document.querySelector("table");
let spaceCheck = document.querySelector("#space");
let shuffleCheck = document.querySelector("#shuffle");


document.addEventListener("load",function()
{
  alert("working")
  spaceCheck.checked = true;
})

generateButton.addEventListener("click", function (event) {
  const space = spaceCheck.checked;
  const shuffle = shuffleCheck.checked;
  console.log(space);
  console.log(shuffle);
  event.preventDefault();
  document.querySelector(".verify-name-message").classList.add("show");
  if (keyword.value == "") {
    // clear table data
    // clearTable(table);
    document.querySelector(".msg").classList.toggle("red");
    document.querySelector(".msg").innerHTML =
      "Please Enter a keyword for better results!!!";
    nameGen(faker.name.firstName(), space, shuffle);
  } else {
    // removing any error message
    document.querySelector(".msg").classList.toggle("red");
    document.querySelector(".msg").innerHTML = "";
    // const keywordGen = keyword.value.replace(" ","_");
    nameGen(keyword.value, space, shuffle);
  }
});

function nameGen(keyword, space, shuffle) {
  // keyword = keyword.replace(" ","_")
  // Loading Animation
  loading.classList.toggle("load");
  // loading animation timeout
  setTimeout(() => {
    // Loading Animation
    loading.classList.toggle("load");
    // show names div
    names.classList.add("show-grid");
  }, 3000);

  // Table headings
  // Random 3 words
  addContentToTable(randomWordTable, 0, 0, "Short Names", "bold");
  // Table headings
  addContentToTable(loremTable, 0, 0, "Random words", "bold");
  // fakerTableFirstName
  addContentToTable(fakerTableFirstName, 0, 0, "Random keywords", "bold");
  // fakerLastNameRow
  addContentToTable(fakerTableLastName, 0, 0, "Random keywords", "bold");
  // alphaNumTable
  addContentToTable(alphaNumTable, 0, 0, "AlphaNumeric", "bold");
  // num
  addContentToTable(numTable, 0, 0, "Number", "bold");
  // prefixTable
  addContentToTable(prefixTable, 0, 0, "Prefix", "bold");
  // alphaNumTable
  addContentToTable(suffixTable, 0, 0, "Suffix", "bold");

  //  generate names fakersJs
  for (let i = 0; i < 15; i++) {
    generateNames(keyword, space, shuffle);
  }
}

// copy event
document.addEventListener("copy", (event) => {
  console.log(event);
  createModal(
    `Checkout <a href="https://youtubenamegenerator.ml" target="_blank">Youtube</a> name generator.`
  );
});

function addContentToTable(table, row, cell, text, weight) {
  var rowHead = table.insertRow(row);
  var tableCellHead = rowHead.insertCell(cell);
  tableCellHead.innerHTML = text;
  tableCellHead.style.fontWeight = weight;
}

function clearTable(table) {
  table.innerHTML = "";
}

function generateNames(keyword, space, shuffle) {
  // faker.name.findName()
  // short words
  var shortRow = randomWordTable.insertRow(1);
  var shortCell = shortRow.insertCell(0);
  const short =  randomWord(false,3);
  // const lorem = faker.lorem.word() + keyword;
  shortCell.innerHTML = `<a href="https://tiktok.com/@${short}" target="_blank">${short}</a>`;
  
  // random words
  var loremRow = loremTable.insertRow(1);
  var loremCell = loremRow.insertCell(0);
  const lorem = loremKeyword(keyword, space, shuffle);
  // const lorem = faker.lorem.word() + keyword;
  loremCell.innerHTML = `<a href="https://tiktok.com/@${lorem}" target="_blank">${lorem}</a>`;

  // add random first name keywords
  var fakerFirstNameRow = fakerTableFirstName.insertRow(1);
  var fakerFirstNameCell = fakerFirstNameRow.insertCell(0);
  const fakerFirstNameC = addWordBeforeKeyword(keyword, space, shuffle);
  fakerFirstNameCell.innerHTML = `<a href="https://tiktok.com/@${fakerFirstNameC}" target="_blank">${fakerFirstNameC}</a>`;

  // add random last name keywords
  var fakerLastNameRow = fakerTableLastName.insertRow(1);
  var fakerLastNameCell = fakerLastNameRow.insertCell(0);
  const fakerLastNameC = addWordAfterKeyword(
    keyword,
    space,
    shuffle
  );
  fakerLastNameCell.innerHTML = `<a href="https://tiktok.com/@${fakerLastNameC}" target="_blank">${fakerLastNameC}</a>`;

  // add random alpha num keywords
  var alphaNumTableRow = alphaNumTable.insertRow(1);
  var alphaNumTableCell = alphaNumTableRow.insertCell(0);
  const alphaNumC = keywordAlphaNum(
    keyword,
    space,
    shuffle
  );
  alphaNumTableCell.innerHTML = `<a href="https://tiktok.com/@${alphaNumC}/@" target="_blank">${alphaNumC}</a>`;

  // add random num keywords
  var numTableRow = numTable.insertRow(1);
  var numTableCell = numTableRow.insertCell(0);
  const numTableC = keywordNumber(keyword, space, shuffle);
  numTableCell.innerHTML = `<a href="https://tiktok.com/@${numTableC}" target="_blank">${numTableC}</a>`;

  // add prefix to keywords
  var prefixTableRow = prefixTable.insertRow(1);
  var prefixTableCell = prefixTableRow.insertCell(0);
  const prefixTableC = prefixKeyword(keyword, space, shuffle);
  prefixTableCell.innerHTML = `<a href="https://tiktok.com/@${prefixTableC}" target="_blank">${prefixTableC}</a>`;

  // add suffix to keywords
  var suffixTableRow = suffixTable.insertRow(1);
  var suffixTableCell = suffixTableRow.insertCell(0);
  suffixTableC = keywordSuffix(keyword, space, shuffle);
  suffixTableCell.innerHTML = `<a href="https://tiktok.com/@${suffixTableC}" target="_blank">${suffixTableC}</a>`;
}
