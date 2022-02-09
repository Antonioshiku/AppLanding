const Menu = document.querySelector("#logo");
const li = document.querySelector(" .li_con");
const UpButton = document.querySelector(".Home_button");
const Navbar = document.querySelector(".nav_con");
const firstJob = document.querySelector(".first_job");
const secJob = document.querySelector(".sec_job");
const thirdJob = document.querySelector(".third_job");
const firstSpan = document.querySelector(".first_job span");
const secSpan = document.querySelector(".sec_job span");
const thirdSpan = document.querySelector(".third_job span");
const email = document.getElementById("email");
const arrowLogo = document.querySelector("#arrow_logo");
const jsInput = document.querySelector(".js_input");

let first = 0;
let sec = 0;
let third = 0;

Menu.addEventListener("click", () => {
  if (li.classList.contains("show")) {
    li.classList.remove("show");
  } else {
    li.classList.add("show");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 661) {
    UpButton.style.display = "flex";
    Navbar.classList.add("show_nav");
  } else {
    UpButton.style.display = "none";
    Navbar.classList.remove("show_nav");
  }
});

let close;
close = setInterval(JobSection, 0.1);

function JobSection() {
  first += 1;
  sec += 1;
  third += 1;
  if (first == 1200) {
    clearInterval(close);
  }

  let firstV = `${first} +`;
  let secV = `${sec} +`;
  let thirdV = `${third} +`;
  firstSpan.innerHTML = firstV;
  secSpan.innerHTML = secV;
  thirdSpan.innerHTML = thirdV;
}

// email section

email.addEventListener("change", (e) => {
  let input = event.target.value;

  let arrayDb = (arrayobj) => {
    let arrayuserobj = getDb(arrayobj);
    if (arrayuserobj == null) {
      arrayuserobj = [];
      arrayuserobj.push(arrayobj);
      saveDB(arrayuserobj);
      jsInput.innerHTML = "Submiting...";
    } else {
      let find = arrayuserobj.findIndex(
        (userr) => userr.Email == arrayobj.Email
      );

      if (find == -1) {
        arrayuserobj.push(arrayobj);
        saveDB(arrayuserobj);
        jsInput.innerHTML = "Submiting...";
      } else {
        jsInput.innerHTML = "Your Email is already exits";
      }
    }
  };

  let saveDB = (userobj) => {
    let str = JSON.stringify(userobj);
    sessionStorage.setItem("UserEmail", str);
  };

  let getDb = () => {
    let objj = sessionStorage.getItem("UserEmail");
    let stt = JSON.parse(objj);
    return stt;
  };

  let EmailUser = input;

  let User = {
    Email: EmailUser,
  };

  arrayDb(User);

  email.value = "";
});

arrowLogo.addEventListener("click", () => {
  sessionStorage.clear();
});
