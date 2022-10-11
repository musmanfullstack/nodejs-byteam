app.get("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo where todo_id =$1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});