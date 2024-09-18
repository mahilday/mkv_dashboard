export const newDocumentFormType = {
  department: "",
  subFolder: "",
  documentId: "",
  documentTitle: "",
  classification: "",
  version: "",
  drafters: [{ function: "", colleague: "" }],
};

export type NewDocKeyType = keyof typeof newDocumentFormType;
export type NewDocType = typeof newDocumentFormType;
