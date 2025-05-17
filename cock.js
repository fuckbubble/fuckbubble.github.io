function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerText = timeString;

  setTimeout(updateClock, 1000);
}

updateClock();

// Dynamically add or change favicon
function setFavicon(url) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = url;
}

// Set your favicon (replace with your favicon path)
setFavicon('favicon.ico');
