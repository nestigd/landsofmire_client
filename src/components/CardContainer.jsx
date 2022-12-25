import HomepageCard from "../components/HomepageCard";

function  CardContainer (){

    return(
        <div className="card-container">
            <HomepageCard
                title= "Iron sword"
                fullPrice = {12}
                price = {8}
                toExpiry= {5}
            />
            <HomepageCard
                title= "Black steel hammer"
                fullPrice = {24}
                price = {16}
                toExpiry= {1}
            />
            <HomepageCard
                title= "Elven brass staff"
                fullPrice = {38}
                price = {20}
                toExpiry= {10}
            />
        </div>
    )
}

export default CardContainer