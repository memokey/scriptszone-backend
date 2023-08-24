import {
  successResponse,
  errorResponse,
} from "../../../utils";
import PasteModel from "../model";

export const fetchPasteCountController = async (req, res) => {
  try {
    const {
      body: { searchValue },
    } = req;

    const pasteCount = await PasteModel.countDocuments({
      $or: [
        { title: new RegExp(searchValue, 'i') },
        { scripts: new RegExp(searchValue, 'i') },
        { description: new RegExp(searchValue, 'i') },
      ],
    });
    
    return successResponse({ res, response: { pasteCount: pasteCount } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
