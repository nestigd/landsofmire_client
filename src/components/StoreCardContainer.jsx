import Loading from "../icons/loading.png";
import StoreCard from "./StoreCard";

function StoreCardContainer() {
  //temporary hardcoded data
  const cards = [
    {
      title: "Iron sword",
      categories: ["weapon", "melee"],
      price: 8,
      rarity: 1,
      img: Loading,
    },
    {
      title: "Battle axe",
      categories: ["weapon", "melee"],
      price: 12,
      rarity: 2,
      img: Loading,
    },
    {
      title: "Magic woodstick",
      categories: ["weapon", "magic"],
      price: 6,
      rarity: 1,
      img: Loading,
    },
    {
      title: "Wyvern cord bow",
      categories: ["weapon", "ranged"],
      price: 450,
      rarity: 10,
      img: Loading,
    },
  ];

  return (
    <div className="store-card-container">
      {cards.map((card) => (
        <StoreCard {...card} key={card.title} />
      ))}
    </div>
  );
}

export default StoreCardContainer;
