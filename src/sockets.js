import socketIo from 'socket.io'
const io = socketIo(81)

io.on('connection', function (socket) {
  console.log(socket.id)
  let timer
  socket.on('timer', function ({ data }) {
    if (!data) return clearInterval(timer)
    clearInterval(timer)
    timer = setInterval(() => {
      console.log(socket.id, new Date())
    }, 100)
  })

  socket.on('disconnect', function () {
    clearInterval(timer)
    io.emit('user disconnected')
  })
})
