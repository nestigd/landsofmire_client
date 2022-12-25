import Loading from '../icons/loading.png'

function  HomepageCard (props){
    const {title, price, fullPrice, toExpiry} = props;

    return(
        <div className="homepage-card">
            <img src={Loading} alt="loading" className='margin-m'/>
            <h2 className='margin-xs'>{title}</h2>
            <p className='margin-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint unde soluta sed cupiditate.</p>
            <span className='countdown margin-xs'>Expires in {toExpiry} hours</span>           

            <div className="homepage-card--prices margin-xs" >
                <span className='msrp'>Price <strong>{fullPrice}$</strong></span>
                <button>Buy {price}$</button>
            </div>
        </div>
    )
}

export default HomepageCard