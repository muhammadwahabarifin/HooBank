import { quotes } from "../assets"

const FeedbackCard = ({ content, name, title, img }) => {
    return (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            {/* quote */}
            <img
                src={quotes}
                alt="quote"
                className="w-[42px] h-[27px] object-contain"
            />
            {/* content */}
            <p className="text-[18px] leading-[23px] text-white my-10">
                {content}
            </p>

            {/* client */}
            <div className="flex flex-row">
                <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col ml-4">
                    <h4 className="text-[16px] leading-[24px] text-dimWhite">
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    )
};

export default FeedbackCard;
