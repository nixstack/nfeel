import * as fs from 'fs'

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w')

const server = require('http').createServer(function(
  req: any,
  res: { writeHead: (arg0: number) => void; end: (arg0: string) => void }
) {
  res.writeHead(200)
  res.end('hello world')
})

// socket.io setup
const io = require('socket.io').listen(server)
io.set('transports', ['websocket'])

// listen to ngnix socket
server.listen('/tmp/nginx.socket', function() {
  console.info(`server up`)
})

io.on('connect_error', function(err: any) {
  console.error(err)
})

io.on('connect_timeout', function(err: any) {
  console.error(err)
})

io.on('connection', function(socket: {
  id: any
  on: (arg0: string, arg1: { (): void; (message: any): void }) => void
  emit: (arg0: string, arg1: { message: any }) => void
}) {
  console.info(`socket: ${socket.id} connected`)

  socket.on('disconnect', function() {
    console.info('disconnected')
  })

  // socket.on('login', (message: any) => {
  //   socket.emit('login', { message: message })
  // })
})
