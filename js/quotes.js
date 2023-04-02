const quotes = [
    {
        quote: "Nothing is a waste of time if you use the experience wisely.",
        author: "Auguste Rodin"
    },
    {
        quote: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "A long life may not be good enough, but a good life is long enough.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
        author: "Charlie Chaplin"
    },
    {
        quote: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
        author: "Isaac Asimov"
    },
    {
        quote: "Judge thyself with the judgment of sincerity, and thou will judge others with the judgment of charity.",
        author: "John Mitchell Mason"
    },
    {
        quote: "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "The superior man acts before he speaks, and afterwards speaks according to his action.",
        author: "Confucius"
    },
    {
        quote: "Failure is not the only punishment for laziness; there is also the success of others.",
        author: "Jules Renard"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;