import { curry } from 'rambda';

const Hourly = curry( data => {
  console.log(data.hourly)
})

export default Hourly;