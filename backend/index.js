const http = require('http')
const cluster = require('cluster')
const os = require('os')
const app = require('./app')

const port = process.env.PORT || 3030

if (cluster.isMaster) {
  const cpus = os.cpus().length
  for (var i = 0; i < cpus; i+=1) {
    cluster.schedulingPolicy = cluster.SCHED_NONE
    cluster.fork()
  }
  cluster.on('exit', function (worker) {
    console.log('Worker ' + worker.id + ' died')
    cluster.fork()
  })
} else {
  const httpServer = http.createServer(app)
  httpServer.listen(port, function () {
    console.log(`REST API server has been started on http://localhost:${port}`)
  })
}
