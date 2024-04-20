const express = require("express")
const {connectToMongoDB} = require('./connect')
const urlRoute = require("./routes/url")
const URL = require('./models/url')
const app = express()
const PORT = 8001

app.use(express.json())

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB Connected..."))
app.use("/api/url", urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {
                    timestamp : Date.now()
                }
            }
        }
    )
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`))