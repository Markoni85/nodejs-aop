import { AppBootstraper } from "./app-bootstraper";

console.log('startting the application');

const bl = AppBootstraper.getBussinesLogic();

bl.add(18, 33);
bl.concat(12, 2);
bl.power(2, 5);
