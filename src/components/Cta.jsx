/* eslint-disable react/no-unescaped-entities */
import styles from "../styles"
import Button from "./ui/Button"

const Cta = () => {
    return (
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
        sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className="flex flex-1 flex-col">
                {/* heading */}
                <h2 className={`${styles.heading2}`}>
                    Let's try our service now!
                </h2>
                {/* description */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>

            {/* get start */}
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-10`}>
                <Button />
            </div>
        </section>
    );
};

export default Cta;
