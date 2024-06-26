const {check, validationResult}=require("express-validator")


module.exports.studentinsertValidate=[
    check("studentname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("studentname","special characters are not allowed in name feild").matches(/^[A-Za-z' ']+$/),
    check("studentage","Enter the age below 25").matches(/^[0-25]+$/),
    check("classname","maximum length is 18 characters").trim().not().isEmpty().isLength(),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
    check("classname","special characters are not allowed in age feild").matches(/^[IVX]+$/),
]  


module.exports.classinsertValidate = [

    check("classstatus","please Enter corrtly").matches(/^[A-Za-z]+$/).trim().not().isEmpty(),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
    check("classname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("classname","special characters are not allowed in name feild").matches(/^[IVX]+$/), 
    ]



module.exports.classstudentinsertValidate=[
    check("classubjectclass","please enter a valid name").matches(/^[IVX]+$/).trim().not().isEmpty().isLength(),
    check("classsubjectsubject","special characters are not allowed in name feild").matches(/^[A-Za-z]+$/).trim().not().isEmpty().isLength(),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
]

module.exports.subjectinsertValidate=[
    check("subjectname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("subjectname","special characters are not allowed in name feild").matches(/^[A-Za-z]+$/),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
]


module.exports.examinsertValidate=[
    check("examduration","please enter a valid name").trim().not().isEmpty().isLength(),
    check("examduration","special characters are not allowed in name feild").matches(/^[1-12]+$/),
    check("subjectname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("subjectname","special characters are not allowed in name feild").matches(/^[A-Za-z]+$/),
    check("classname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("classname","special characters are not allowed in name feild").matches(/^[IVX]+$/), 
    check("termexamname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("termexamname","special characters are not allowed in name feild").matches(/^[A-Za-z' '1-8]+$/),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
]


module.exports.termexaminsertValidate=[
    check("termexamname","please enter a valid name").trim().not().isEmpty().isLength(),
    check("termexamname","special characters are not allowed in name feild").matches(/^[A-Za-z' '1-8]+$/),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
]
module.exports.markinsertValidate=[
    check("markscore","please enter a valid markscore").matches(/^[1-200]+$/).trim().not().isEmpty().isLength(),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
    check("studentname","please Enter student name").matches(/^[A-Za-z]+$/),
    check("examname","please Enter sem name").matches(/^[a-z' '1-8]+$/)

    
    
    
]

module.exports.signupValidation = [
    check('username', 'Name is requied').not().isEmpty(),
    check('useremail', 'Please include a valid email').matches(/^[0-9A-Za-z@.]+$/),
    check('userpassword').trim().notEmpty().withMessage('Password required')
    .isLength({ min: 5 }).withMessage('password must be minimum 5 length'),
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
//     check('usermobileno', 'user mobile number must be 10 digits ')matches(/^[0-9A-Za-z@.]+$/).not().isEmpty()
 ]
 
module.exports.loginValidation = [
    check("language","please Enter en or hindi ").matches(/^[A-Za-z]+$/),
     check('email', 'Please include a valid email').isEmail(),
     check("password", 'Password must be 6 or more characters').isLength({ min: 6 }),
     check("token_app_type", 'api key not entered').not().isEmpty(),
 
]