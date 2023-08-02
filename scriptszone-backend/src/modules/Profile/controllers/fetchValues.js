import {
  successResponse,
  errorResponse,
} from "../../../utils";

export const fetchValuesController = async (req, res) => {
  try {
    const {
      body: { did },
    } = req;

    const values = {};
  
    return successResponse({ res, response: { values } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
