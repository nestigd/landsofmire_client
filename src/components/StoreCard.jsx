function StoreCard(props) {
  const { title, categories, price, rarity, img } = props;

  return (
    <div className="store-card">
      <img src={img} alt={title} />
      <span className="rarity">{rarity}</span>
      <div className="store-title margin-xs">
        <span>{title}</span>
      </div>
      <div className="store-category-container margin-s">
        {categories.map((category) => (
          <span className="store-category" key={category}>
            {category}
          </span>
        ))}
      </div>
      <button className="store-price secondary-button">Buy {price}$</button>
    </div>
  );
}

export default StoreCard;
