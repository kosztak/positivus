export default function Supporter({ slideData = { image: "", alt: "" } }) {
  return <img src={slideData.image} alt={slideData.alt} />;
}
