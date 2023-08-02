import { RouteModule } from "../RouteModuleClass";
import { 
  newPasteController,
  fetchPasteController,
  removePasteController,
  fetchPastesController,
} from "./controllers";

import {
  newPasteSchema,
  removePasteSchema,
  fetchPastesSchema
} from "./schema";

class PasteModule extends RouteModule {
  publicRoutes() {
    // fetch a paste.
    this.router.get(
      "/fetchpaste/:id",
      fetchPasteController
    );

    // fetch pastes with search value.
    this.router.post(
      "/fetchpastes",
      this.validateSchema(fetchPastesSchema, { includeQuery: true }),
      fetchPastesController
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