export class Attribute<T extends object>{
    constructor(private data: T) {}

    get<K extends keyof T>(propName:  K):T[K]  {
            return this.data[propName];
    }
    set(update:T):void{
        Object.assign(this.data,update);
    }
}