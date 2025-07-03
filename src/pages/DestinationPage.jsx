import { useParams } from "react-router-dom";

const DestinationPage = () => {
  const { slug } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Destination: {slug.replace(/-/g, " ")}</h2>
      <p>This is the destination detail page for: {slug}</p>
    </div>
  );
};

export default DestinationPage;
