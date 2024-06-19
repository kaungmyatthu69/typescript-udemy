class ArrayoFNumbers{
    constructor(public collections:number[]){}
    get (index:number):number{
       return this.collections[index];
    }
}

class ArrayOfStrings{
    constructor(public collections:string[]){}
    get (index:number):string{
       return this.collections[index];
    }
}

class ArrayOfAnything<T>{
    constructor(public collections:T[]){}
    get (index:number):T{
       return this.collections[index];
    }
}


//Genric function
function printAnything<T>(arr:T[]):void{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printAnything<string>(['a','b','c'])

//Generic Constraints

class Cars{
    print():void{
        console.log('I am cars class');
        
    }
}
class Houses{
    print():void{
        console.log('I am houses class');
        
    }
}

interface Printable{
    print():void;
}

function printHousesOrCars<T extends Printable>(arr:T[]){
    for(let i=0;i<arr.length;i++){
        arr[i].print();
    }
}

printHousesOrCars<Cars>([new Cars(),new Cars()]);
printHousesOrCars<Houses>([new Houses(),new Houses()]);