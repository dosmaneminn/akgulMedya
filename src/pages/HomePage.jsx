import Hero from '../components/home/Hero';
import WhyUs from '../components/home/WhyUs';
import ServicesPreview from '../components/home/ServicesPreview';
import ContactCTA from '../components/home/ContactCTA';

const HomePage = () => {
    return (
        <>
            <Hero />
            <WhyUs />
            <ServicesPreview />
            <ContactCTA />
        </>
    );
};

export default HomePage;
