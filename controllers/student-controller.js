// const { application } = require('express');
const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

const { Student } = require('../models/schemas');

const updateStudent = async (req, res) => {
    if (req.body.hasOwnProperty('like')) {
        await Student.updateOne(
          {_id: ObjectId(req.body.like)},
          {$set: {liked: true}}
        );
       } else if (req.body.hasOwnProperty('unlike')) {
        await Student.updateOne(
          {_id: ObjectId(req.body.unlike)},
          {$set: {liked: false}}
        );
       } else {
        await Student.deleteOne(
            {_id: ObjectId(req.body.delete)}
          );
       }

    res.redirect('back');
};

/************************************************
 * Get student from database
 ***********************************************/

//extra parameter, meegeven om door te geven aan welke pagina data uitgelezen moet worden

 const getStudent = async (req, res) => {
    try {
        const students = await Student.find({}, {}).exec();

        res.render('pages/index', { students: students });
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

const getLikedStudent = async (req, res) => {
    try {
        const students = await Student.find({}, {}).exec();

        res.render('pages/liked', { students: students });
    } catch (err) {
        res.status(500).json({ Message: err.message });
    }
};

module.exports = {
    updateStudent,
    getStudent,
    getLikedStudent
};
