import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();
dotenv.config()

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use('/api/user', userRoute)
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Somethins wrong"


    return res.status(errorStatus).send(errorMessage)
})

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongodb')
    } catch (error) {
        handleError(error);
    }
}


app.listen(5000, () => {
    connect()
    console.log('backend server running')
})





