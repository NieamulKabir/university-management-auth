import { RequestHandler } from 'express';

import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic Semester Created Successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'failed to create Academic Semester',
    });
  }
};

export const AcademicSemesterController = {
  createSemester,
};
