import {
  successResponse,
  errorResponse,
} from "../../../utils";
import PasteModel from "../model";

export const countViewsController = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const paste = await PasteModel.findById(id);
    paste.views += 1;
    paste.save();
    
    return successResponse({ res, response: { paste: [] } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
