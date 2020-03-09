import multer from 'multer';
import path from 'path';
import { NextFunction, Request, Response } from 'express';
import { ResponseBuilder } from '../../utils/responseBuilder';
import { CommonError } from '../../utils/errors';


/**
 * Generates unique names for stored files.
 */
const filenameResolver = (originalName: string): string => {
  const uniqueName = `${Date.now()}${Math.round(Math.random() * 1E9)}`;

  return `${uniqueName}${path.extname(originalName)}`;
};

const imageUploader = multer({
  storage: multer.diskStorage({
    destination: 'uploads/images/',
    filename: (req, file, cb) => {
      cb(null, filenameResolver(file.originalname));
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') cb(null, true);
    else {
      cb(new CommonError({ uiMessage: 'Incorrect file type' }));
    }
  },
  limits: {
    fileSize: 5e5,
  },
});


const uploadImage = (req: Request, res: Response, next: NextFunction): void => {
  try {
    imageUploader.single('image')(req, res, (err) => {
      if (err) return next(err);

      res.json(new ResponseBuilder({ filePath: `/${req.file.path}` }));
    });
  } catch (err) {
    next(err);
  }
};

export default {
  uploadImage,
};
