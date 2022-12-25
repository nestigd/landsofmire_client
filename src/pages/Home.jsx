
import AboutGrid from "../components/AboutGrid";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CardContainer from "../components/CardContainer";



function Home () {
    return(
        <div className="homepage">
            
            <section >
                <Hero/>
            </section>

            <section className="about-section container">
                <SectionTitle 
                    subheading="THE GAME"
                    heading="Start your adventure today:" 
                />
                <AboutGrid/>
                
            </section>
                <SectionTitle 
                    subheading="ON SALE"
                    heading="Become stronger and save your gold!" 
                />
                <CardContainer/>
            <section>

            </section>


            <div>Weekly sale - call to action</div>
            <div>Cards</div>
            <div>Go to shop</div>
            <div>Footer</div>

            

        </div>
    );
};

export default Home