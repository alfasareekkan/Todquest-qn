import { model, Schema } from "mongoose";
var schema = new Schema({
    student: {
    type: Schema.ObjectId,
    ref: 'Student'
    },
    timeEntries: {
    type: Object
    }
    });
    
const WorksnapsTimeEntry = model("WorksnapsTimeEntry", schema);
export default WorksnapsTimeEntry;