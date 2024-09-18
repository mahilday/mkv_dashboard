import { appTitle } from "@/constants/general";


const getPageTitle = (title?: string) => {
  if (!title) {
    return appTitle;
  }

  return `${title} | ${appTitle}`;
};

export default getPageTitle;
