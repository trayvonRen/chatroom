const broadcast = require('./broadcast')
function closeHandle(ws, wss) {
  return () => {
    broadcast(
      wss,
      JSON.stringify({
        type: 'notice',
        data: `${ws.name} 下线了`,
      })
    )
    broadcast(
      wss,
      JSON.stringify({
        type: 'userlist',
        data: [...wss.clients].reduce((accumulator, currentValue) => {
          accumulator.push(currentValue.name)
          return accumulator
        }, []),
      })
    )
  }
}

module.exports = closeHandle
