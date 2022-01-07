const randomMessages = ['When you have a dream, you\'ve got to grab it and never let go', 'You define your own life, don\'t let others write your script', 'Fake it till you make it'];
let randomIndex = Math.floor(Math.random() * randomMessages.length);
const getRandomMessage = () => {
    return randomMessages[randomIndex];
}
console.log(getRandomMessage());