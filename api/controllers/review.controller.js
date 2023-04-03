import Review from "../models/review.model.js";
import createError from "../utils/createError";


export const createReview = async (req, res, next) => {
    if (req.isSeller) return next(createError(403, "Sellers cant reivew"))
    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.userId,
        desc: req.body.desc,
        star: req.body.star,
    })

    try {
        const review = await Review.findOne({
            gigId: req.body.gigId,
            userId: req.userId,
        })

        if (review) return next(createError(403, "You have a review aleady"))


        const savedReview = await newReview.save()
    } catch (err) {
        next(err)
    }
}


export const getReviews = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}


export const deleteReview = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}



