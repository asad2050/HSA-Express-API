const express = require("express");
const doctorController = require('../controllers/doctor.controller');

const router = express.Router();
router.get("/", doctorController.getDoctorDashboardById); 
router.get('/profile',doctorController.getProfile);
router.patch('/profile',doctorController.updateProfile);
router.get("/patients", doctorController.getAllPatientsByDoctorId);
router.get('patients/:patientId',doctorController.getPatientDetailByIdForDoctor);
router.get('/schedule', doctorController.getScheduleByDate);
router.patch('/schedule/update',doctorController.updateSchedule);
router.put("/patients/:patienId/reshedule",doctorController.reshedulePatientById);


module.exports = router;