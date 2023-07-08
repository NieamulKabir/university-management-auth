import { NextFunction, Request, Response } from 'express';
const status = import('http-status');
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();
    // res.status(200).json({
    //   success: true,
    //   message: 'Academic Semester Created Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: (await status).OK,
      success: true,
      message: 'Academic Semester Created Successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
