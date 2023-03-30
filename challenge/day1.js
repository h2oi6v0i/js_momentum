
/**
 * TODO: Challenge Day 1
 * [✔] 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
 * [✔] 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
 * [✔] 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
 * [✔] 마우스를 우 클릭하면 title이 바뀌어야 합니다.
 * [✔] title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
 * [✔] .css 와 .html 파일은 수정하지 마세요.
 * [✔] 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
 * [✔] 모든 조건이 충족되지 못하면 ❌를 받습니다.
 */


const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");

const superEventHandler = {
    handleMouseEnter: function () {
        title.style.color = colors[0];
        title.innerText = "The mouse is here!";
    },

    handleMouseLeave: function () {
        title.style.color = colors[1];
        title.innerText = "The mouse is gone!";
    },

    handleWindowResize: function () {
        title.style.color = colors[2];
        title.innerText = "You just riszed!";
    },

    handleRightClick: function () {
        title.style.color = colors[4];
        title.innerText = "That was a right click!";
    }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);



/**
 * NOTE: 정답 해설
 * 
 * 객체 내부에 선언한 함수를 "메서드"라고 한다.
 * 작성한 함수를 사용해 이벤트 핸들러를 등록합니다. addEventListener메서드를 사용합니다.
 * h2에 mouseenter이벤트가 발생할 때 superEventHandler객체의 handleEnter메서드가 실행되어야 합니다.
 * 
 */


/**
 * NOTE: 1. 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
 * 
 * const superEventHandler = {
    'sayHello': () => {
        console.log('Hello!');
    },

    'sayHi': () => {
        console.log('Hi!');
    },

    'sayLikeThis': (text) => {
        console.log(text);
    },

    someData: "Object는 key에 대한 value로 함수를 가질 수 있어요!"
  }

 * const superEventHandler = {
    onMouse: function () {
        document.querySelector("h2").style.color = colors[0];
        title.innerText = "The mouse is here!";
    },

    outMouse: function () {
        document.querySelector("h2").style.color = colors[1];
        title.innerText = "The mouse is gone!";
    },
  }
 */
