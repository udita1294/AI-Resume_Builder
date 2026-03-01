const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const interviewController = require('../controllers/interview.controller');
const upload = require('../middlewares/file.middleware');

const interviewRouter = express.Router();


/**
 * @route POST /api/interview/
 * @desc Generate an interview report for a candidate based on the job description, resume and self description provided by the candidate. The report should include a match score, technical questions, behavioral questions, skill gaps and preparation plans for the candidate.
 * @access Private
 * 
 */

interviewRouter.post('/', authMiddleware.authUser, upload.single('resume'), interviewController.generateInterviewReportController);

module.exports = interviewRouter;