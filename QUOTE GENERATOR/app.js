const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
    "Do something today that your future self will thank you for. -Unknown",
    "Success is not final, failure is not fatal: It is the courage to continue that counts -Winston Churchill",
    "You don't have to be great to start, but you have to start to be great -Anonymous",
    "The best way to predict your future is to create it. -Abraham Lincoln",
    "Well done is better than well said. -Benjamin Franklin",
    "You miss 100% of the shots you don't take. -Wayne Gretz",
    "Don't watch the clock; do what it does. Keep going. -Sam Levens",
    "You are never too old to set another goal or to dream a new dream. -C",
    "The biggest risk is not taking any risk. -Mark Zuckerberg",
    "You can't go back and change the beginning, but you can start where you are and",
    "The best and most beautiful things in the world cannot be seen or even touched. - Mark",
    "“The only thing we have to fear is fear itself.” – Franklin D. Roosevelt",
];

//used to access the elements.
const generateBtn = document.getElementById("generate");
const quotesElement = document.getElementById("quotes");


generateRandomQuote = () =>
{
    const randomIndex = Math.floor(Math.random()* quotes.length);
    quotesElement.textContent = quotes[randomIndex];
}
//used to add event listeners so that how my things will react after clicking.
generate.addEventListener("click",() => {
    console.log("Button was clicked",generateRandomQuote());
    });
