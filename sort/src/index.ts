class Store{
    constructor(public collections:number[]) {
        this.collections = collections;
    }
    sort():void{
        const { length } = this.collections;
        for (let i=0; i<length;i++){
            for (let j=0; j<length-i-1; j++){
                if (this.collections[j] > this.collections[j+1]){
                    const temp = this.collections[j];
                    this.collections[j] = this.collections[j+1];
                    this.collections[j+1] = temp;
                }
            }
        }
    }
}

let bubble = new Store([10,3,0,-1,5,9,2]);
console.log('Before Sort:', bubble.collections);
bubble.sort();
console.log('After Sort:', bubble.collections);