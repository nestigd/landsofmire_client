
import AboutGrid from "../components/AboutGrid";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";



function Home () {
    return(
        <div className="homepage">
            
            <section >
                <Hero/>
            </section>

            <section className="about-section container">
                <SectionTitle 
                    heading="Start your adventure today:" 
                    subheading="THE GAME"/>
                <AboutGrid/>
            </section>


            <div>Weekly sale - call to action</div>
            <div>Cards</div>
            <div>Go to shop</div>
            <div>Footer</div>

            

        </div>
    );
};

export default Home