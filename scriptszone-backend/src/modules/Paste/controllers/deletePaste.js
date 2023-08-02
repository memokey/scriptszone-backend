import {
  successResponse,
  errorResponse,
} from "../../../utils";
import PasteModel from "../model";

export const removePasteController = async (req, res) => {
  try {
    const {
      body: { id },
    } = req;

    await PasteModel.deleteOne({ _id: id });
    
    return successResponse({ res, response: {} });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
