import { RouteModule } from "../RouteModuleClass";
import {
  fetchValuesSchema,
} from "./schema";
import {
  fetchValuesController
} from "./controllers";

class ProfileModule extends RouteModule {
  publicRoutes() {
    // get the domain name availability
    this.router.get(
      "/fetchValues/:did",
      this.validateSchema(fetchValuesSchema),
      fetchValuesController
    );
  }
}

export const profileModule = new ProfileModule();