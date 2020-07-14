function broadcast(wss, message) {
  wss.clients.forEach(function each(client) {
    client.send(message)
  })
}

module.exports = broadcast
