const quotes = [
    {
        quote : "Love looks not with the eyes, but with the mind.",
        title: "Beauty And The Beast",
    },
    {
        quote : "So, this is love, so this is what makes life divine.",
        title: " Cinderella",
    },
    {
        quote : "Remember you're the one who can fill the world with sunshine.",
        title: "Snow White",
    },
    {
        quote : "You and do it you sincerely want, but you have to do it again. Then finally you can do it.",
        title: "The Little Mermaid",
    },
    {
        quote : "The real reason is because I wanted to prove I could do something.",
        title: " Mulan",
    },
    {
        quote : "I can't go back to yesterday, because I was a different person then.",
        title: " Alice in Wonderland",
    },
    {
        quote : "A conscience is that still, small voice that people won't listen to.",
        title: "Pinocchio",
    },
    {
        quote : "Our fate lives within us. You only have to be brave enough to see it.",
        title: "Rapunzel",
    },
    {
        quote : "I'm going to live every minute of it.",
        title: "Soul",
    },
    {
        quote : "You're the most extaordinary person I've ever known.",
        title: "Frozen"
    },
]

const quote = document.querySelector(".daily #quote span:first-child");
const title = document.querySelector(".daily #quote span:last-child");

let randomNum = Math.floor(Math.random()*quotes.length);

quote.innerText = `"${quotes[randomNum].quote}"`;
title.innerText = `- ${quotes[randomNum].title} -`;
