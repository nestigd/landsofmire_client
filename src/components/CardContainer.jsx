import HomepageCard from "../components/HomepageCard";

function CardContainer(props) {
  return (
    <div className="card-container margin-l">
      <HomepageCard {...props.item1} />
      <HomepageCard {...props.item2} />
      <HomepageCard {...props.item3} />
    </div>
  );
}

export default CardContainer;
