import React from 'react';
// import './CartModal.css';

const CartModal = ({ isOpen, onClose, cartItems, totalPrice, onCheckout }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-header">
          <h2>🛒 NOIZZ STARZZ</h2>
          <p>בעסקה זו תוכל/י לצבור כ-24.48 כוכבים</p>
          <p>
            עדיין לא הצטרפתם למועדון הלקוחות של NOIZZ?
            <br />
            <a href="/join">הצטרפות/התחברות</a>
          </p>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>הסל ריק</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <span>{item.size}</span>
                <span>{item.price} ₪</span>
              </div>
            ))
          )}
        </div>

        <div className="cart-warning">
          * הנחות ומבצעים יצאו בסל הקניות *
          <br />
          עלות משלוח תוסיף בקופה לאחר בחירת המשלוח ועל פי סכום הרכישה הסופי
        </div>

        <div className="cart-footer">
          <div className="total">סה"כ לתשלום: {totalPrice} ₪</div>
          <button className="checkout-btn" onClick={onCheckout}>לקופה</button>
          <button className="cart-btn">🛒 סל הקניות ({cartItems.length})</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
