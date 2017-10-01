import moment from 'moment'
import {tz} from 'moment-timezone'

export function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

export function getNextSunday (d) {
  d = new Date(d)
  var day = d.getDay()
  var diff = d.getDate() + 6
  return new Date(d.setDate(diff))
}

export function dateMonth (date) {
  return moment(date).format('Do MMMM')
}

export function getWeekSpan (date) {
  console.log({date});
  const newDate = moment({...date}).tz('Pacific/Auckland')
  console.log({newDate});
  const monday = getMonday(newDate)
  const sunday = getNextSunday(monday)
  console.log({monday, sunday});
  return `${dateMonth(monday)} - ${dateMonth(sunday)}`
}

export function getDayName (date) {
  return moment(date).format('dddd')
}

export function isThisWeek (date) {
  return getWeekSpan(date) == getWeekSpan(new Date())
}

export function getDaysLeft () {
  const today = new Date()
  return 7 - (today.getDay() === 0 ? 7 : today.getDay())
}
