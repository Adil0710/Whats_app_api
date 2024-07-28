import express from "express"
import sendMessage from "./routes/sendMessage.js"
import dotenv from "dotenv";

dotenv.config(); 

const app = express()
const PORT = process.env.PORT || 3000


app.get('/' , (req, res) => {
    res.json({Hello: "World"})
})

app.use('/sendmessage', sendMessage);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})