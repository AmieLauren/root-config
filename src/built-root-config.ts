import { registerApplication, start } from "single-spa";

//convention uses '@' then the org name for name(package.json has this convention there too.)
registerApplication({
  name: "@built/loan-application",
  app: () => System.import("@built/loan-application"),
  activeWhen: ["/loan-application"]
});

start();
