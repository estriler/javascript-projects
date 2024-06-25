function makeLine(num){
    let str = "";
    for(let i = 0; i < num; i++){
        str += "#";
    }
    return str;
}

// console.log(makeLine(12));

function makeSquare(size){
    let square = "";
    for(let i = 0; i < size; i++){
        square += makeLine(size);
     if(i < size-1){
        square += "\n";
     }
    }
    return square;
}

// console.log(makeSquare(7));

function makeRectangle(width, height){
    let rectangle = "";
    for(let i = 0; i < height; i++){ 
        rectangle += makeLine(width);
        if(i < height-1){
            rectangle += "\n";
        }
    }
    return rectangle;
}

console.log(makeRectangle(5,3));