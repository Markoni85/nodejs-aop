const getMethods = (obj: any) => {

    const propNames = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));  
    return propNames.filter(item => typeof obj[item] == 'function' && obj[item] != 'constructor' ); 
}


const replaceMethod = function(target: any, methodName: any, aspect: any, advice: any) {
    const originalCode = target[methodName]
    target[methodName] = (...args: any) => {
        if(["before", "around"].includes(advice)) {
            aspect.apply(target, args)
        }
        const returnedValue = originalCode.apply(target, args)
        if(["after", "around"].includes(advice)) {
            aspect.apply(target, args)
        }
        if("afterReturning" == advice) {
            return aspect.apply(target, [returnedValue])
        } else {
            return returnedValue
        }
    }
}

export const inject = function(target: any, aspect: any, advice: any, pointcut: string, method = null) {
    if(pointcut == "method") {
        if(method != null) {
            replaceMethod(target, method, aspect, advice)    
        } else {
            throw new Error("Tryin to add an aspect to a method, but no method specified")
        }
    }
    if(pointcut == "methods") {
        const methods = getMethods(target)
        methods.forEach( m => {
            replaceMethod(target, m, aspect, advice)
        })
    }
}