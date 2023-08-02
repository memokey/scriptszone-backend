import {
  successResponse,
  errorResponse,
} from "../../../utils";
import PasteModel from "../model";

export const fetchPastesController = async (req, res) => {
  try {
    const {
      body: { searchValue },
    } = req;

    const pastes = await PasteModel.find({
      $or: [
        { title: new RegExp(searchValue, 'i') },
        { scripts: new RegExp(searchValue, 'i') },
        { description: new RegExp(searchValue, 'i') },
      ],
    });
    
    return successResponse({ res, response: { pastes } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
