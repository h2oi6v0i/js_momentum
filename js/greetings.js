const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector( "#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit( event ) {
    event.preventDefault();
    loginForm.classList.add( HIDDEN_CLASSNAME );
    const userName = loginInput.value;
    localStorage.setItem( "userName", userName );
    painGreetings( userName );
}

function painGreetings( userName ) {
    greeting.innerText = `Hello, ${ userName }!`;
    greeting.classList.remove( HIDDEN_CLASSNAME );
}

/**
 * localStorage가 비어있으면 form 보여주기
 * localStorage에 userNaem 있으면 h1 보여주기
 */

const savedUserName = localStorage.getItem( "userName" );

if ( savedUserName === null ) {
    loginForm.classList.remove( HIDDEN_CLASSNAME );
    loginForm.addEventListener( "submit", onLoginSubmit );

} else {
    painGreetings( savedUserName );
}