let header =document.body.firstElementChild;
let secondDiv = header.nextElementSibling;
let mtavari= secondDiv.querySelector('li').style.backgroundColor='white';
let ulWhite = secondDiv.children[1];
let whiteUl = ulWhite.querySelector('li');
whiteUl.style.color = 'darkblue';
whiteUl.style.backgroundColor = 'white';
let banner=document.getElementsByClassName('banner-img')[0];
let wrapper3=document.getElementsByClassName('wrapper3-2')[0];
let title = document.getElementsByTagName('title')[0];
title.text = 'build.com.ge';
// ======================onclick menu =================================
let button = document.body.children[1].firstElementChild;
button.onclick = function (event){
let ul = button.firstElementChild.nextElementSibling;

    if(event.target.tagName === 'I'){
        ul.classList.toggle('toggle');
        ul.classList.remove('dropDownUl');
        ul.classList.add('dropDownUl');
    }
}
// ================================================

let footer = document.getElementsByTagName('footer')[0];
let copyright = footer.querySelector('span');
copyright.remove();

let i = footer.querySelector('i');
i.onclick = function (){
    window.scrollTo(0,0);
  }

 $('.dropDownInitial li').hover(function(){ 
    $(this).children('.dropdown-content').fadeToggle('normal');
  })
  $('.button .dropdown li').click(function(){ 
      $(this).children('.dropdown-content').fadeToggle('normal');
    })

     $('.burgerMenu').click(function(){
        $('.dropDownUl').slideToggle('normal');
    })


burgerMenu = document.getElementsByClassName('burgerMenu')[0];
    burgerMenu.onclick = function(){
      this.classList.toggle('change')
  }

  