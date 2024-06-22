interface UserProps{
    name?:string;
    age?:number;
}

export class User {
    constructor(private data: UserProps) {}

    get(propName: keyof UserProps): number | string | undefined {
            return this.data[propName];
    }
    set(update:UserProps):void{
        Object.assign(this.data,update);
    }
}
