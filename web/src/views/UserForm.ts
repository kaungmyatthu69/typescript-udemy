export class UserForm{
    constructor (public parent:Element){
    }
    onButtonClick(){
        console.log('Hi there')
    }
    template():string{
        return `
        <div>
        <h1>User Form </h1>
        <input/>
        </div>
        `
    }
    render():void{
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()
        this.parent.append(templateElement.content)
    }
}