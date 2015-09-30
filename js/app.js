window.onload = function() {
  makeCartScrollNicely();
  console.log('make cart scroll')
}

function makeCartScrollNicely() {
  var cart = document.querySelector('.cart');
  Ps.initialize(cart);
}

var $toggle = document.querySelector(".site__right-sidebar-toggle");

$toggle.addEventListener("click",function() {
  console.log('toggle sidebar');
  document.body.classList.toggle("js-show-right-sidebar");
});
