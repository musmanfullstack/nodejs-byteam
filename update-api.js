app.put("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params; 
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description, id]);
        res.json("TODO was updated!");
    } catch (err) {
        console.error(err.message)
        
    }

});