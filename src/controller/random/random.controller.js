import moment from 'moment'
import Sequelize from 'sequelize'
import * as utils from '../../utils/utils'
import Random from '../../models/Random'

export const index = async (req, res) => {
  const response = await Random.findAll({
    group: ['Random.id', 'random_values.id'],
    include: {
      association: 'random_values',
      attributes: []
    },
    attributes: ['id', [Sequelize.fn('AVG', Sequelize.col('random_values.value')), 'average']]

  })
  return res.status(200).json(response)
}
export const store = async (req, res) => {
  const { start, end } = req.body
  const { userid } = req.headers
  const startTime = moment(new Date(start))
  const endTime = moment(new Date(end))
  const diffTime = endTime.diff(startTime, 'milliseconds')

  if (utils.formatDate(start) < utils.formatDate(new Date())) {
    return res.status(400).json({ message: 'Invalid date!' })
  }

  if (utils.formatDate(start) === utils.formatDate(new Date())) {
    const response = await Random.create({
      start_time: startTime,
      end_time: endTime,
      user_id: userid
    })

    utils.createTimer(response.id, diffTime)
    return res.status(200).json({ message: 'Random created!' })
  } else {
    const response = await Random.create({
      start_time: start,
      end_time: end,
      user_id: userid
    })
    return res.status(200).json({ data: response, message: `Random schedule ${endTime}!` })
  }
}
