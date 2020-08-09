window.onload = function() {
  // alert('11');
  window.open('onSale.html', 'a', 'width=680, height=300, left=250, top=200');
};

menu_men = function() {
  var menu_home = document.getElementById('home');
  var menu_women = document.getElementById('women');
  menu_home.style.display = 'none';
  menu_women.style.display = 'none';

  var menu_men = document.getElementById('men');
  menu_men.style.display = 'block';
};

menu_women = function() {
  var menu_home = document.getElementById('home');
  var menu_men = document.getElementById('men');
  menu_home.style.display = 'none';
  menu_men.style.display = 'none';

  var menu_women = document.getElementById('women');
  menu_women.style.display = 'block';
};

menu_children = function() {
  alert('Oops construction!');
  return false;
};

// registeForm = function() {
//   alert('Oops construction!');
//   return false;
// };

subscribe = function() {
  window.open('subscribeForm.html', 'a', 'width=680, height=600, left=250, top=200');
};
