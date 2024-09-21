import styles from '../styles'
import { clients } from '../constants'

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client, i) => (
                    <div
                        key={client.id}
                        className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
                    >
                        {/* client logo */}
                        <img
                            src={client.logo}
                            alt={`client-${i + 1}`}
                            className='sm:w-[192px] w-[100px] object-contain hover:brightness-0 hover:invert transition duration-300 ease-in-out'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
