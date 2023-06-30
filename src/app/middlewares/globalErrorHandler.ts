// import { NextFunction, Request, Response } from 'express'
// import config from '../../config'
// import { IGenericErrorMessage } from '../../interfaces/error'

// const globalErrorHandler = (
//   err,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let statusCode = 500
//   let message = 'Somethings went wrong !'
//   let errorMessages: IGenericErrorMessage[] = []

//   if(err?.name==="ValidationError"){
//     const simplifiedError = handleVaidationError
//   }

//   res.status(statusCode).json({
//     success: false,
//     message,
//     errorMessages,
//     stack: config.env !== 'production' ? err?.stack : undefined,
//   })
// }

// export default globalErrorHandler
