import StoreSidebar from "./StoreSidebar"
import SectionTitle from "./SectionTitle"
import StoreCardContainer from "./StoreCardContainer"

function StoreWidget () {
    return(
        <div className="store-widget container-l">
            <StoreSidebar/>
            <div className="store-main">
                <div className="store-title">
                    <SectionTitle 
                        subheading="MIRE'S MARKET"
                        heading="Prepare for your next adventure"
                    />
                </div>
                <div>
                    <StoreCardContainer/>
                </div>
            </div>
        </div>
    )
}

export default StoreWidget