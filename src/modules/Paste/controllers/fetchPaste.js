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

    let fetchedPaste = {
      _id: paste._id,
      title: paste.title,
      description: paste.description,
      scripts: paste.scripts,
      gameLink: paste.gameLink,
      createdAt: paste.createdAt,
    };
    
    return successResponse({ res, response: { paste: fetchedPaste } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
