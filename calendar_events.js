const calendarBody = document.getElementById('calendar-body')

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const today = new Date()
const todayIndex = today.getDay()
for (let i = 0; i < 7; i++) {
  const day = days[(todayIndex + i) % 7]
  const date = new Date(today)
  date.setDate(today.getDate() + i)
  const formattedDate = formatDate(date)
  const row = document.createElement('tr')
  row.innerHTML = `<td>${day}<br>${formattedDate}</td>`
  for (let i = 7; i <= 21; i++) {
    const time = `${i}:00`
    row.innerHTML += `<td class="time-slot" data-day="${day}" data-time="${time}">${time}</td>`
  }
  calendarBody.appendChild(row)
}

const timeSlots = document.querySelectorAll('.time-slot')

timeSlots.forEach((timeSlot) => {
  timeSlot.addEventListener('click', (event) => {
    const target = event.target
    target.classList.toggle('available')
    const availability = target.classList.contains('available')
    const day = target.dataset.day
    const time = target.dataset.time
    updateAvailabilityData(day, time, availability)
  })
})
function updateAvailabilityData(day, time, availability) {
  let availabilityData = JSON.parse(localStorage.getItem('availability')) || []
  if (availability) {
    const date = new Date()
    const formattedDate = formatDate(date)
    availabilityData.push({ day, time, date: formattedDate, availability })
    const timeSlot = document.querySelector(
      `td[data-day="${day}"][data-time="${time}"]`,
    )
    timeSlot.classList.add('selected')
  } else {
    availabilityData = availabilityData.filter(
      (slot) => !(slot.day === day && slot.time === time),
    )
    const timeSlot = document.querySelector(
      `td[data-day="${day}"][data-time="${time}"]`,
    )
    timeSlot.classList.remove('selected')
  }

  localStorage.setItem('availability', JSON.stringify(availabilityData))
  console.log(availabilityData)
}

function formatDate(date) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  return `${monthNames[monthIndex]} ${day}, ${year}`
}

window.addEventListener('beforeunload', () => {
  localStorage.clear()
})
