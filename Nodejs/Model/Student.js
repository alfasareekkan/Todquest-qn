import mongoose,{Schema} from "mongoose"


var StudentSchema =new Schema({
    firstName: {
    type: String,
    trim: true,
    default: ''
    // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
    type: String,
    trim: true,
    default: ''
    // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    },
    displayName: {
    type: String,
    trim: true
    },
    municipality: {
    type: String
    }
})

const User = mongoose.model("Student", StudentSchema)
export default User
    
