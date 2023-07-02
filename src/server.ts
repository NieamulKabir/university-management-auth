import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger/logger'
import { Server } from 'http'

async function main() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`💻DataBase is connected successfully`)

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database', error)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandled rejection is detected, we are closing our server')

    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()
