import RandomValues from '../models/RandomValues'

export function formatDate (date) {
  return new Date(date).toLocaleString('en-US', {
    timeZone: 'America/Denver',
    hour12: false,
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export async function createTimer (randomId, duration) {
  const timerCount = setInterval(async () => {
    const value = Math.floor(Math.random() * 16)
    await RandomValues.create({
      value,
      random_id: randomId
    })
  }, 100)

  setTimeout(() => {
    console.log(`Finished random_id: ${randomId} in ${duration / 1000}s`)
    clearInterval(timerCount)
  }, duration)
}
