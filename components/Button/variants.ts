const variants = {
  primary: {
    button:
      "btn-primary  bg-light-primary text-white hover:bg-light-primary/90 border-none",
    text: "",
  },
  purple: {
    button:
      "btn-purple text-light-common-white bg-light-purple hover:bg-light-purple/90 border-none",
    text: "",
  },
  error: {
    button:
      "btn-outline  !text-light-red hover:border-none transition duration-150 border-light-red bg-light-red-200 hover:bg-light-red/50 border",
    text: "text-light-red group-hover:text-light-common-light font-semibold",
  },
  primaryBordered: {
    button:
      "group  btn-outline !text-light-primary hover:border-none transition duration-150 hover:!text-light-common-light border-light-primary bg-light-primary-200 hover:bg-light-primary/50 border",
    text: "text-light-primary group-hover:text-light-common-light font-semibold",
  },
} as const;

export type VariantTypes = keyof typeof variants;

export default variants;
