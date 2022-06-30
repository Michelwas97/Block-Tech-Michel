const { application } = require('express');
const express = require('express');

const { Student } = require('../models/schemas');


/************************************************
 * Add student to database
 ***********************************************/

const addStudent = async (req, res) => {
    let { firstname, lastname, education } = req.body

    try {
        await Student.create ({
        'profilepic': req?.file?.filename,
        'firstname': firstname,
        'lastname': lastname,
        'education': education
    });
    
    res.redirect('/');

    } catch (err) {
        res.status(500).json({'Message': err.message});
    }
};

module.exports = {
    addStudent
};