// import the model
const Todo = require("../models/todo");

// define route handler
exports.getTodo = async(req, res) => {
    try {
        // fetch all todo items from database
        const todos = await_Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        })

    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        })

    }
}