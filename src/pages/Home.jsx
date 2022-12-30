import AboutGrid from "../components/AboutGrid";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import HomepageCardContainer from "../components/HomepageCardContainer";
import MainBtn from "../components/MainBtn";
import { useEffect, useState } from "react";

function Home() {
  // fetch items on sale when homepage is rendered

  const [onSale, setOnSale] = useState(undefined);

  useEffect(() => {
    const fetchOnSale = async () => {
      const response = await fetch("api/shop/onsale");
      const responseJson = await response.json();

      if (response.ok) {
        setOnSale(responseJson.items);
      } else {
        console.log(response.error);
      }
    };

    fetchOnSale();
  }, []);

  return (
    <div className="homepage">
      <section>
        <Hero />
      </section>

      <section className="about-section container-l">
        <SectionTitle
          subheading="THE GAME"
          heading="Start your adventure today:"
        />
        <AboutGrid />
      </section>

      <section className="flex-center">
        <SectionTitle
          subheading="ON SALE"
          heading="Become stronger while saving!"
        />
        {/*TODO: Make card container a carousel to display more cards if necessary*/}
        <HomepageCardContainer onSale={onSale} />
        <MainBtn to="/store" btnText="Store" />
      </section>

      <footer className="container-m">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, quis
          ipsum numquam magni quisquam ullam incidunt maiores quas similique
          veniam molestias repudiandae pariatur ab quos deserunt omnis tempora
          cumque a.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
          reiciendis corrupti mollitia, adipisci dolores nostrum nobis impedit
          unde! Voluptates non eligendi magni possimus adipisci aperiam ipsa
          sint voluptatum cum.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, sed
          laborum assumenda, ut veritatis mollitia quibusdam necessitatibus
          eaque officia deleniti velit quidem officiis ad a aut aliquam minima
          libero in!
        </div>
      </footer>
    </div>
  );
}

export default Home;
