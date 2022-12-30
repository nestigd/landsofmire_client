import HomepageCard from "./HomepageCard";

function HomepageCardContainer(props) {
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

export default HomepageCardContainer;
