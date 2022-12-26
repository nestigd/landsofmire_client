import Wish from "../icons/icon-wish.png";
import Selection from "../icons/icon-select.png";
import Money from "../icons/money-bag.png";
import Crown from "../icons/crown.png";
import MainBtn from "./MainBtn";

function AboutGrid() {
  return (
    <div className="about-grid">
      <h2 className="about-grid-d1"> Make a wish to the Mire goddess </h2>
      <h2 className="about-grid-d2"> Choose your playstyle </h2>
      <h2 className="about-grid-d3"> Trade with playes and NPCs</h2>
      <h2 className="about-grid-d4"> Become famous </h2>

      <img src={Wish} alt="splarkling stars" className="about-grid-img1" />
      <img
        src={Selection}
        alt="crossroad selection"
        className="about-grid-img2"
      />
      <img src={Money} alt="money bag" className="about-grid-img3" />
      <img src={Crown} alt="crown" className="about-grid-img4" />

      <div className="about-grid-btn">
        <MainBtn to="/game" btnText="Play the game" />
      </div>
    </div>
  );
}

export default AboutGrid;
