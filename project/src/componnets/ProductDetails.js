
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
import '../css/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams(); // מקבלת את מזהה המוצר מה-URL
  const dispatch = useDispatch();

  // חיפוש המוצר לפי ID מתוך הסטייט
  const product = useSelector((state) =>
    state.products.arr.find((item) => item.id === parseInt(id))
  );

  // תמונה ראשית שמוצגת (מתחלפת כשבוחרים תמונה אחרת)
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);

  // טווח מידות – אם לא קיים בנתוני המוצר, מוצג ברירת מחדל
  const sizes = product.sizes || [4, 6, 8, 10, 12, 14];

  const [selectedSize, setSelectedSize] = useState(null); // מידה שנבחרה
  const [quantity, setQuantity] = useState(1); // כמות שנבחרה

  // לחיצה על "הוסף לסל"
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("אנא בחר מידה");
      return;
    }

    const productToCart = {
      ...product,
      selectedSize,
      quantity
    };

    dispatch(addToCart(productToCart)); // שליחה לרדאקס
  };

  // במקרה שאין מוצר מתאים ב-ID
  if (!product) {
    return <p style={{ textAlign: 'center' }}>המוצר לא נמצא</p>;
  }

  return (
    <div className="product-container" dir="rtl">
      
      {/* תמונה ראשית + תמונות קטנות בצד */}
      <div className="image-wrapper">
        <div className="main-image-container">
          <img src={selectedImage} alt={product.name} className="main-image" />
        </div>

        <div className="side-thumbnails">
          {(product.images || []).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`תמונה ${idx + 1}`}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* פרטי מוצר, בחירת מידה וכמות */}
      <div className="details-section">
        <h2>{product.name}</h2>
        <p className="price">₪{product.price}</p>

        <div className="size-section">
          <p>מידה:</p>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
          <p>כמות:</p>
          <div className="quantity-controls">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
        </div>

        {/* כפתור הוספה לעגלה */}
        <button className="add-to-cart" onClick={handleAddToCart}>
          הוסף לסל 🛒
        </button>

        <p className="shipping-note">* זמן אספקה עד 5 ימי עסקים</p>
      </div>
    </div>
  );
}

export default ProductDetails;

