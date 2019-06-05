const Hand = require('pokersolver').Hand;

function findHand(cards){
  try{
    if(!Array.isArray(cards) || !cards.length){
      throw new Error("Function 'findHand' requires an array of cards as input. ex: ['5s', '5c', '5h', 'Td', 'Th']")
    }
    let hand = Hand.solve(cards);
    return hand.descr;
  } catch (err){
    console.error(err);
  }
}

module.exports = findHand;