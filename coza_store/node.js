const listLi = document.querySelectorAll("li");
const searchLogo = document.querySelector(".search_logo");
const mainNav = document.querySelector(".nav");
const header = document.querySelector("header");
const womenText = document.querySelector(".text_section");
const menText = document.querySelector(".men_section");
const menuBar=document.querySelector('.menu_bar')
const firstMenu=document.querySelector('.first');
const secMenu=document.querySelector('.sec');
const thirdMenu=document.querySelector('.third');
const ulCon=document.querySelector('.ul_con');
const liList=document.querySelectorAll('li');







// li list color
listLi.forEach((li) => {
  li.onclick = () => {
    let conli = li.classList.contains("lishow");

    if (conli) {
      li.classList.remove("lishow");
    } else {
      li.classList.add("lishow");
    }
  };
});
// li list color end 

// search click section 
searchLogo.addEventListener("click", () => {
  let newsdiv = document.createElement("div");
  let newlogo = document.createElement("i");
  let text = document.createElement("p");
  text.innerHTML = "Search...";
  text.classList.add("search_text");
  newsdiv.append(text);
  newlogo.classList.add("bi", "bi-search");
  newsdiv.append(newlogo);
  newsdiv.classList.add("search_bar");
  mainNav.append(newsdiv);

// search click section end


  //    contain class
  newlogo.onclick = () => {
    newsdiv.classList.remove("search_bar");
    newsdiv.style.display = "none";
  };
});


// bg settime section 

setInterval(headerBG, 3500);

function headerBG() {
  menText.style.display = "flex";
  let close = header.classList.contains("header_bg");

  if (close) {
    header.classList.remove("header_bg");
    womenText.classList.remove("show_men");
  } else {
    header.classList.add("header_bg");
    womenText.classList.add("show_men");
    menText.style.display = "none";
  }
}

// bg image settime section

// menu bar section

menuBar.addEventListener('click' , () => {
     

       let closeMenu=menuBar.classList.contains('showMenuBar');

       if(closeMenu){
        firstMenu.classList.remove('show_f_menu');
        secMenu.classList.remove('show_s_menu')
        thirdMenu.classList.remove('show_t_menu');
        ulCon.classList.remove('show_liList')
        menuBar.classList.remove('showMenuBar')
       }else{
        firstMenu.classList.add('show_f_menu');
        secMenu.classList.add('show_s_menu')
        thirdMenu.classList.add('show_t_menu');
        ulCon.classList.add('show_liList')
        menuBar.classList.add('showMenuBar')
       }
})