import { RouteModule } from "../RouteModuleClass";
import { 
  newPasteController,
  fetchPasteController,
  removePasteController,
} from "./controllers";

import {
  newPasteSchema,
  removePasteSchema
} from "./schema";

class PasteModule extends RouteModule {
  publicRoutes() {
    // insert a new paste.
    this.router.post(
      "/fetchPaste/:id",
      fetchPasteController
    );
  }
  privateRoutes() {
    // insert a new paste.
    this.router.post(
      "/newpaste",
      this.validateSchema(newPasteSchema, { includeQuery: true }),
      newPasteController
    );
    this.router.post(
      "/deletepaste",
      this.validateSchema(removePasteSchema, { includeQuery: true }),
      removePasteController
    );
  }
}

export const pasteModule = new PasteModule();