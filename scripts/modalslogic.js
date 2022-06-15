// Modal #1
let close1 = document.getElementById("close1");
let min1 = document.getElementById("min1");
let btn1 = document.getElementById("btn_1");
let risorse = document.getElementById("risorse");
let risorseModal = document.getElementById("risorseModal");
let width = window.innerWidth;

risorse.addEventListener("click", (evt) => {
  evt.preventDefault();
  risorseModal.style.display = "block";
  btn1.style.display = "flex";

  if (width > 900) {
    risorseModal.style.left = "200px";
    risorseModal.style.top = "200px";
  }
});

min1.addEventListener("click", (evt) => {
  if ((risorseModal.style.display = "block")) {
    risorseModal.style.display = "none";
  }
});

close1.addEventListener("click", (evt) => {
  if ((risorseModal.style.display = "block")) {
    risorseModal.style.display = "none";
    btn1.style.display = "none";
  }
});
// App bar modal#1
btn1.addEventListener("click", (evt) => {
  if (width > 900) {
    risorseModal.style.left = "200px";
    risorseModal.style.top = "200px";
  }

  if ((risorseModal.style.display = risorseModal.style.display === "block")) {
    risorseModal.style.display = "none";
  } else {
    risorseModal.style.display = "block";
  }
});

// Modal on click z-index
risorseModal.addEventListener("click", (evt) => {
  risorseModal.style.zIndex = +"1";
});

// Modal 1 Windows move
var mousePosition;
var offset = [0, 0];
var div = document.getElementById("risorseModal");
var isDown = false;

div.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      div.style.left = mousePosition.x + offset[0] + "px";
      div.style.top = mousePosition.y + offset[1] + "px";

      div.style.marginTop = "0px";
    }
  },
  true
);

// Modal #2
let close2 = document.getElementById("close2");
let projects = document.getElementById("projects");
let projectsModal = document.getElementById("projectsModal");
let btn2 = document.getElementById("btn_2");
let min2 = document.getElementById("min2");

projects.addEventListener("click", (evt) => {
  evt.preventDefault();
  projectsModal.style.display = "block";
  btn2.style.display = "flex";

  if (width > 900) {
    projectsModal.style.left = "550px";
  }
});

min2.addEventListener("click", (evt) => {
  if ((projectsModal.style.display = "block")) {
    projectsModal.style.display = "none";
  }
});

close2.addEventListener("click", (evt) => {
  if ((projectsModal.style.display = "block")) {
    projectsModal.style.display = "none";
    btn2.style.display = "none";
  }
});

// App bar modal#2
btn2.addEventListener("click", (evt) => {
  if (width > 900) {
    projectsModal.style.left = "200px";
    projectsModal.style.top = "200px";
  }

  if ((projectsModal.style.display = projectsModal.style.display === "block")) {
    projectsModal.style.display = "none";
  } else {
    projectsModal.style.display = "block";
  }
});

// Modal on click z-index
// projectsModal.addEventListener('click', evt => {
//     projectsModal.style.zIndex  + "1"
// })

// Modal 2 Windows move
var mousePosition2;
var offset2 = [0, 0];
var div2 = document.getElementById("projectsModal");
var isDown2 = false;

div2.addEventListener(
  "mousedown",
  function (e) {
    isDown2 = true;
    offset2 = [div2.offsetLeft - e.clientX, div2.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown2 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown2) {
      mousePosition2 = {
        x: event.clientX,
        y: event.clientY,
      };
      div2.style.left = mousePosition2.x + offset2[0] + "px";
      div2.style.top = mousePosition2.y + offset2[1] + "px";

      div2.style.marginTop = "0px";
    }
  },
  true
);

// TEST

let closeT = document.getElementById("closeT");
let test = document.getElementById("test");
let testModal = document.getElementById("testModal");
// let btnT = document.getElementById("btn_T");
let minT = document.getElementById("minT");

test.addEventListener("click", (evt) => {
  evt.preventDefault();
  testModal.style.display = "block";
  // btnT.style.display = "flex";

  if (width > 900) {
    testModal.style.left = "400px";
  }
});

minT.addEventListener("click", (evt) => {
  if ((testModal.style.display = "block")) {
    testModal.style.display = "none";
  }
});

