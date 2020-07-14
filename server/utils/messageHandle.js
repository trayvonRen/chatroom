const broadcast = require('./broadcast')
function messageHandle(ws, wss) {
  return data => {
    const message = JSON.parse(data)
    switch (message.type) {
      case 'username':
        ws.name = message.data
        broadcast(
          wss,
          JSON.stringify({
            type: 'notice',
            data: `${ws.name} 上线了`,
          })
        )
        broadcast(
          wss,
          JSON.stringify({
            type: 'userlist',
            data: [...wss.clients].reduce((accumulator, currentValue) => {
              console.log(accumulator)
              accumulator.push(currentValue.name)
              return accumulator
            }, []),
          })
        )

        break
      case 'message':
        broadcast(
          wss,
          JSON.stringify({
            type: 'message',
            data: {
              name: ws.name,
              message: message.data,
            },
          })
        )
        break
    }
  }
}

module.exports = messageHandle
