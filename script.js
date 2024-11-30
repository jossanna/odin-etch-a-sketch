const container = document.querySelector(".container");

const gridSizeButton = document.querySelector("#grid-size-button");
const DEFAULT_GRID_SIZE = 16;

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

function changeGridSize(gridSize) {
  container.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("box");
    div.style.flexBasis = `calc(100% / ${gridSize})`;

    div.addEventListener("mouseover", () => {
      if (!div.style.backgroundColor) {
        div.style.backgroundColor = getRandomColor();
      }
      div.style.transition = "background-color 0.3s ease";
      div.style.opacity = (parseFloat(div.style.opacity) || 0) + 0.1;
    });
  }
}

// Initialize with default grid size
changeGridSize(DEFAULT_GRID_SIZE);

gridSizeButton.addEventListener("click", () => {
  let gridSize = prompt("Enter the number of squares per side for the grid:");
  if (gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  changeGridSize(gridSize);
});
