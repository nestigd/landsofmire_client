import { useEffect } from "react";
import { useState } from "react";
import StoreCard from "./StoreCard";
import Loading from "../icons/loading.png"

function StoreCardContainer() {

  //temporary hardcoded data
  const [items, setItems] = useState(undefined);
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('api/shop/items');
      const responseJson = await response.json();
  
      if (response.ok){
        setItems(responseJson.items)
        console.log(responseJson.items)
      }else{
        console.log(response.error)
      }
    }
    fetchItems();
  },[]);

  return (
    <div className="store-card-container">
      {
      items ? (
        items.map((item) => (
        <StoreCard {...item} key={item.title} img={Loading}
        />))
      ) : (
      ""
      )
      }
    </div>
  );
}

export default StoreCardContainer;
