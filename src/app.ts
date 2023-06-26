import express, { Application, Request, Response } from 'express'
const app: Application = express()

import cors from 'cors'
import router from './app/modules/users/users.route'

//use cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application route
app.use('/api/v1/users/', router)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
