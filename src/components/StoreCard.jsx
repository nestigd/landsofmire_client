function StoreCard(props) {

    const {title, categories, price,rarity,img} = props;

    return(
        <div className="store-card flex-column">
            <img src={img} alt={title}/>
            <div className="store-title">
                <span>{title}</span><span className="rarity">{rarity}</span>
            </div>
            <div className="store-category-container">
                {categories.map(category =>(<span className="store-category">{category}</span>))}
            </div>
            <span className="store-price secondary-button">Buy {price}$</span>
        </div>
    )
}

export default StoreCard