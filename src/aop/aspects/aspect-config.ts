export function loggingAspect(...args: any[]) {
    console.log("== Calling the logger function ==")
    console.log("Arguments received: " + args)
}

export function printTypeOfReturnedValueAspect(value: any) {
    console.log("Returned type: " + typeof value)
}