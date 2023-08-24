import * as yup from "yup";

export const newPasteSchema = yup.object({
  body: yup.object({
    title: yup
      .string()
      .typeError("Title must be a string")
      .required("Title is required"),
    scripts: yup
      .string()
      .typeError("Script must be a string")
      .required("Script is required"),
    description: yup
      .string()
      .typeError("Description must be a string")
      .required("Description is required"),
    gameLink: yup
      .string()
      .typeError("Game link must be a string")
      .required("Game link is required"),
  }),
});

export const removePasteSchema = yup.object({
  body: yup.object({
    id: yup
      .string()
      .typeError("Paste ID must be a string")
      .required("Paste ID is required"),
  }),
});

export const fetchThumbnailSchema = yup.object({
  body: yup.object({
    gameLink: yup
      .string()
      .typeError("Game link must be a string")
      .required("Game link is required"),
  }),
});

export const fetchPastesSchema = yup.object({
  body: yup.object({
    searchValue: yup
      .string()
      .typeError("Search value must be a string"),
    firstPageIndex: yup
      .string()
      .typeError("First page index must be a string"),
    lastPageIndex: yup
      .string()
      .typeError("Last page index must be a string"),
      oldSort: yup
      .boolean()
      .typeError("Sort Flag index must be a boolean"),
  }),
});

export const fetchPasteCountSchema = yup.object({
  body: yup.object({
    searchValue: yup
      .string()
      .typeError("Search value must be a string"),
  }),
});

export const MailerliteSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .typeError("Email must be a string")
      .required("Email is required"),
  }),
});