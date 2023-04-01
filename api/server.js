import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";

const app = express();
dotenv.config()


app.use('/api/user', userRoute)
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

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