closeT.addEventListener("click", (evt) => {
  if ((testModal.style.display = "block")) {
    testModal.style.display = "none";
    // btnT.style.display = "none";
  }
});

// App bar modal#2
// btnT.addEventListener("click", (evt) => {
//   if (width > 900) {
//     testModal.style.left = "200px";
//     testModal.style.top = "200px";
//   }

//   if ((testModal.style.display = testModal.style.display === "block")) {
//     testModal.style.display = "none";
//   } else {
//     testModal.style.display = "block";
//   }
// });

// Modal on click z-index
// testModal.addEventListener('click', evt => {
//     testModal.style.zIndex  + "1"
// })

// Modal 2 Windows move
var mousePositionT;
var offsetT = [0, 0];
var divT = document.getElementById("testModal");
var isDownT = false;

divT.addEventListener(
  "mousedown",
  function (e) {
    isDownT = true;
    offsetT = [divT.offsetLeft - e.clientX, divT.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDownT = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDownT) {
      mousePositionT = {
        x: event.clientX,
        y: event.clientY,
      };
      divT.style.left = mousePositionT.x + offsetT[0] + "px";
      divT.style.top = mousePositionT.y + offsetT[1] + "px";

      divT.style.marginTop = "0px";
    }
  },
  true
);

// KBNB

let closeK = document.getElementById("closeK");
let kbnb = document.getElementById("kbnb");
let kModal = document.getElementById("kModal");
// let btnT = document.getElementById("btn_T");
let minK = document.getElementById("minK");

kbnb.addEventListener("click", (evt) => {
  evt.preventDefault();
  kModal.style.display = "block";
  // btnT.style.display = "flex";

  if (width > 900) {
    kModal.style.left = "400px";
  }
});

minK.addEventListener("click", (evt) => {
  if ((kModal.style.display = "block")) {
    kModal.style.display = "none";
  }
});

closeK.addEventListener("click", (evt) => {
  if ((kModal.style.display = "block")) {
    kModal.style.display = "none";
    // btnT.style.display = "none";
  }
});

// App bar modal#2
// btnT.addEventListener("click", (evt) => {
//   if (width > 900) {
//     testModal.style.left = "200px";
//     testModal.style.top = "200px";
//   }

//   if ((testModal.style.display = testModal.style.display === "block")) {
//     testModal.style.display = "none";
//   } else {
//     testModal.style.display = "block";
//   }
// });

// Modal on click z-index
// testModal.addEventListener('click', evt => {
//     testModal.style.zIndex  + "1"
// })

// Modal 2 Windows move
var mousePositionK;
var offsetK = [0, 0];
var divK = document.getElementById("kModal");
var isDownK = false;

divK.addEventListener(
  "mousedown",
  function (e) {
    isDownK = true;
    offsetK = [divK.offsetLeft - e.clientX, divK.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDownK = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDownK) {
      mousePositionK = {
        x: event.clientX,
        y: event.clientY,
      };
      divK.style.left = mousePositionK.x + offsetK[0] + "px";
      divK.style.top = mousePositionK.y + offsetK[1] + "px";

      divK.style.marginTop = "0px";
    }
  },
  true
);


// BROWSE

let closeB = document.getElementById("closeB");
let browse = document.getElementById("browse");
let bModal = document.getElementById("bModal");
// let btnT = document.getElementById("btn_T");
let minB = document.getElementById("minB");

browse.addEventListener("click", (evt) => {
  evt.preventDefault();
  bModal.style.display = "block";
  // btnT.style.display = "flex";

  if (width > 900) {
    bModal.style.left = "400px";
  }
});

minB.addEventListener("click", (evt) => {
  if ((bModal.style.display = "block")) {
    bModal.style.display = "none";
  }
});

closeB.addEventListener("click", (evt) => {
  if ((bModal.style.display = "block")) {
    bModal.style.display = "none";
    // btnT.style.display = "none";
  }
});

// Modal 2 Windows move
var mousePositionB;
var offsetB = [0, 0];
var divB = document.getElementById("bModal");
var isDownB = false;

