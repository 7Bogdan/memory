let infoSquares = ()=> {
let infoSquare = []
let interimArr = []

for (let i = 0; i < 8; i++) {
  let color = RandomColor();
  let id = i;
  interimArr.push({color, id}, {color, id});
}

for (let i = 0; i < 16; i++) {
  let id = interimArr[i].id;
  let color = interimArr[i].color;
  let index = i;
  let flipped = false;
  let found = false;
  infoSquare.push({color, id, index, flipped,found});
}

function RandomColor() {
  let backgroundColor =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  return {backgroundColor};
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffle(infoSquare)
return infoSquare ;
}
export default infoSquares;
