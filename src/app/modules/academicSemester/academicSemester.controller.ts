import { NextFunction, Request, Response } from 'express';
const status = import('http-status');
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { pick } from '../../../shared/pick';
import { paginationFields } from '../../../constans/pagination';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

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
    next();
  }
);

const getAllSemesters = async (req: Request, res: Response) => {
  try {
    // const { user } = req.body;
    // const result = await UserService.createUser(user);
    // res.status(200).json({
    //   success: true,
    //   message: 'User Create Successfully',
    //   data: result,
    // });
    // const paginationOptions={
    //   page:Number(req.query.page),
    //   limit:Number(req.query.limit),
    //   sortBy:req.query.sortBy,
    //   sortOrder: req.query.sortOrder
    // }

    const paginationOptions = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllSemesters(
      paginationOptions
    );
    res.status(200).json({
      success: true,
      message: 'Semesters  retrieved Successfully ',
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
    });
  }
};

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
