let $ = document;

window.addEventListener("load", () => {
  let userAgent = navigator.userAgent;
  let userBrowser = null;

  if (userAgent.match(/edg/i)) {
    userBrowser = "edge";
  } else if (userAgent.match(/firefox/i)) {
    userBrowser = "firefox";
  } else if (userAgent.match(/chrome/i)) {
    userBrowser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    userBrowser = "safari";
  }

  let imgElem = $.querySelector(`.${userBrowser}`);
  imgElem ? (imgElem.style.opacity = 1) : null;
  console.log(userBrowser);
});
