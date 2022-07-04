import ItemCard from "./ItemCard";

function Portfolio() {
  return (
    <section className="section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent work</span>
      <div className="flexbox-container">
        <ItemCard />
      </div>
    </section>
  );
}

export default Portfolio;
