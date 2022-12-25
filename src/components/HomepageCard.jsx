import Loading from '../icons/loading.png'

function  HomepageCard (props){
    const {title, price, fullPrice} = props;

    return(
        <div className="homepage-card">
            <span className="homepage-card--title"></span>
            <img src={Loading} alt="loading image" />
            <h2>{title}</h2>
            <div className="homepage-card--prices">
                <span>Previous: <strong className='msrp'>{fullPrice}$</strong></span>
                <span>Current: <strong>{price}$</strong></span>
            </div>
            
            <button>Purchase</button>
        </div>
    )
}

export default HomepageCard