
function clock() {
  var time = new Date()
  var hr = time.getHours()
  var min = time.getMinutes()
  min = (min < 10) ? ("0" + min) : min;

  var h = document.getElementById('h');
  var m = document.getElementById('m');
  h.textContent = hr;
  m.textContent = min;

  setTimeout("clock()", 1000);
}

window.onload=clock;
