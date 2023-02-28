//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`
    }, {
        quote: `"If life were predictable it would cease to be life, and be without flavor."`,
        person: `Eleanor Roosevelt`
    }, {
        quote: `"It is during our darkest moments that we must focus to see the light."`,
        person: `Aristotle`
    }, {
        quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
        person: `Franklin D. Roosevelt`
    }, {
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
        person: `Benjamin Franklin`
    }, {
        quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
        person: `Abraham Lincoln`
    }, {
        quote: `"The secret of success is to do the common thing uncommonly well."`,
        person: `John D. Rockefeller Jr`
    }, {
        quote: `"I never dreamed about success, I worked for it."`,
        person: `Estee Lauder`
    }, {
        quote: `"If you are not willing to risk the usual, you will have to settle for the ordinary."`,
        person: `Jim Rohn`
    }, {
        quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
        person: `Amelia Earhart`
    },
]

btn.addEventListener('click' ,function(){
    let random=Math.floor(Math.random()* quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})