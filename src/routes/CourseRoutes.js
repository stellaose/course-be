import { Router } from 'express'
import CourseController from '../controller/CourseController.js'

const router = Router()

router.post('/add-new-course', CourseController.addCourse);
router.get('/all-courses', CourseController.getAllCourses)

export default router