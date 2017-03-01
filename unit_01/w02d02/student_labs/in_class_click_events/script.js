window.onload = function() {
<<<<<<< HEAD
  var buttons = document.getElementsByTagName('button');
  buttons[0].addEventListener('click', function() {
    alert('you have clicked button one');
  });
  buttons[1].addEventListener('click', function() {
    var p = document.createElement("p");
    p.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
    var information = document.getElementById('information');
    information.appendChild(p);
  });
  buttons[2].addEventListener('click', function() {
    var p = document.getElementsByTagName("p")[0];
    information.removeChild(p);
  });

=======
>>>>>>> 8d1d37730514d4121bae9ab133acfe8500e444a7
}
