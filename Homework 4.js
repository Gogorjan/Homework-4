            //  1






let arr = [1 , 5 , 20 , 6 , 8 , 5 , 7 , 9] ;

function maxMultipleDigits( arr ) {
    let newArr = [] ;
    for ( let i = 0 ; i < arr.length - 1 ; i++ ) {
        newArr.push( arr[i] * arr[i + 1] ) ;
    }
    newArr.sort( ( a , b ) => a - b ) ;
    return newArr[ newArr.length - 1 ] ;
}

console.log( maxMultipleDigits( arr ) ) ;




//             2






let arr = [1 , 5 , 13 , 6 , 8 , 11 , 7 , 9] ;

function maxMinDigits( arr ) {
    arr.sort( ( a , b ) => a - b ) ;
    let max = arr[arr.length - 1] ;
    return max - arr.length ;
}

console.log( maxMinDigits( arr ) ) ;



//            3







let str = 'Prisoner of War' ;
// let str = 'Have a good night' ;

function acronym( str ) {
    let arr = str.split( ' ' ) ;
    let acronumArr = arr.map( ( value , index ) => value = arr[index][0].toUpperCase() ) ;
    return acronumArr.join( '' ) ;
}

console.log( acronym( str ) ) ;





//            4








function divide( str , number ) {
    let newStr = '' ;
    let arr = [] ;
    for ( let i = 0 ; i < str.length - number + 1 ; i++ ) {
        for ( let j = i ; j <= i + number - 1 ; j++ ) {
            newStr += str[j] ;
        }
        arr.push( newStr ) ;
        newStr = '' ;
    }
    return arr ;
}

console.log( divide( '495215' , 3 ) ) ;






//       5





let treeNodes = [
    { parent: null , id: 0 },
    { parent: 0 , id: 1 },
    { parent: 0 , id: 2 },
    { parent: 1 , id: 3 },
    { parent: 1 , id: 4 },
    { parent: 2 , id: 5 },
    { parent: 4 , id: 6 },
] ;

function tree (treeNodes = []) {
    debugger ;
    const global = {}
    let pointerOfRoot = null;
    treeNodes.forEach(item => global[item.id] = {});
    treeNodes.forEach(item => {
        debugger ;
        if(item.parent === null) {
            pointerOfRoot = global[item.id];
        } else {
            global[item.parent][item.id] = global[item.id];
        }
    });
    return pointerOfRoot;
}


console.log( tree(treeNodes) ) ;




            
            

//        6






let arr = [  
    { book: 'Catcher in the Ry' , readStatus: true , percent: 40} ,
    { book: 'Animal Farm&quot', readStatus: true, percent: 20},
    { book: 'Solaris&quot' , readStatus: false, percent: 90 },
    { book: 'The Fall&quot' , readStatus: true, percent: 50 },
    { book: 'White Nights&quot' , readStatus: false, percent: 60 } ,
    { book: 'After Dark&quot' , readStatus: true, percent: 70 } ,
] ;

function sortedArr( arr ) {
    let filterArr = arr.filter( value => value.readStatus ) ;
    return filterArr.sort( ( a , b ) => a.percent - b.percent ) ;
}
console.log( sortedArr(arr) ) ;
