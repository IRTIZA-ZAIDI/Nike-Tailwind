import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomerReview = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center font-bold text-4xl">
                What Our
                <span className="text-coral-red"> Customers </span>
                Says?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">Here genuine stories from our satisfied customers</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
            {reviews.map((review) => (
                <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName}
                    rating={review.rating} feedback={review.feedback} />
            ))}
        </section>
    )
}

export default CustomerReview