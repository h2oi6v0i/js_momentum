/**
 * TODO: 1. 변수 선언 위치 중요한가? width 변수를 함수 안으로 넣었더니 작동함!
 * TODO: 2. 반응형 사이즈 쉽게 잡는 법..
 * TODO: 3. 상수를 왼쪽에 쓰라는 게 이런 경우인가?
 */

const body = document.body;

function changeWidth() {

    const width = window.innerWidth;

    if (width >= 935) {
        body.style.backgroundColor = "#FAE000";
    } else if (width < 935 && width > 480 ) {
        body.style.backgroundColor = "#5F0980";
    } else {
        body.style.backgroundColor = "#3182F6";
    }
    
}

window.addEventListener("resize", changeWidth);