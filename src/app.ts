import express, { Application, Request, Response } from 'express'
const app: Application = express()

import cors from 'cors'
import usersService from './app/modules/users/users.service'

//use cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '1945',
    password: '1246',
    role: 'student',
  })
  res.send('Working Successfully')
})

export default app
