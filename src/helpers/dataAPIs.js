
const apiUrl = 'https://bad-api-assignment.reaktor.com'
const headerForcedError = {headers: {'x-force-error-mode': 'all'}}

export const fetchData = async () => {
  const jacketItems = await fetchDataByCategory('jackets');
  const shirtItems = await fetchDataByCategory('shirts');
  const accessorieItems = await fetchDataByCategory('accessories');
  const repsFactory = await fetchAvailabilityByManufacturer('reps');
  const abiplosFactory = await fetchAvailabilityByManufacturer('abiplos');
  const noukeFactory = await fetchAvailabilityByManufacturer('nouke');
  const derpFactory = await fetchAvailabilityByManufacturer('derp');
  const xoonFactory = await fetchAvailabilityByManufacturer('xoon');

  return {
    jackets: jacketItems,
    shirts: shirtItems,
    accessories: accessorieItems,
    reps: repsFactory,
    abiplos: abiplosFactory,
    nouke: noukeFactory,
    derp: derpFactory,
    xoon: xoonFactory,
  }
}

export const fetchDataByCategory = async (categrory) => {
  try {
    const data = await fetch(`${apiUrl}/products/${categrory}`, headerForcedError)
    return await data.json();
  } catch (e) {
    throw Error(e)
  }
}

export const fetchAvailabilityByManufacturer = async (manufacturer) => {
  try {
    const data = await fetch(`${apiUrl}/availability/${manufacturer}`);
    const json = await data.json()
    return await Promise.all(json.response);
  } catch (e) {
    throw Error(e)
  }

}
