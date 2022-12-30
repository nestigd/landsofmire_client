import HomepageCard from "../components/HomepageCard";

function CardContainer(props) {
  const items = props.onSale;

  return (
    <div className="card-container margin-l">
      {items &&
        items.map((item) => {
          return <HomepageCard key={item.title} {...item} />;
        })}
    </div>
  );
}

export default CardContainer;
