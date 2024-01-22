import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
            <div className="flex-1">
                <img
                    src={offer}
                    width={773}
                    height={687}
                    className="object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special </span>  Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover unbeatable deals and limited-time promotions in our Special Offers section. We believe in treating our valued customers with something extraordinary, and these exclusive offers are our way of saying thank you for choosing us.
                </p>
                <p className="mt-4 lg:max-w-lg info-text">
                    Do not miss out on the chance to elevate your shopping experience. Keep an eye on this space as we regularly update our Special Offers with new and exciting deals. It is our commitment to making your shopping experience extraordinary.
                </p>
                <div className="mt-11 flex flex-wrap gap-4 ">
                    <Button label='Shop now' iconURL={arrowRight} />
                    <Button label='Learn More' backgroundColor="bg-white" borderColor="border-slate-gray" text-color="text-slate-gray" />
                </div>
            </div>

        </section>
    )
}

export default SpecialOffers