import express from'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import CourseRoutes from '../src/routes/CourseRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
      status: 200,
      success: true,
      message: 'Hello world'
  });
});

app.use('/course', CourseRoutes)

export default app;