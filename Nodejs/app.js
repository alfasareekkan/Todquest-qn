import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import Student from "./Model/Student.js";
import WorkSnap from "./Model/WorkSnap.js";
dotenv.config();

const app = express();


app.get('/', async (req, res) => {
    const result = await Student.aggregate([
        {
            $lookup: {
                from: "WorkSnap",
                localField: _id,
                foreignField: student,
                as:"result"

            }
        }, {
            $unwind: {
                path:"$result",
            }
        },
        
        {
            $project: {
                _id: 0,
                firstName: 1,
                lastName: 1,
                displayName: 1,
                municipality: 1,
                result:1


            }
        }
    ])
})




app.get('/user', (req, res) => {
    Student.find({}).populate('WorksnapsTimeEntry').exec(function (err, students) {
        if (err) {
          console.error(err);
        } else {
            students.forEach(function (student) {
                console.log(student.firstName + ' ' + student.lastName + ':');
                student.WorksnapsTimeEntry.forEach(function (timeEntry) {
                    console.log('  ' + timeEntry.timeEntries);
                })
            })
              }
              })
      
      
})


app.listen(3000, () => {
    mongoose.connect(process.env.MONGODB_URI)
})