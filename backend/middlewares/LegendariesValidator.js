// function validator(req, res, next) {
//     const { description } = req.body;

//     if (!description) { 
//         return res.status(400).json({error: "Description is required"});          
//     }
    
//     next(); 
// }

// module.exports = validator;

// const { body } = require('express-validator');

// const validationList = [
//     body('name', 'Name is required').notEmpty(),
//     body('type', 'Type is required').notEmpty(),
//     body('description', 'Description length must be greater than 10').isLength({min: 10})
// ];

// module.exports = validationList;
const yup = require('yup');

function validator(req, res, next) {
    const schema = yup.object().shape({
        name: yup.string().required(),
        type: yup.string().required(),
        description: yup.string().required().min(10)
    });

    if (!schema.isValidSync(req.body)) {
        return res.status(400).json({error: 'Invalid data'});
    }
    
    next(); 
}

module.exports = validator;