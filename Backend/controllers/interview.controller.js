const pdfParser = require('pdf-parse');
const generateInterviewReport = require('../services/ai.service');
const interviewReportModel = require('../model/interviewReport.model');

async function generateInterviewReportController(req, res) {
    try {
        const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const {selfDescription, jobDescription} = req.body;

        const interviewReportByAI = await generateInterviewReport({
            jobDescription,
            resume : resumeContent.text,
             selfDescription
            });
        
        const interviewReport = await interviewReportModel({
            user : req.user.id,
            jobDescription,
            resume : resumeContent.text,
            selfDescription,
            ...interviewReportByAI
        })

        res.status(200).json({
            message: 'Interview report generated successfully',
            interviewReport
        })



    }catch (error) {
        console.error('Error generating interview report:', error);
        res.status(500).json({ error: 'Failed to generate interview report' });
    }
}

module.exports = {
    generateInterviewReportController
}