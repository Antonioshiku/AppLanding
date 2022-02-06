const Menu=document.querySelector('#logo');
const li=document.querySelector(' .li_con');
const UpButton=document.querySelector('.Home_button');
const Navbar=document.querySelector('.nav_con');


Menu.addEventListener('click', () => {
  
        
        if(  li.classList.contains('show')){
                li.classList.remove('show')
        }else{
                li.classList.add('show')
        }
   
})

window.addEventListener('scroll', () => {
              if(window.scrollY > 661){
                  UpButton.style.display="flex";
                  Navbar.classList.add('show_nav');
              }else{
                  UpButton.style.display="none";
                  Navbar.classList.remove('show_nav')
                       
              }


})
