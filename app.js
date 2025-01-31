// masala 1

function helloName(name){
    return "Hello " + name + "!"
}

// masala 2

function makeAbba(a, b){
    return a + b + b + a
}

// masala 3

function makeTags(tag, word){
    return  `<${tag}>${word}</${tag}>`
}

// masala 4

function makeOutWord(out, word){
    return out.slice(0,2) + word + out.slice(2, 4)
}

// masala 5

function extraEnd(str){
    let a = str.slice(str.length - 2, str.length)
    return a + a + a
}

// masala 6

function firstTwo(str){
    return str.slice(0, 2)
}

// masala 7

function firstHalf(str){
    return str.slice(0, str.length)
}

// masala 8

function withoutEnd(str){
    return str.slice(1, str.length - 1)
}

// masala 9

function comboString(a, b){
    if(a.length > b.length) {
      return b + a + b
    } else {
      return a + b + a
    }
}

// masala 10

function nonStart(a, b){
    return a.slice(1) + b.slice(1)
}

// masala 11

function left2(str){
    return str.slice(2) + str.slice(0, 2)
}

// masala 12

function right2(str){
    return str.slice(str.length - 2, str.length) + str.slice(0, str.length - 2)
}

// masala 13

function theEnd(str, front){
    if(front) {
      return str[0]
    } else {
      return str[str.length - 1]
    }
}

// masala 14

function withoutEnd2(str){
    return str.slice(1, str.length - 1)
}

// masala 15

function middleTwo(str){
    return str.slice(str.length / 2 - 1 , str.length / 2 + 1)
}

// masala 16

function endsLy(str){
    let ends = str.slice(str.length - 2)
    if(ends == 'ly') {
      return true
    } else {
      return false
    }
}

// masala 17

function nTwice(str, n){
    return str.slice(0, n) + str.slice(str.length - n, str.length)
}

// masala 18

function twoChar(str, index){
    return str.slice(index, index + 2).length >= 2 ? str.slice(index, index + 2) : str.slice(0, 2)
}

// masala 19

function middleThree(str){
    return str.slice(str.length / 2 - 1, str.length / 2 + 2)
}

// masala 20

function hasBad(str){
    return str.slice(0, 3) == 'bad' || str.slice(1, 4) == 'bad'  ? true : false
}

// masala 21

function atFirst(str){
    return str.length >= 2 ? str.slice(0,2) : str.slice(0) ? str + '@' : '@@'  
}

// masala 22

function lastChars(a, b){
    let A = a[0] ? a[0] : "@"
    let B = b[b.length - 1] ? b[b.length - 1] : "@"
    return A + B
}

// masala 23

function conCat(a, b){
    if(a[a.length - 1] == b[0]) {
      return a + b.slice(1)
    } else {
      return a + b
    }
}

// masala 24

function lastTwo(str){
    if(str.length >= 2) {
      return str.slice(0, str.length - 2) + str[str.length - 1] + str[str.length - 2] 
    } else {
      return str
    }
    
}

// masala 25

function seeColor(str){
    if(str.slice(0, 3) == 'red') {
      return str.slice(0, 3)
    } else if(str.slice(0,4) == "blue") {
      return str.slice(0,4)
    } else {
      return ''
    }
}

// masala 26

function frontAgain(str){
    if(str.slice(0, 2) == str.slice(str.length - 2, str.length) && str.length > 1 ) {
      return true
    } else {
      return false
    }
}

// masala 27

function minCat(a, b){
    if(a.length > b.length) {
      return a.slice(a.length - b.length) + b 
    } else {
      return a + b.slice(b.length - a.length)
    }
}

// masala 28

function extraFront(str){
    return str.length >= 2 ? str.slice(0,2).repeat(3) : str.repeat(3)
}

// masala 29

function without2(str){
    if (str.slice(0, 2) == str.slice(str.length - 2) && str.length > 1) {
      return str.slice(2) 
    } else {
      return str
    }
}

// masala 30

function deFront(str){
    if(str[0] == 'a' && str[1] == "b") {
      return str[0] + str[1] + str.slice(2)
    } else if(str[1] == 'b') {
      return str[1] + str.slice(2)
    } else if(str[0] == 'a') {
      return str[0] + str.slice(2)
    }else {
      return str.slice(2)
    }
}

// masala 31

function startWord(str, word){
    if(str.slice(0, word.length) == word) {
      return str.slice(0, word.length)
    } else if(str.slice(1, word.length) == word.slice(1)) {
      return str.slice(0, word.length)
    } else {
      return ''
    }
}

// masala 32

function withoutX(str){
    if(str[0] == "x" && str[str.length - 1] == 'x') {
      return str.slice(1, str.length - 1)
    } else if(str[str.length - 1] == 'x') {
      return str.slice(0, str.length - 1)
    } else if(str[0] == "x"){
      return str.slice(1, str.length)
    } else {
      return str
    }
}

// masala 33

function withoutX2(str){
    if(str[0] == 'x' && str[1] == "x") {
      return str.slice(2)
    } else if (str[0] == "x") {
      return str.slice(1)
    } else if (str[1] == 'x') {
      return str[0] + str.slice(2)
    }  else {
      return str
    }
}