divB.addEventListener(
  "mousedown",
  function (e) {
    isDownB = true;
    offsetB = [divB.offsetLeft - e.clientX, divB.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDownB = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDownB) {
      mousePositionB = {
        x: event.clientX,
        y: event.clientY,
      };
      divB.style.left = mousePositionB.x + offsetB[0] + "px";
      divB.style.top = mousePositionB.y + offsetB[1] + "px";

      divB.style.marginTop = "0px";
    }
  },
  true
);


// Modal #3
let close3 = document.getElementById("close3");
let cmd = document.getElementById("cmd");
let cmdModal = document.getElementById("cmdModal");
let btn3 = document.getElementById("btn_3");
let min3 = document.getElementById("min3");

cmd.addEventListener("click", (evt) => {
  evt.preventDefault();
  cmdModal.style.display = "block";
  btn3.style.display = "flex";

  if (width > 900) {
    cmdModal.style.left = "150px";
  }
});

min3.addEventListener("click", (evt) => {
  if ((cmdModal.style.display = "block")) {
    cmdModal.style.display = "none";
  }
});

close3.addEventListener("click", (evt) => {
  if ((cmdModal.style.display = "block")) {
    cmdModal.style.display = "none";
    btn3.style.display = "none";
  }
});

// App bar modal#3
btn3.addEventListener("click", (evt) => {
  if (width > 900) {
    cmdModal.style.left = "200px";
    cmdModal.style.top = "200px";
  }

  if ((cmdModal.style.display = cmdModal.style.display === "block")) {
    cmdModal.style.display = "none";
  } else {
    cmdModal.style.display = "block";
  }
});

// Modal 3 Windows move
var mousePosition3;
var offset3 = [0, 0];
var div3 = document.getElementById("cmdModal");
var isDown3 = false;

div3.addEventListener(
  "mousedown",
  function (e) {
    isDown3 = true;
    offset3 = [div3.offsetLeft - e.clientX, div3.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown3 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown3) {
      mousePosition3 = {
        x: event.clientX,
        y: event.clientY,
      };
      div3.style.left = mousePosition3.x + offset3[0] + "px";
      div3.style.top = mousePosition3.y + offset3[1] + "px";

      div3.style.marginTop = "0px";
    }
  },
  true
);

// Modal #4
let close4 = document.getElementById("close4");
let cestino = document.getElementById("cestino");
let cestinoModal = document.getElementById("cestinoModal");
let btn4 = document.getElementById("btn_4");
let min4 = document.getElementById("min4");

cestino.addEventListener("click", (evt) => {
  evt.preventDefault();
  cestinoModal.style.display = "block";
  btn4.style.display = "flex";

  if (width > 900) {
    cestinoModal.style.top = "150px";
  }
});

min4.addEventListener("click", (evt) => {
  if ((cestinoModal.style.display = "block")) {
    cestinoModal.style.display = "none";
  }
});

close4.addEventListener("click", (evt) => {
  if ((cestinoModal.style.display = "block")) {
    cestinoModal.style.display = "none";
    btn4.style.display = "none";
  }
});

btn4.addEventListener("click", (evt) => {
  if (width > 900) {
    cestinoModal.style.left = "200px";
    cestinoModal.style.top = "200px";
  }

  if ((cestinoModal.style.display = cestinoModal.style.display === "block")) {
    cestinoModal.style.display = "none";
  } else {
    cestinoModal.style.display = "block";
  }
});

// Modal 4 Windows move
var mousePosition4;
var offset4 = [0, 0];
var div4 = document.getElementById("cestinoModal");
var isDown4 = false;

div4.addEventListener(
  "mousedown",
  function (e) {
    isDown4 = true;
    offset4 = [div4.offsetLeft - e.clientX, div4.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown4 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown4) {
      mousePosition4 = {
        x: event.clientX,
        y: event.clientY,
      };
      div4.style.left = mousePosition4.x + offset4[0] + "px";
      div4.style.top = mousePosition4.y + offset4[1] + "px";

      div4.style.marginTop = "0px";
    }
  },
  true
);

// Modal #5
let close5 = document.getElementById("close5");
let chromeButton = document.getElementById("chrome_button");
let chromee = document.getElementById("chrome");
let chromeModal = document.getElementById("chromeModal");
let btn5 = document.getElementById("btn5");
var audio = new Audio("audio/troll.mp3");

chromee.addEventListener("click", (evt) => {
  evt.preventDefault();
  chromeModal.style.display = "block";
  btn5.style.display = "flex";
  audio.volume = 0.2;
  audio.play();
});

