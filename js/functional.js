const blocksStyle = document.getElementsByClassName("pairing-accessories");

const element = document.getElementById("card-theme");

const navigationStyle = document.getElementsByClassName("navigation");

const buttonsStyle = document.querySelector(".check-it");

const chekItStyle = document.querySelector(".check-it2");

const changeShowColor = document.querySelector(".show-color");

function changeTheme() {
  if (element.classList.contains("dark-theme")) {
    element.classList.remove("dark-theme");
    element.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");

    for (i = 0; i < blocksStyle.length; ++i) {
      blocksStyle[i].classList.remove("pairing-accessories-dark");
    }

    for (i = 0; i < navigationStyle.length; ++i) {
      navigationStyle[i].classList.remove("navigation-dark");
    }

    buttonsStyle.classList.remove("check-it-dark");

    chekItStyle.classList.remove("check-it2-dark");

    changeShowColor.classList.remove("show-color-black");
  } else {
    element.classList.remove("light-theme");
    element.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");

    for (i = 0; i < blocksStyle.length; ++i) {
      blocksStyle[i].classList.add("pairing-accessories-dark");
    }

    for (i = 0; i < navigationStyle.length; ++i) {
      navigationStyle[i].classList.add("navigation-dark");
    }

    buttonsStyle.classList.add("check-it-dark");

    chekItStyle.classList.add("check-it2-dark");

    changeShowColor.classList.add("show-color-black");
  }
  document.getElementById("currentTheme").innerHTML = localStorage.theme;
}

element.classList.add(localStorage.getItem("theme"));
if (localStorage.getItem("theme") === "dark-theme") {
  for (i = 0; i < blocksStyle.length; ++i) {
    blocksStyle[i].classList.add("pairing-accessories-dark");
  }

  for (i = 0; i < navigationStyle.length; ++i) {
    navigationStyle[i].classList.add("navigation-dark");
  }

  buttonsStyle.classList.add("check-it-dark");

  chekItStyle.classList.add("check-it2-dark");

  changeShowColor.classList.add("show-color-black");
}
////////////////////////

let add = document.querySelector(".shadow-add");

let stopAdd = setInterval(() => {
  add.style.visibility = "visible";
}, 2000);

let restartAdd = document.querySelector(".restart-add");

restartAdd.onclick = () => {
  add.style.visibility = "hidden";
};

let closeAdd = document.querySelector(".close-add");

closeAdd.onclick = () => {
  add.style.visibility = "hidden";
  clearInterval(stopAdd);
};

///////////
