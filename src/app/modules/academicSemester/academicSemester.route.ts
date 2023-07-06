import express from 'express';

import { validateRequest } from '../../middleWares/validateRequest';

import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
);

export const UserRoutes = router;