export const arraysEqual = (array1: Array<any>, array2: Array<any>): boolean => {
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1 === array2) {
    return true;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  // TODO à améliorer
  for (let index = 0; index < array1.length; ++index) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};
