
// const MINUTE = 60 * 1000
// const HOUR = 60 * 60 * 1000
// const DAY = HOUR * 24


const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = HOUR * 24

const times = {
  days: DAY,
  hours: HOUR,
  minutes: MINUTE
}



export function intervalToObj(ms) {

  const obj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  ms = Math.abs(ms)


  Object.keys(times).forEach(key => {
    obj[key] = Math.floor(ms / times[key])         // Je divise pour extraire le nbr d'heures
    ms -= obj[key] * times[key]
  });

  obj.seconds = Math.round(ms / SECOND)


  return obj

}