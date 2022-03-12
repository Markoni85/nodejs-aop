export interface IMyBussinessLogic {
    add(a: number, b: number): number;
    concat(a: number, b: number): number;
    power(a: number, b: number): number;
}

export class MyBussinessLogic implements IMyBussinessLogic {

    add(a: number, b: number) {
        console.log("Calling add")
        return a + b
    }

    concat(a: number, b: number) {
        console.log("Calling concat")
        return a + b
    }

    power(a: number, b: number) {
        console.log("Calling power")
        return a ** b
    }
}