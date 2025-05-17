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

function addFavicons() {
  const head = document.head;

  const links = [
    { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" }
  ];

  links.forEach(attrs => {
    const link = document.createElement("link");
    for (const key in attrs) {
      link.setAttribute(key, attrs[key]);
    }
    head.appendChild(link);
  });
}

addFavicons();
