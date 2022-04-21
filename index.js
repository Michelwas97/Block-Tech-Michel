const persons = require('./modules/persons');

if (persons.role == 'Teacher') {
    console.log(persons);
} else {
    console.log('failed');
}