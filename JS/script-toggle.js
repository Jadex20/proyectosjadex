$(function(){
  var togglemenu = $('#toggle-menu');
  var nav = $('#main-nav');
  togglemenu.on('click',function(){
    nav.toggleClass('mostrar');
  });
});

// Terminarlo
// var icon = document.getElementById('toggle-menu'),
//     nav = document.getElementById('main-nav');
//  icon.addEventListener('click',function(){
//      document.body.classList.add('main-nav');  
//       // console.log(document.body.classList); // ['funcion13'] 
//  });



