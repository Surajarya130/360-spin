// let currentImageFolder = 1;

// function generateColorButtons() {
//   const colorButtonsContainer = document.getElementById("colorButtons");
//   const imageFolders = ["1", "2", "3"]; // Corresponding image folders for each color

//   imageFolders.forEach((folder, index) => {
//     const button = document.createElement("button");
//     button.style.border = "none";
//     button.style.backgroundImage = `url(/images/color-${index + 1}.jpg)`;
//     button.style.backgroundSize = "cover";
//     button.style.width = "50px";
//     button.style.height = "50px";
//     button.style.borderRadius = "50%";
//     button.addEventListener("click", () => {
//       currentImageFolder = folder;
//       const displayedImage = document.getElementById("displayedImage");
//       displayedImage.src = `/images/${currentImageFolder}/img-01.png`;
//     });
//     colorButtonsContainer.appendChild(button);
//   });
// }

// generateColorButtons();

// const spinnerCustom = document.getElementById("spinnerCustom");
// spinnerCustom.setAttribute(
//   "data-options",
//   `filename: img-${currentImageFolder}.png; autospin: off;`,
// );
// console.log(spinnerCustom, "spinner custome");

// function generateColorButtons() {
//   const colorButtonsContainer = document.getElementById("colorButtons");
//   const imageFolders = ["1", "2", "3"]; // Corresponding image folders for each color

//   imageFolders.forEach((folder, index) => {
//     const button = document.createElement("button");
//     button.style.border = "none";
//     button.style.backgroundImage = `url(/images/color-${index + 1}.jpg)`;
//     button.style.backgroundSize = "cover";
//     button.style.width = "50px";
//     button.style.height = "50px";
//     button.style.borderRadius = "50%";
//     button.addEventListener("click", () => {
//       currentImageFolder = folder;
//     });
//     colorButtonsContainer.appendChild(button);
//   });
// }

// generateColorButtons();
