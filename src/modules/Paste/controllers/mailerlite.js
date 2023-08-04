import axios from "axios";
import {
  successResponse,
  errorResponse,
} from "../../../utils";

export const MailerliteController = async (req, res) => {
  try {
    const {
      body: { email },
    } = req;

    const response = await axios.post(
        `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`,
        { 
            email: email,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
            }
        }
    );
    
    return successResponse({ res, response: { paste: [] } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};
