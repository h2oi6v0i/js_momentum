const quotes = [
    {
        quote: "1번 문장",
        author: "1번 작가"
    },
    {
        quote: "2번 문장",
        author: "2번 작가"
    },
    {
        quote: "3번 문장",
        author: "3번 작가"
    },
    {
        quote: "4번 문장",
        author: "4번 작가"
    },
    {
        quote: "5번 문장",
        author: "5번 작가"
    },
    {
        quote: "6번 문장",
        author: "6번 작가"
    },
    {
        quote: "7번 문장",
        author: "7번 작가"
    },
    {
        quote: "8번 문장",
        author: "8번 작가"
    },
    {
        quote: "9번 문장",
        author: "9번 작가"
    },
    {
        quote: "10번 문장",
        author: "10번 작가"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;