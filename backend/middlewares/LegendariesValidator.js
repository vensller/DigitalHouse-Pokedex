function validator(req, res, next) {
    const { description } = req.body;

    if (!description) { 
        return res.status(400).json({error: "Description is required"});          
    }
    
    next(); 
}

module.exports = validator;