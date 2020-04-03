function inputOnClickIn(input, label) {
  label.classList.add("label-top");
}

function inputOnClickOut(input, label) {
  if (input.value == "") {
    label.classList.remove("label-top");
  }
}

// 02134910509
// HBL BANK PAKISTAN farhat shakur

const formInput = document.getElementsByClassName("input");

for (var i = 0; i < formInput.length; i++) {
  let form = formInput[i];
  let label;
  if (form.previousElementSibling.tagName == "LABEL") {
    label = form.previousElementSibling;
  } else if (form.nextElementSibling.tagName == "LABEL") {
    label = form.nextElementSibling;
  }
  // remove Placeholder
  formInput[i].setAttribute("placeholder", "");

  // create message div
  let spanMessage = document.createElement("span");
  spanMessage.classList.add("msg");
  formInput[i].parentElement.after(spanMessage);

  // get type of input
  let getInputType = formInput[i].getAttribute("type");
  // get class name
  let getInputClassName = formInput[i].getAttribute("class");
  formInput[i].addEventListener("focus", function() {
    inputOnClickIn(this, label);
  });

  formInput[i].addEventListener("focusout", function() {
    inputOnClickOut(this, label);
  });

  // Password Input field
  if (getInputType == "password") {
    let min = 4;
    let max = 28;
    // create view password button
    const viewEyeDiv = document.createElement("div");
    viewEyeDiv.setAttribute("class", "pwd-eye");
    const viewEyeImg = document.createElement("img");
    viewEyeImg.setAttribute("class", "show-pwd");

    const hide = `https://img.icons8.com/plasticine/100/000000/hide.png`;
    const show = `https://img.icons8.com/ultraviolet/40/000000/visible.png`;
    viewEyeImg.setAttribute("src", show);

    //append eye to eye to div
    viewEyeDiv.append(viewEyeImg);

    /////////////////////////
    // append eye to input //
    /////////////////////////
    formInput[i].parentElement.append(viewEyeDiv);

    // show password on click
    viewEyeImg.addEventListener("click", function() {
      let pwdEye = this.parentElement;

      if (pwdEye.previousElementSibling.getAttribute("type") == "text") {
        pwdEye.previousElementSibling.setAttribute("type", "password");
        viewEyeImg.setAttribute("src", show);
      } else {
        pwdEye.previousElementSibling.setAttribute("type", "text");
        viewEyeImg.setAttribute("src", hide);
      }
    });

    if (formInput[i].getAttribute("data-min") != null) {
      min = formInput[i].getAttribute("data-min");
    }

    if (formInput[i].getAttribute("data-max") != null) {
      max = formInput[i].getAttribute("data-max");
    }
    formInput[i].addEventListener("keyup", function() {
      if (this.value != "") {
        if (this.getAttribute("class").match("password-confirm") == null) {
          const msg = `Password should be between ${min} ~ ${max} charaters`;
          this.parentElement.nextSibling.classList.add("red");
          if (this.value.length >= max) {
            this.parentElement.classList.add("red-input");
            this.parentElement.nextSibling.innerHTML = msg;
          } else {
            this.parentElement.nextSibling.innerHTML = "";
          }
          ////////////////////
          // match password //
          ////////////////////
          if (document.querySelector(".password-confirm").value != "") {
            const pwdC = document.querySelector(".password-confirm");
            console.log(this.value + pwdC.value);
            if (this.value != pwdC.value) {
              console.log(pwdC.parentElement.nextElementSibling);
              pwdC.parentElement.nextElementSibling.innerHTML =
                "Password does't match";
              pwdC.parentElement.classList.add("red-input");
              pwdC.parentElement.nextElementSibling.style.color = "red";
            } else {
              pwdC.parentElement.nextElementSibling.innerHTML = "";
              pwdC.parentElement.classList.remove("red-input");
            }
          }
        }
      } else {
        this.parentElement.nextSibling.innerHTML = "";
        this.parentElement.classList.remove("red-input");
      }
    });

    formInput[i].addEventListener("keyup", function() {
      if (this.getAttribute("class").match("password-confirm") != null) {
        const pwd = document.querySelector(".password").value;
        // console.log(this.nextElementSibling)
        if (this.value != pwd) {
          this.parentElement.nextElementSibling.innerHTML =
            "Password does't match";
          this.parentElement.classList.add("red-input");
          this.parentElement.nextElementSibling.style.color = "red";
        } else {
          this.parentElement.nextElementSibling.innerHTML = "";
          this.parentElement.classList.remove("red-input");
          // this.parentElement.nextElementSibling.style.color = "red";
        }
      }
    });
  }
}

