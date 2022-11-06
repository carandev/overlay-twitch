import http from 'http'

import express from 'express'
import { Server } from 'socket.io'
import tmi from 'tmi.js'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
})

const client = new tmi.Client({
  channels: ['carandev']
})

client.connect()

client.on('message', (channel, tags, message, self) => {
  io.emit('chat_message', { channel, tags, message })
})

server.listen(3000, () => {
  console.log('Running in port 3000')
})
