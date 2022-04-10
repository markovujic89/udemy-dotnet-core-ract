// use typescript: enable variable to set more than one specific type
let data:number|string = 42;

data = 'tt';


export interface Duck{
    name: string;
    numberOfLegs: number;
    makeSound?: (sound: any) => void;

}
const duck1:Duck = {
    name: "duck1",
    numberOfLegs: 2,
    makeSound: (sound:string) => {console.log(sound)}
}

const duck2:Duck = {
    name: "duck2",
    numberOfLegs: 2,
    makeSound: (sound:any) => {console.log(sound)}
}

// typescript: call object which is possible undefinde. Use ! to prevent error.
duck1.makeSound!("sound");

export const  ducks = [duck1,duck2];