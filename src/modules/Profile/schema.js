import * as yup from "yup";

export const fetchValuesSchema = yup.object({
  body: yup.object({
    did: yup
      .string()
      .typeError("DID must be a string")
      .required("DID is required"),
  }),
});