// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and a bow!`);
//         // debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(message);
    console.log(message);
  }
  return messages;
}

writeCards(names);


function countDown(){
  for (let countDown = 10; countDown >= 0; countDown--){
    console.log(countDown);
  }
}