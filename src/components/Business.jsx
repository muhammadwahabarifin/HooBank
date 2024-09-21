/* eslint-disable react/prop-types */
import { features } from '../constants';
import styles, { layout } from '../styles'
import Button from './ui/Button';

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
    >
        {/* icon */}
        <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}
        >
            <img src={icon} alt={title} className='w-[50%] h-[50%] object-contain' />
        </div>

        {/* info */}
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
                {content}
            </p>
        </div>
    </div>
);

const Business = () => {
    return (
        <section id='features' className={layout.section}>
            {/* section info */}
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the business, <br className="sm:block hidden" /> well handle
                    the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.
                </p>

                {/* get started */}
                <Button styles='mt-10' />
            </div>

            {/* features */}
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, i ) => (
                    <FeatureCard key={feature.id} {...feature} index={i} />
                ))}
            </div>
        </section>
    )
}

export default Business;