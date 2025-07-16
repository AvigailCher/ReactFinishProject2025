import React from 'react'; // ייבוא React לצורך יצירת רכיבים
import { useSelector, useDispatch } from 'react-redux'; // ייבוא hooks של Redux לניהול מצב
import { useNavigate } from 'react-router-dom'; // ייבוא להתחברות בין עמודים
import { update_item_quantity, removeFromCart } from '../redux/action'; // ייבוא פעולות Redux
import { toast, ToastContainer } from 'react-toastify'; // ייבוא לניהול התראות
import 'react-toastify/dist/ReactToastify.css'; // ייבוא עיצוב התראות

const Cart = () => {
  const dispatch = useDispatch(); // עוגן לגישה לפעולות Redux
  const cartItems = useSelector((state) => state.cart.cart || []); // קבלת פריטי סל מהחנות
  const navigate = useNavigate(); // הפונקציה לשינוי עמודים

  // פונקציה לשינוי כמות פריט בסל
  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity < 1) return; // אם הכמות פחות מ-1, לא לפעול
    dispatch(update_item_quantity({ itemId: id, size, quantity: newQuantity })); // עדכון כמות פריט
  };

  // פונקציה להסרת פריט מהסל
  const handleRemoveItem = (id, name, size, quantity) => {
    if (quantity > 1) {
      dispatch(update_item_quantity({ itemId: id, size, quantity: quantity - 1 })); // הפחתת כמות פריט אם יותר מאחד
      toast.info(`כמות "${name}" ירדה לאחד פחות`, {
        position: 'top-right', // מיקום ההתראה
        autoClose: 3000, // סגירה אוטומטית אחרי 3 שניות
      });
    } else {
      const confirm = window.confirm(`האם את בטוחה שברצונך להסיר את "${name}" מהסל?`); // אישור הסרה
      if (!confirm) return; // אם לא מאשרת, לא עושים כלום
  
      dispatch(removeFromCart(id, size)); // הסרת פריט
      toast.success(`"${name}" הוסר מהסל בהצלחה`, {
        position: 'top-right', // מיקום ההתראה
        autoClose: 3000, // סגירה אוטומטית אחרי 3 שניות
      });
    }
  };

  // חישוב סך העלויות של הפריטים בסל
  const totalPrice = cartItems?.reduce?.(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={{ padding: '2rem', direction: 'rtl' }}> {/* עיצוב כללי */}
      <ToastContainer /> {/* קונטיינר להצגת התראות */}
      <h1 style={{ textAlign: 'center' }}>הסל שלי🛒</h1> {/* כותרת העמוד */}

      {cartItems.length === 0 ? ( // אם הסל ריק
        <p style={{ textAlign: 'center' }}>הסל ריק</p>
      ) : (
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
          {/* עמודת פריטים */}
          <div style={{ flex: 2 }}>
            {cartItems.map((item) => ( // מעבר על כל הפריטים בסל והצגתם
              <div
                key={`${item.id}-${item.size}`} // מפתח ייחודי לכל פריט
                style={{
                  borderBottom: '1px solid #ccc',
                  paddingBottom: '1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <img
                  src={item.image} // תמונת הפריט
                  alt={item.name} // תיאור התמונה
                  style={{ width: '80px', height: '80px', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <h3>{item.name}</h3> {/* שם הפריט */}
                  <p>מידה: {item.size}</p> {/* מידת הפריט */}
                  <p>מחיר ליחידה: {item.price}₪</p> {/* מחיר ליחידה */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)} // הפחתת יחידה
                      style={{
                        padding: '0.5rem',
                        fontSize: '1rem',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#000',
                      }}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span> {/* הצגת כמות */}
                    <button
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)} // הוספת יחידה
                      style={{
                        padding: '0.5rem',
                        fontSize: '1rem',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#000',
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p>סה"כ: {(item.price * item.quantity).toFixed(2)} ₪</p> {/* חישוב סך המחיר */}
                  <button
                    onClick={() => handleRemoveItem(item.id, item.name, item.size, item.quantity)} // הסרת פריט
                    style={{
                      padding: '0.5rem',
                      fontSize: '0.9rem',
                      backgroundColor: '#ff4d4f',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      marginTop: '0.5rem',
                    }}
                  >
                    הסר פריט
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* עמודת סיכום */}
          <div
            style={{
              flex: 1,
              border: '1px solid #000',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <h2>סיכום הזמנה</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="coupon">קוד קופון:</label>
              <input
                type="text"
                id="coupon"
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </div>
            <hr />
            <p>
              סה"כ לתשלום: <strong>{totalPrice.toFixed(2)} ₪</strong> {/* הצגת סך התשלום */}
            </p>
            <button
              onClick={() => navigate('/checkout')} // מעבר לעמוד התשלום
              style={{
                width: '100%',
                padding: '1rem',
                marginTop: '1rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
              }}
            >
              מעבר לתשלום
            </button>
            <button
              onClick={() => navigate('/')} // המשך לקניות
              style={{
                width: '100%',
                padding: '1rem',
                marginTop: '0.5rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
              }}
            >
              המשך בקניות
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; // י-export הקומפוננטה לשימוש בקומפוננטות אחרות