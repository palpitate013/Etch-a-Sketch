for (let i = 0; i < 256; i++) {
  let main = document.createElement("div");
  main.className = "grid" + i;
  main.onmouseover = function () {
    mouseOver(i);
  };
  main.onmouseout = function () {
    mouseOut(i);
  };
  document.getElementById("main").appendChild(main);
}

let button = document.querySelector(".reset");

button.addEventListener("click", function () {
  for (i = 0; i < 256; i++) {
    document.querySelector(".grid" + i).style.backgroundColor = "#282828";
  }
});

function mouseOver(gridNumber) {
  document.querySelector(".grid" + gridNumber).style.backgroundColor = "red";
}

function mouseOut(gridNumber) {
  const startColor = { r: 255, g: 0, b: 0 }; // red
  const endColor = { r: 40, g: 40, b: 40 }; // grey

  let step = 0;
  const totalSteps = 100;
  const interval = 20;

  const fade = setInterval(() => {
    step++;

    const r = Math.round(
      startColor.r + (endColor.r - startColor.r) * (step / totalSteps),
    );
    const g = Math.round(
      startColor.g + (endColor.g - startColor.g) * (step / totalSteps),
    );
    const b = Math.round(
      startColor.b + (endColor.b - startColor.b) * (step / totalSteps),
    );

    document.querySelector(".grid" + gridNumber).style.backgroundColor =
      `rgb(${r}, ${g}, ${b})`;

    if (step >= totalSteps) {
      clearInterval(fade);
    }
  }, interval);
}
