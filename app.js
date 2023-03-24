/**
 * NOTE: 글씨 색상 tomato, blue 번갈아가면서 나오게
 */
const h1 = document.querySelector('div.hello:first-child h1');
// 
// function handleTitleClick() {
//     const currentColor = h1.style.color; // getter
//     let newColor;                        // setter

//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }


function handleTitleClick() {

    const clickedClass = "active";

    h1.classList.toggle(clickedClass);
 
}

h1.addEventListener("click", handleTitleClick);