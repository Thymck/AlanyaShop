document.getElementById("onMenu").addEventListener("click", function () {
  var menuItems = document.getElementById("menuItems");
  var iconTimes = document.getElementById("onMenu");
  menuItems.classList.toggle("active");
  iconTimes.classList.toggle("active");
});