// Main section


const keyword = document.querySelector(".keyword");
const generateButton = document.querySelector(".generate-button");
// loading
const loading = document.querySelector(".loading");
// Table
const names = document.querySelector(".names");
const loremTable = document.querySelector(".lorem-table");
const alphaNumTable = document.querySelector(".alpha-num-table");
const numTable = document.querySelector(".num-table");
const prefixTable = document.querySelector(".prefix-table");
const suffixTable = document.querySelector(".suffix-table");
const fakerTableFirstName = document.querySelector(".faker-table-first-name");
const fakerTableLastName = document.querySelector(".faker-table-last-name");

generateButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (keyword.value == "") {
    document.querySelector(".msg").classList.toggle("red");
    document.querySelector(".msg").innerHTML = "Please Enter a keyword!!!";
  } else {
    // removing any error message
    document.querySelector(".msg").classList.toggle("red");
    document.querySelector(".msg").innerHTML = "";
    // Loading Animation
    loading.classList.toggle("load");
    // loading animation timeout
   setTimeout(() => {
      // Loading Animation
      loading.classList.toggle("load");
      // show names div
      names.classList.add("show-grid");
   }, 3000);
  //  generate names fakersJs
    for (let i = 0; i < 15; i++) {
      // faker.name.findName();

      // random words
      var loremRow= loremTable.insertRow(1);
      var loremCell = loremRow.insertCell(0);
      loremCell.innerHTML = faker.lorem.word()+keyword.value;

      // add random first name keywords
      var fakerFirstNameRow = fakerTableFirstName.insertRow(1);
      var fakerFirstNameCell = fakerFirstNameRow.insertCell(0);
      fakerFirstNameCell.innerHTML = faker.name.firstName()+keyword.value;
      
      
      // add random last name keywords
      var fakerLastNameRow = fakerTableLastName.insertRow(1);
      var fakerLastNameCell = fakerLastNameRow.insertCell(0);
      fakerLastNameCell.innerHTML = keyword.value+faker.name.lastName();
      
      // add random alpha num keywords
      var alphaNumTableRow = alphaNumTable.insertRow(1);
      var alphaNumTableCell = alphaNumTableRow.insertCell(0);
      alphaNumTableCell.innerHTML = keyword.value+faker.random.alphaNumeric();
      
      // add random num keywords
      var numTableRow = numTable.insertRow(1);
      var numTableCell = numTableRow.insertCell(0);
      numTableCell.innerHTML = keyword.value+faker.random.number();
      
      // add prefix to keywords
      var prefixTableRow = prefixTable.insertRow(1);
      var prefixTableCell = prefixTableRow.insertCell(0);
      prefixTableCell.innerHTML = faker.name.prefix()+"."+keyword.value+faker.random.word();
      
      // add suffix to keywords
      var suffixTableRow = suffixTable.insertRow(1);
      var suffixTableCell = suffixTableRow.insertCell(0);
      suffixTableCell.innerHTML = keyword.value+faker.name.suffix()

      

      
    }
  }
});

// copy event
document.addEventListener('copy', (event) => {
  console.log(event)
  // window.location.replace(`https://tiktok.com/@${document.execCommand('paste')}`);
})
