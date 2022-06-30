//Require Mongoose
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    profilepic: {
        type: String,
        required: [true, `Upload asltublieft een profilefoto.`]
    },
    firstname: {
        type: String,
        required: [true, `Vergeet niet uw voornaam in te voeren.`]
    },
    lastname: {
        type: String,
        required: [true, `Vergeet niet uw achternaan in te voeren.`]
    },
    education: {
        type: String
    },
    liked: {
        type: Boolean,
        default: false
    },
},{
    collection: 'studenten'
}, {
    toJSON: {
        virtuals: true
    }
});

const Student = mongoose.model(`Student`, studentSchema)

module.exports = {
    Student
};