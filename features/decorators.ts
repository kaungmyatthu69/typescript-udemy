@classDecorator
class Boat {
  @testDecorator
    color: string = 'red';
    @testDecorator
    get formattedColor(): string {
      return `This boat's color is ${this.color}`;
    }
  @logError('Opps , Boat was sunk in the ocean')
    pilot(@paramsDecorator speed:string): void {
      if(speed === 'fast'){
        console.log('The pilot is flying at a fast speed');
      }else{
        console.log('The pilot is flying at a slow speed');
      }
      // throw new Error()
      // console.log('swish');
    }
  }

  function classDecorator(constructor: typeof Boat): void {
    console.log('Class decorator called on', constructor);
  }

  function testDecorator(target: any, key: string): void {
    console.log('Target:', target);
    console.log('Key:', key);
  }
  
  function paramsDecorator(target: any, key: string, index: number): void {
    console.log('Property name:', key);
    console.log('Value:', index);
  }

  function logError(errorMessage:string){
    return   function (target: any, key: string,desc:PropertyDescriptor): void {
      const method = desc.value;
      try{
        method()
      }catch(e){console.log(errorMessage)}
  
    }
  }



  // new Boat().pilot(); // Output: Opps , Boat was sunk
  // testDecorator(Boat.prototype,'formattedColor');