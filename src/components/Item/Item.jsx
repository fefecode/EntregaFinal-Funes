import { useState } from "react";
import Button from "../Button/Button";
import "./item.css";
import { Link } from "react-router-dom";

function CardDescription({ price, category, discount }) {
  const classNamePrice =
    discount > 25 ? "item-card_price-tag offer" : "item-card_price-tag";

  return (
    <div className="item-card_detail">
      {discount && <small>Descuento: {discount} % </small>}

      {discount > 25 && <small style={{ color: "green" }}>Ofertón!</small>}
      {discount > 25 && price < 2000 && (
        <small style={{ color: "red" }}>Super Ofertón!</small>
      )}

      <h4 className={classNamePrice}>$ {price}</h4>

      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, color, id, discount, stock }) {

  const stylesButton = {
    backgroundColor: stock === 0 ? "grey" : "inherit",
    color: stock === 0 ? "#b6b6b6" : "inherit",
    cursor: stock === 0 ? "not-allowed" : "pointer",
  };

  return (
    <div className="item-card italiano">
      <Link to={`/product/${id}`}>
        <div className="item-card_header">
          <h2>{title}</h2>
          <small>{category}</small>
        </div>
        <div className="item-card_img">
          <img src={img} alt="imagen" />
        </div>

        <CardDescription discount={discount} price={price} color={color} />

        <Button style={stylesButton} color={color}>
          Ver detalle
        </Button>
      </Link>
    </div>
  );
}

export default Item;