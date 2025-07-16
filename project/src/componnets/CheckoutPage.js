// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import '../css/CheckoutPage.css';

// function CheckoutPage() {
//   const navigate = useNavigate();
//   const products = useSelector((state) => state.cart.cart || []);

//   const [form, setForm] = useState({
//     fullName: '',
//     address: '',
//     city: '',
//     phone: '',
//     paymentMethod: 'credit',
//     cardNumber: '',
//     expiry: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/thank-you');
//   };

//   const baseTotal = products.reduce((sum, item) => sum + item.price, 0);
//   const shippingCost = baseTotal < 200 ? 20 : 0;
//   const totalPrice = baseTotal + shippingCost;

//   return (
//     <div className="checkout-container">
//       <h2 className="checkout-title">דף תשלום</h2>
//       <form onSubmit={handleSubmit} className="checkout-form">
//         <label>שם מלא:</label>
//         <input name="fullName" value={form.fullName} onChange={handleChange} required />

//         <label>כתובת:</label>
//         <input name="address" value={form.address} onChange={handleChange} required />

//         <label>עיר:</label>
//         <input name="city" value={form.city} onChange={handleChange} required />

//         <label>טלפון:</label>
//         <input name="phone" value={form.phone} onChange={handleChange} required />

//         <label>אמצעי תשלום:</label>
//         <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
//           <option value="credit">כרטיס אשראי</option>
//           <option value="paypal">PayPal</option>
//           <option value="cash">מזומן בשליח</option>
//         </select>

//         {form.paymentMethod === 'credit' && (
//           <div className="credit-fields">
//             <label>מספר כרטיס:</label>
//             <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required />

//             <label>תוקף:</label>
//             <input name="expiry" value={form.expiry} onChange={handleChange} required placeholder="MM/YY" />

//             <label>CVV:</label>
//             <input name="cvv" value={form.cvv} onChange={handleChange} required />
//           </div>
//         )}

//         <hr />
//         <h3>סיכום הזמנה:</h3>
//         {products.map((item, i) => (
//           <div key={i}>
//             <span>{item.name} - ₪{item.price}</span>
//           </div>
//         ))}

//         {shippingCost > 0 && (
//           <p style={{ color: 'red', marginTop: '1rem' }}>
//             הזמנה מתחת ל־₪200 – תוספת משלוח: ₪20
//           </p>
//         )}

//         <strong>סה"כ לתשלום: ₪{totalPrice.toFixed(2)}</strong>

//         <button type="submit" className="checkout-button">בצע תשלום</button>
//       </form>
//     </div>
//   );
// }

// export default CheckoutPage;





import React, { useState } from 'react'; // ייבוא React והשגת useState לניהול מצב
import { useSelector } from 'react-redux'; // ייבוא useSelector לגישה למצב Redux
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate לניווט בין עמודים
import '../css/CheckoutPage.css'; // ייבוא קובץ CSS לעיצוב עמוד התשלום

function CheckoutPage() {
  const navigate = useNavigate(); // פונקציה לניווט לעמודים אחרים
  const products = useSelector((state) => state.cart.cart || []); // קבלת המוצרים מהסל

  // ניהול מצב הטופס
  const [form, setForm] = useState({
    fullName: '', // שם מלא
    address: '', // כתובת
    city: '', // עיר
    phone: '', // מספר טלפון
    paymentMethod: 'credit', // אמצעי תשלום (ברירת מחדל כרטיס אשראי)
    cardNumber: '', // מספר כרטיס אשראי
    expiry: '', // תאריך תוקף כרטיס
    cvv: '', // קוד CVV
  });

  // פונקציה לעדכון מצב הטופס בעת שינוי
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // עדכון שדה ספציפי בטופס
  };

  // פונקציה לשליחת הטופס
  const handleSubmit = (e) => {
    e.preventDefault(); // ביטול פעולה ברירת המחדל של הטופס
    navigate('/thank-you'); // ניווט לעמוד תודה
  };

  // חישוב סך העלויות של המוצרים בסל
  const baseTotal = products.reduce((sum, item) => sum + item.price, 0); // חישוב סך העלויות
  const shippingCost = baseTotal < 200 ? 20 : 0; // חישוב עלות משלוח
  const totalPrice = baseTotal + shippingCost; // סך התשלום כולל משלוח

  return (
    <div className="checkout-container"> {/* קונטיינר עיקרי לעמוד התשלום */}
      <h2 className="checkout-title">דף תשלום</h2> {/* כותרת עמוד */}
      <form onSubmit={handleSubmit} className="checkout-form"> {/* טופס התשלום */}
        <label>שם מלא:</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required /> {/* שדה שם מלא */}

        <label>כתובת:</label>
        <input name="address" value={form.address} onChange={handleChange} required /> {/* שדה כתובת */}

        <label>עיר:</label>
        <input name="city" value={form.city} onChange={handleChange} required /> {/* שדה עיר */}

        <label>טלפון:</label>
        <input name="phone" value={form.phone} onChange={handleChange} required /> {/* שדה טלפון */}

        <label>אמצעי תשלום:</label>
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}> {/* בחירת אמצעי תשלום */}
          <option value="credit">כרטיס אשראי</option>
          <option value="paypal">PayPal</option>
          <option value="cash">מזומן בשליח</option>
        </select>

        {form.paymentMethod === 'credit' && ( // אם אמצעי התשלום הוא כרטיס אשראי
          <div className="credit-fields"> {/* שדות נוספים עבור פרטי כרטיס אשראי */}
            <label>מספר כרטיס:</label>
            <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required /> {/* שדה מספר כרטיס */}

            <label>תוקף:</label>
            <input name="expiry" value={form.expiry} onChange={handleChange} required placeholder="MM/YY" /> {/* שדה תאריך תוקף */}

            <label>CVV:</label>
            <input name="cvv" value={form.cvv} onChange={handleChange} required /> {/* שדה CVV */}
          </div>
        )}

        <hr />
        <h3>סיכום הזמנה:</h3>
        {products.map((item, i) => ( // מעבר על המוצרים בסל והצגתם
          <div key={i}>
            <span>{item.name} - ₪{item.price}</span> {/* שם המוצר והמחיר שלו */}
          </div>
        ))}

        {shippingCost > 0 && ( // הצגת עלות משלוח אם יש
          <p style={{ color: 'red', marginTop: '1rem' }}>
            הזמנה מתחת ל־₪200 – תוספת משלוח: ₪20
          </p>
        )}

        <strong>סה"כ לתשלום: ₪{totalPrice.toFixed(2)}</strong> {/* הצגת סך התשלום */}

        <button type="submit" className="checkout-button">בצע תשלום</button> {/* כפתור שליחה */}
      </form>
    </div>
  );
}

export default CheckoutPage; // י-export הקומפוננטה לשימוש בקומפוננטות אחרות