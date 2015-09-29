window.onload = function() {
  makeCartScrollNicely();
  console.log('make cart scroll')
}

function makeCartScrollNicely() {
  var cart = document.querySelector('.cart');
  Ps.initialize(cart);
}
