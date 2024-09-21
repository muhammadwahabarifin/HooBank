import { 
  Business, 
  Hero, 
  Footer, 
  Navbar, 
  Stats, 
  Billing, 
  CardDeal, 
  Testimonials, 
  Clients, 
  Cta 
} from './components'

import styles from './styles';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* navbar */}
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </header>

    {/*  */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* body */}
    <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </footer>
  </div>
)

export default App;