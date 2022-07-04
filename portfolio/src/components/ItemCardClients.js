import ClientData from "./ClientData";

function ItemCardClients() {
  return (
    <>
      {ClientData.map((ClientData) => {
        const { id, src, alt } = ClientData;
        return (
          <div key={id} className="flexbox__item">
            <img
              className="item__image"
              src={src}
              alt={alt}
              width="350"
              height="200"
              loading="lazy"
            />
          </div>
        );
      })}
    </>
  );
}

export default ItemCardClients;
