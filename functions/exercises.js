function makeLine(num, char){
    let str = "";
    for(let i = 0; i < num; i++){
        str += char;
    }
    return str;
}

// console.log(makeLine(12, "E"));

function makeSquare(size, char){
    let square = "";
    for(let i = 0; i < size; i++){
        square += makeLine(size, char);
     if(i < size-1){
        square += "\n";
     }
    }
    return square;
}

// console.log(makeSquare(7, "R"));

function makeRectangle(width, height, char){
    let rectangle = "";
    for(let i = 0; i < height; i++){ 
        rectangle += makeLine(width, char);
        if(i < height-1){
            rectangle += "\n";
        }
    }
    return rectangle;
}

// console.log(makeRectangle(5,3,"I"));

function makeDownwardStairs(height, char){
    let stairs = "";
    for(let i = 1; i < height+1; i++){
        stairs += makeLine(height-(height-i), char)
        if(i < height){
            stairs += "\n";
        }
    }
    return stairs;
}

// console.log(makeDownwardStairs(5,"C"));

function makeSpaceLine(numSpaces, numChars, char){
    let str = "";
    for(let i = 0; i < numSpaces; i++){
        str += " ";
    }
    for(let i = 0; i < numChars; i++){
        str += char;
    }
    for(let i = 0; i < numSpaces; i++){
        str += " ";
    }
    return str;
}

// console.log(makeSpaceLine(3,5, "S"));

function makeIsoscelesTriangle(height, char){
    let str = "";
    for(let i = 0; i < height; i++){
        str += makeSpaceLine((height - i - 1), (2 * i + 1), char);
        if(i < height-1){
            str += "\n";
        }
    }
    return str;
}

// console.log(makeIsoscelesTriangle(5, "T"));

function reverse(str){
    return str.split('').reverse().join('');
}

function makeDiamond(height, char){
    let str = makeIsoscelesTriangle(height, char) + "\n" + reverse(makeIsoscelesTriangle(height, char));
    return str;

}

console.log(makeDiamond(5, "W"));