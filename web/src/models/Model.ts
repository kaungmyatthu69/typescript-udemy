import { AxiosPromise, AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface ModelAttributes<T>{
    set(value:T):void;
    getAll():T;
    get<K extends keyof T>(key:K):T[K];

}
interface Sync<T>{
    fetch(id:number):AxiosPromise;
    save(data:T):AxiosPromise;
}

interface Events{
    on(eventName:string, callback:()=>void):void;
    trigger(eventName:string):void;
}

interface HasId{
    id?:number
}

export class Model<T extends HasId>{
    constructor(
        private attributes:ModelAttributes<T>,
        private events:Eventing,
        private sync:Sync<T>
    ){}
    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    get get (){
        return this.attributes.get
    }
    // on= this.events.on
    // trigger = this.events.trigger
    // get = this.attributes.get
   
    set(update:T):void{
        this.attributes.set(update)
        this.events.trigger('change')
    }
   fetch():void{
    const id = this.get('id')
    
    if(typeof id !== 'number'){
        throw new Error('Cannot fetch without id')
    }
    this.sync.fetch(id).then((respone:AxiosResponse):void => {
        this.set(respone.data)
    })
   }

   save():void{
    this.sync.save(this.attributes.getAll())
    .then((response:AxiosResponse ):void =>{
        this.trigger('save')
    

    }).catch(error=>
        this.trigger('error')
    )
    
   }

}