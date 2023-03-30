/**
 * [✔] 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
 * [✔] 범위에는 음수가 포함될 수 없습니다.
 * [✔] 실시간으로 범위 값을 업데이트해야 합니다.
 * [✔] 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
 * [✔] 유저에게 게임의 승패를 알려야 합니다.
 */

const maxNumberInput = document.getElementById("max-number-input");
const guessForm = document.getElementById("guess-form");
const guessNumberInput = document.getElementById("guess-number-input");
const messageArea = document.getElementById("message-area");
const messages = document.querySelector(".message");

const HIDDEN_CLASSNAME = "hidden";

function setMaxNumber() {
    const maxNumber = maxNumberInput.value;
    guessNumberInput.setAttribute("max", maxNumber);
}

maxNumberInput.addEventListener("input", setMaxNumber);


function handleSubmitEvent(event) {
    event.preventDefault();

    messageArea.classList.remove(HIDDEN_CLASSNAME);

    const maxNumber = maxNumberInput.value;
    const guessNumber = guessNumberInput.value;
    const randomNumber = Math.floor(Math.random() * maxNumber + 1);
    writeMessages(guessNumber, randomNumber);
}

guessForm.addEventListener("submit", handleSubmitEvent);

function writeMessages(guessNumber, randomNumber) {
    if (parseInt(guessNumber) === randomNumber) {
        messages.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}\nYou Won!`
    } else {
        messages.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}\nYou Lost!`
    }
}