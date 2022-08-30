// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const backgroundcolor = ((localStorage.getItem("backgroundcolor")) ? (localStorage.getItem("backgroundcolor")) : `charcole`)

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };
  document.body.style.background = backgroundcolor;


  let anim = el.animate(
    [{
      transform: "translate(0, 0)"
    },
    {
      transform: `translate(${to.x}rem, ${to.y}rem)`
    }
    ], {
    duration: (Math.random() + 1) * 2000, // random duration
    direction: "alternate",
    fill: "both",
    iterations: Infinity,
    easing: "ease-in-out"
  }
  );
});

function show_prompt() {
  var color = prompt('Please enter a hex code or color', '#3f4d63');
  if (color != null && color != "") {
    alert(color);
    if (window.localStorage) {
      if (!localStorage.getItem('backgroundcolor')) {
        localStorage['backgroundcolor'] = color;
        window.location.reload();
      } else { 
        localStorage.setItem("backgroundcolor", color);
        window.location.reload();
      }
    }
  }
}

function show_color() {
  alert(localStorage.getItem("backgroundcolor"))
}
