import {
  successResponse,
  errorResponse,
} from "../../../utils";
import PasteModel from "../model";

export const fetchPasteController = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const paste = await PasteModel.findById(id);
    
    return successResponse({ res, response: { paste } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
