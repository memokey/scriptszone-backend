import {
  successResponse,
  errorResponse,
} from "../../../utils";
import PasteModel from "../model";

export const fetchPastesController = async (req, res) => {
  try {
    const {
      body: { 
        searchValue,
        oldSort,
        firstPageIndex,
        lastPageIndex 
      },
    } = req;

    const pastes = await PasteModel.find({
      $or: [
        { title: new RegExp(searchValue, 'i') },
        { scripts: new RegExp(searchValue, 'i') },
        { description: new RegExp(searchValue, 'i') },
      ],
    })
    .sort({ createdAt: oldSort ? 1: -1 })  // This sorts in ascending order based on the field in sortFlag
    .skip(firstPageIndex)
    .limit(lastPageIndex - firstPageIndex + 1);
    
    return successResponse({ res, response: { pastes } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