close5.addEventListener("click", (evt) => {
  if ((chromeModal.style.display = "block")) {
    chromeModal.style.display = "none";
    btn5.style.display = "none";
    audio.pause();
  }
});

chromeButton.addEventListener("click", (evt) => {
  if ((chromeModal.style.display = "block")) {
    chromeModal.style.display = "none";
    btn5.style.display = "none";
    audio.pause();
  }
});

// Modal 5 Windows move
var mousePosition5;
var offset5 = [0, 0];
var div5 = document.getElementById("chromeModal");
var isDown5 = false;

div5.addEventListener(
  "mousedown",
  function (e) {
    isDown5 = true;
    offset5 = [div5.offsetLeft - e.clientX, div5.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown5 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown5) {
      mousePosition5 = {
        x: event.clientX,
        y: event.clientY,
      };
      div5.style.left = mousePosition5.x + offset5[0] + "px";
      div5.style.top = mousePosition5.y + offset5[1] + "px";

      div5.style.marginTop = "0px";
    }
  },
  true
);

// Coming Soon
let btnstart = document.getElementById("btnstart");
let close6 = document.getElementById("close6");
let comingModal = document.getElementById("comingModal");
let comingButton = document.getElementById("comingButton");
let btn6 = document.getElementById("btn6");

btnstart.addEventListener("click", (evt) => {
  evt.preventDefault();
  comingModal.style.display = "block";
  btn6.style.display = "flex";
});

close6.addEventListener("click", (evt) => {
  if ((comingModal.style.display = "block")) {
    comingModal.style.display = "none";
    btn6.style.display = "none";
    audio.pause();
  }
});

comingButton.addEventListener("click", (evt) => {
  if ((comingModal.style.display = "block")) {
    comingModal.style.display = "none";
    btn6.style.display = "none";
  }
});

// Modal 6 Windows move
var mousePosition5;
var offset5 = [0, 0];
var div6 = document.getElementById("comingModal");
var isDown5 = false;

div6.addEventListener(
  "mousedown",
  function (e) {
    isDown5 = true;
    offset5 = [div6.offsetLeft - e.clientX, div6.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown5 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown5) {
      mousePosition5 = {
        x: event.clientX,
        y: event.clientY,
      };
      div6.style.left = mousePosition5.x + offset5[0] + "px";
      div6.style.top = mousePosition5.y + offset5[1] + "px";

      div6.style.marginTop = "0px";
    }
  },
  true
);


// Modal #7
let close7 = document.getElementById("close7");
let social = document.getElementById("social");
let socialModal = document.getElementById("socialModal");
let btn7 = document.getElementById("btn7");
let min7 = document.getElementById("min7");

social.addEventListener("click", (evt) => {
  evt.preventDefault();
  socialModal.style.display = "block";
  btn7.style.display = "flex";

  if (width > 900) {
    socialModal.style.left = "550px";
  }
});

min7.addEventListener("click", (evt) => {
  if ((socialModal.style.display = "block")) {
    socialModal.style.display = "none";
  }
});

close7.addEventListener("click", (evt) => {
  if ((socialModal.style.display = "block")) {
    socialModal.style.display = "none";
    btn7.style.display = "none";
  }
});

// App bar modal#7
btn7.addEventListener("click", (evt) => {
  if (width > 900) {
    socialModal.style.left = "200px";
    socialModal.style.top = "200px";
  }

  if ((socialModal.style.display = socialModal.style.display === "block")) {
    socialModal.style.display = "none";
  } else {
    socialModal.style.display = "block";
  }
});

// Modal 7 Windows move
var mousePosition7;
var offset7 = [0, 0];
var div7 = document.getElementById("socialModal");
var isDown7 = false;

div7.addEventListener(
  "mousedown",
  function (e) {
    isDown7 = true;
    offset7 = [div7.offsetLeft - e.clientX, div7.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown7 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown7) {
      mousePosition7 = {
        x: event.clientX,
        y: event.clientY,
      };
      div7.style.left = mousePosition7.x + offset7[0] + "px";
      div7.style.top = mousePosition7.y + offset7[1] + "px";

      div7.style.marginTop = "0px";
    }
  },
  true
);

