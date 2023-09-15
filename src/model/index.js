import mongoose from "mongoose";

const { Schema, model } = mongoose;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor:{
    type: String,
    required: true
  }
})

export const Course = model('Course', courseSchema)