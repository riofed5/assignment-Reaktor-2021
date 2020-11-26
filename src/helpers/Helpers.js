

export const getAvailabilityText = (text) => {
  const pattern = /<INSTOCKVALUE>(.*?)<\/INSTOCKVALUE>/
  const res = text.match(pattern)
  // console.log("Test here: ", res);
  return res[1]
}

export const findAvailabilityById = (array, itemId) => {
  for (let i = 0; i < array.length; i++) {
    if (itemId && array[i].id && itemId.toUpperCase() === array[i].id.toUpperCase()) {
      return getAvailabilityText(array[i].DATAPAYLOAD)
    }
  }
  return 'not found'
}
