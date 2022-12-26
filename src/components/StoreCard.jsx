function StoreCard(props) {

    const {title, categories, price,rarity,img} = props;

    return(
        <div className="store-card flex-center">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <div>
                {categories.map(category =>(<span className="store-category">{category}</span>))}
            </div>
            <span className="rarity">Class: {rarity}</span>
            <span className="store-price">Buy {price}</span>
        </div>
    )
}

export default StoreCard