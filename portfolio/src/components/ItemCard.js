import PortfolioData from "./PortfolioData";

function ItemCard() {
  return (
    <>
      {PortfolioData.map((PortfolioData) => {
        const { id, src, alt, linksource, heading, text } = PortfolioData;
        return (
          <div key={id} className="flexbox__item">
            <a href={linksource}>
              <img
                className="item__image"
                src={src}
                alt={alt}
                width="350"
                height="200"
                loading="lazy"
              />
              <h3 className="item__heading">{heading}</h3>
              <p className="item__text">{text}</p>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default ItemCard;
