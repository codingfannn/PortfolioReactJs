import "./product.css";

const Product = ({ img, link }) => {
  return (
    <div className="product">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="product-img" src={img} alt="" />
      </a>
    </div>
  );
};

export default Product;
