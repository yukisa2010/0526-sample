(function(){
  'use strict'
  window.onscroll = function() {myFunction()};

  function myFunction() {
    const wrapper = document.getElementsByClassName('theme-wrapper')

    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      wrapper[0].classList.add('slideUp');
    }
    if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
      wrapper[1].classList.add('slideUp');
    }
    if(document.body.scrollTop > 1956 || document.documentElement.scrollTop > 1956) {
      wrapper[2].classList.add('slideUp');
    }

  }


})();
