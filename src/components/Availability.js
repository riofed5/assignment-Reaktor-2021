import React, {useState} from 'react'
import {useContextApp} from '../helpers/context';
import {findAvailabilityById} from '../helpers/Helpers'
import {fetchAvailabilityByManufacturer} from '../helpers/dataAPIs'

const Availability = ({manufacturer, id}) => {
  const [loading, setLoading] = useState(false)
  const {context, setContext} = useContextApp()

  const promise = context[manufacturer]
  const availability = promise ? findAvailabilityById(promise, id) : 'Error'

  const refetchAvailability = async () => {
    setLoading(true);

    // re-fetch data of one manufacturer
    const refetchedData = await fetchAvailabilityByManufacturer(manufacturer);
    // update state
    setContext({
      ...context,
      [manufacturer]: refetchedData,
    })

    setLoading(false);
  }

  const statusOfProduct = (status) => {
    switch (status) {
      case 'INSTOCK':
        return <span className="instock">yes</span>
      case 'LESSTHAN10':
        return <span className="lessthan10">{'< 10'}</span>
      case 'OUTOFSTOCK':
        return <span className="outofstock">no</span>
      case 'Error':
        console.log('Error: Fetch Availability data is failed!')
        return <span className="outofstock">Error!</span>
      case 'not found':
        return <button type="button" disabled={loading} onClick={refetchAvailability}>Try Again!</button>
      default:
        return status
    }
  }

  return (
    <div>
      {loading
        ? <div>Loading... </div>
        : statusOfProduct(availability)}
    </div>
  )
}

export default Availability
