import { registerApplication, start } from "single-spa";

//issue is that when apps unmount, data lost- so handling this in root config 
//for the form info to pass between apps/micro-frontends
let loanAppData = {};

//setter/getters to save local state
const setLoanAppData = (data) => {
  loanAppData = data;
}

const getLoanAppData = () => {
  return loanAppData;
}
//registering each piece with single spa 
//convention uses '@' then the org name for name(package.json has this convention there too.)
registerApplication({
  name: "@built/loan-application",
  app: () => System.import("@built/loan-application"),
  activeWhen: ["/loan-application"],
  customProps: {
    setLoanAppData,
    getLoanAppData
  }
});

registerApplication({
  name: "@built/success",
  app: () => System.import("@built/success"),
  activeWhen: ["/success"],
  customProps: {
    setLoanAppData,
    getLoanAppData
  }
});

start();
