import { inject } from "./aop/aop-config";
import { loggingAspect, printTypeOfReturnedValueAspect } from "./aop/aspects/aspect-config";
import { IMyBussinessLogic, MyBussinessLogic } from "./bl/bussines-logic";

export class AppBootstraper {

    constructor() {

    }

    public static getBussinesLogic(): IMyBussinessLogic {
        const myBL: IMyBussinessLogic =  new MyBussinessLogic();

        // Configure AOP
        inject(myBL, loggingAspect, "before", "methods");
        inject(myBL, printTypeOfReturnedValueAspect, "afterReturning", "methods");

        return myBL;
    }
}
