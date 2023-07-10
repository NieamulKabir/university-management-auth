import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import httpStatus from 'http-status';
import cors from 'cors';
import { router } from './app/routes/route';
import globalErrorHandler from './app/middleWares/globalErrorHandler';

//use cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application route
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);

app.use('/api/v1/', router);

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  next();
});
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully');
});

export default app;
