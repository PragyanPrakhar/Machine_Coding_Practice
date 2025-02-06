import React from "react";
import "../App.css";


const ProductCard = ({ thumbnail, title }) => {
    return (
        <div className="product-card">
            <img className="product-img" src={thumbnail} alt={title} />
            <span>{title}</span>
        </div>
    );
};

export default ProductCard;
