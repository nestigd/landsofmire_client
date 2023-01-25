export default function PlayerCard(props) {
  const {name, health, attack, defense, speed} = props

  return(
    <div className="flex-center">
      <h3>{name}</h3>
      <span>health: {health}</span>
      <span>attack: {attack}</span>
      <span>defense: {defense}</span>
      <span>speed: {speed}</span>
    </div>
  )
}