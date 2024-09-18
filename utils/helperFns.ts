function hasEmptyValues(obj: { [x: string]: string }) {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      return true;
    }
  }
  return false;
}

export { hasEmptyValues };
