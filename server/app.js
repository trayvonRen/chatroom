const WebSocket = require('ws')
const messageHandle = require('./utils/messageHandle')
const closeHandle = require('./utils/closeHandle')

// 实例化 websocket server
var wss = new WebSocket.Server({ port: 8084 })

// 监听 connection 事件
wss.on('connection', ws => {
  ws.on('message', messageHandle(ws, wss))
  ws.on('close', closeHandle(ws, wss))
})

console.log(`this websocket server is running on 8084 port...`)

module.exports = { clients: wss.clients }
