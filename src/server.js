import express from 'express'
import cors from 'cors'
import cron from 'node-cron'
import moment from 'moment'
import Random from './models/Random'
import * as utils from './utils/utils'

import './database'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

cron.schedule('* * * * *', async function () {
  const currentTime = utils.formatDate(new Date())

  const response = await Random.findAll({
    where: {
      start_time: currentTime
    }
  })

  if (response.length > 0) {
    response.map(item => {
      const startTime = moment(new Date(item.start_time))
      const endTime = moment(new Date(item.end_time))
      const diffTime = endTime.diff(startTime, 'milliseconds')
      utils.createTimer(item.id, diffTime)
    })
  }
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
