import { Course } from '../model/index.js'
import { HTTPError, Response } from '../response/index.js'

const CourseController = {
  addCourse: async (req, res,next) => {
    
    try {
      const { title, description, instructor } = req.body;
      const newCourse = await Course.create({title, description, instructor});
      
      const data ={
        message: 'Course added successfully',
        error: false,
        newCourse
      }
      
      if(newCourse){
        return Response.Success(res, data)
      } else {
        throw HTTPError.BadRequest(res, {
          message:
            'An error occurred, please try again'
        });
      }
      
      
    } catch (error) {
      next(error)
    }
  },
  
  getAllCourses: async (req, res, next) => {
    try {
      const allCourses = await Course.find()
      
      const data = {
        error:false,
        message:
          'Courses Available',
        allCourses
      }
      
      if(allCourses.length === 0) {
        return Response.Success(res, {
          error:false,
          message:
            'There are no courses available'
        });
      } else {
        return Response.Success(res, data);
      }
    } catch (error) {
      next(error)
    }
  }
}

export default CourseController