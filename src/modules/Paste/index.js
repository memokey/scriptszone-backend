import { RouteModule } from "../RouteModuleClass";
import { 
  newPasteController,
  fetchPasteController,
  removePasteController,
  fetchPastesController,
  fetchThumbnailController,
  countViewsController,
  MailerliteController,
} from "./controllers";

import {
  newPasteSchema,
  removePasteSchema,
  fetchPastesSchema,
  fetchThumbnailSchema,
  MailerliteSchema
} from "./schema";

class PasteModule extends RouteModule {
  publicRoutes() {
    // fetch a paste.
    this.router.get(
      "/fetchpaste/:id",
      fetchPasteController
    );

    // fetch a paste.
    this.router.get(
      "/countViews/:id",
      countViewsController
    );

    // fetch pastes with search value.
    this.router.post(
      "/fetchpastes",
      this.validateSchema(fetchPastesSchema, { includeQuery: true }),
      fetchPastesController
    );

    this.router.post(
      "/fetchThumbnail",
      this.validateSchema(fetchThumbnailSchema, { includeQuery: true }),
      fetchThumbnailController
    );

    this.router.post(
      "/mailerlite",
      this.validateSchema(MailerliteSchema, { includeQuery: true }),
      MailerliteController
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