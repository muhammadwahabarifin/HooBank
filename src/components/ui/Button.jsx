/* eslint-disable react/prop-types */

const Button = ({ styles, text = 'Get Started' }) => {
    return (
        <button
            type='submit'
            className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
        >
            {text}
        </button>
    );
};

export default Button;
