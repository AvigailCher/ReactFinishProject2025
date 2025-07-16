import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  boys, girls, sale, newcollection, shose, excesoris, addToCart
} from '../redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/ProductList.css';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartModal from './CartModel';
function ProductList() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.arr || []);
  const cartItems = useSelector((state) => state.products.cart || []);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [showAllCart, setShowAllCart] = useState(false);
  const modalRef = useRef(null);
  const offcanvasRef = useRef(null);

  useEffect(() => {
    const cat = category.toLowerCase();
    switch (cat) {
      case 'boys': dispatch(boys()); break;
      case 'girls': dispatch(girls()); break;
      case 'sale': dispatch(sale()); break;
      case 'newcollection': dispatch(newcollection()); break;
      case 'shoes': dispatch(shose()); break;
      case 'accessories': dispatch(excesoris()); break;
      default: break;
    }
  }, [category, dispatch]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize('');
    new window.bootstrap.Modal(modalRef.current).show();
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      const productWithSize = {
        ...selectedProduct,
        size: selectedSize,
        image: selectedProduct.images?.[0], // ✅ הוספת שדה image מהתמונה הראשונה
      };
      dispatch(addToCart(productWithSize));
      setLastAddedItem(productWithSize);
      setShowAllCart(false);
      window.bootstrap.Modal.getInstance(modalRef.current).hide();
      new window.bootstrap.Offcanvas(offcanvasRef.current).show();
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  return (
    <div className="container mt-4" dir="rtl">
      <h2 className="text-center mb-4">{category}</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.length > 0 ? (
          products.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100 text-center border-0">
                <Link to={`/product/${item.id}`} className="image-link">
                  <img src={item.images?.[0]} alt={item.name} className="card-img-top product-image" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">מחיר: ₪{item.price}</p>
                  <p className="text-warning fw-bold">NEW!</p>
                  <button className="btn btn-outline-dark" onClick={() => handleOpenModal(item)}>
                    הוסף לסל 🛒
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">אין מוצרים זמינים לקטגוריה הזו.</p>
        )}
      </div>

      {/* מודאל בחירת מידה */}
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header bg-warning">
              <h5 className="modal-title text-black">בחר מידה</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              {["4", "6", "8", "10", "12", "14"].map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`btn m-1 ${selectedSize === size ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning w-100 fw-bold" onClick={handleAddToCart} disabled={!selectedSize}>
                הוסף לסל
              </button>
            </div>
          </div>
        </div>
      </div>
{/* עגלת קניות בצד */}
<div
  className="offcanvas offcanvas-start text-bg-light"
  tabIndex="-1"
  ref={offcanvasRef}
  dir="rtl"
>
  {/* כותרת עליונה בסגנון מודגש */}
  <div className="offcanvas-header bg-black text-warning d-flex flex-column align-items-start">
    <strong className="fs-6">NOIZZ STARZZ מועדון הלקוחות</strong>
    <small className="text-white">
      בעסקה זו תוכל לצבור כ־24.48 כוכבים
    </small>
    <button
      type="button"
      className="btn-close btn-close-white position-absolute top-0 start-0 m-3"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  {/* גוף העגלה */}
  <div className="offcanvas-body">
    {/* הודעה צהובה */}
    <div
      className="text-center py-2 fw-bold text-dark mb-3"
      style={{ backgroundColor: '#ffe600', fontSize: '0.85rem' }}
    >
      * הנחות ומבצעים יצאו בסל הקניות *
      <br />
      עלות משלוח תחושב לאחר בחירת המשלוח ועל פי סכום הרכישה הסופי
    </div>

    {/* הצגת הפריטים */}
    {showAllCart ? (
      cartItems.length === 0 ? (
        <p className="text-center">הסל ריק</p>
      ) : (
        <>
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="d-flex align-items-center mb-3 border-bottom pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="me-2"
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  objectPosition:'center top',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
              <div>
                <h6 className="mb-0 text-dark">{item.name}</h6>
                <small className="text-muted">מידה: {item.size}</small>
                <br />
                <small className="text-dark fw-bold">
                  ₪{item.price.toFixed(2)}
                </small>
              </div>
            </div>
          ))}
        </>
      )
    ) : !lastAddedItem ? (
      <p className="text-center">הסל ריק</p>
    ) : (
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <img
          src={lastAddedItem.image}
          alt={lastAddedItem.name}
          className="me-2"
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'cover',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <div>
          <h6 className="mb-0 text-dark">{lastAddedItem.name}</h6>
          <small className="text-muted">מידה: {lastAddedItem.size}</small>
          <br />
          <small className="text-dark fw-bold">
            ₪{lastAddedItem.price.toFixed(2)}
          </small>
        </div>
      </div>
    )}

    {/* סיכום והכפתורים */}
    {cartItems.length > 0 && (
      <div className="mt-4">
        <div className="d-flex justify-content-between fw-bold mb-2">
        <div className="mt-3">
            <h6>סה"כ לתשלום: ₪{getTotalPrice().toFixed(2)}</h6>
            <button className="btn btn-dark w-100 mt-2"  onClick={() => navigate('/checkout')}>המשך לתשלום</button>
          </div>
          <span>סה"כ לתשלום</span>
          <span>₪{cartItems.reduce((sum, i) => sum + i.price, 0).toFixed(2)}</span>
        </div>

        <button className="btn btn-dark w-100 mb-2">לקופה</button>
        <button className="btn btn-outline-dark w-100">
          סל הקניות ({cartItems.length})
        </button>
      </div>
    )}
  </div>
</div>
          
        </div>
  );
}

export default ProductList;
