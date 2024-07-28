import  'reflect-metadata'
const plain ={
    color:'red'
}

Reflect.defineMetadata('note','This is a plain object',plain)

console.log(Reflect.getMetadata('note',plain))
console.log('')