
// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Footer.css";
// import footercss from "../css/Footer.css"


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-section">
//         <div className="logo">id·us</div>
//         <ul>
//           <li><a href="#">GIFTCARD</a></li>
//           <li><a href="#">טעימים</a></li>
//           <li><a href="#">מפת אתר</a></li>
//         </ul>
//       </div>

//       <div className="footer-section">
//         <h3>שירות לקוחות</h3>
//         <ul>
//           <li><a href="#">עזרה מידית</a></li>
//           <li><a href="#">משלוחים</a></li>
//           <li><a href="#">החזרות והחלפות</a></li>
//           <li><a href="#">שאלות ותשובות</a></li>
//           <li><a href="#">שירות לקוחות</a></li>
//           <li><a href="#">ביטול עסקה</a></li>
//           <li><a href="#">החזרה ע\"י שליח</a></li>
//           <li><a href="#">איתור הזמנה</a></li>
//           <li><a href="#">הצטרפות למועדון הלקוחות</a></li>
//         </ul>
//       </div>

//       <div className="footer-section">
//         <h3>Noizz</h3>
//         <ul>
//           <li>
//             {/* כפתור קישור לדף אודות */}
//             <Link to="/about" className="about-button">אודות</Link>
//           </li>
//           <li><a href="#">תנאי שימוש</a></li>
//           <li><a href="#">מדיניות פרטיות</a></li>
//           <li><a href="#">הצהרת נגישות</a></li>
//           <li><a href="#">תקנון מועדון לקוחות</a></li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react"; // ייבוא React לצורך יצירת רכיבים
import { Link } from "react-router-dom"; // ייבוא Link לקישור בין עמודים
// import "./Footer.css"; // ייבוא CSS ל-footers (מוקדם יותר הוסרו על ידי משתנה footercss)
import footercss from "../css/Footer.css"; // ייבוא קובץ CSS לעיצוב ה-footers

const Footer = () => {
  return (
    <footer className="footer"> {/* קונטיינר לעיצוב התחתית */}
      <div className="footer-section"> {/* חלק ראשון בתחתית */}
        <div className="logo">id·us</div> {/* לוגו החברה */}
        <ul> {/* רשימה של קישורים */}
          <li><a href="#">GIFTCARD</a></li>
          <li><a href="#">טעימים</a></li>
          <li><a href="#">מפת אתר</a></li>
        </ul>
      </div>

      <div className="footer-section"> {/* חלק שני בתחתית */}
        <h3>שירות לקוחות</h3> {/* כותרת שירות הלקוחות */}
        <ul> {/* רשימה של קישורי שירות לקוחות */}
          <li><a href="#">עזרה מידית</a></li>
          <li><a href="#">משלוחים</a></li>
          <li><a href="#">החזרות והחלפות</a></li>
          <li><a href="#">שאלות ותשובות</a></li>
          <li><a href="#">שירות לקוחות</a></li>
          <li><a href="#">ביטול עסקה</a></li>
          <li><a href="#">החזרה ע\"י שליח</a></li>
          <li><a href="#">איתור הזמנה</a></li>
          <li><a href="#">הצטרפות למועדון הלקוחות</a></li>
        </ul>
      </div>

      <div className="footer-section"> {/* חלק שלישי בתחתית */}
        <h3>Noizz</h3> {/* כותרת החברה */}
        <ul> {/* רשימה של קישורים נוספים */}
          <li>
            {/* כפתור קישור לדף אודות */}
            <Link to="/about" className="about-button">אודות</Link> {/* קישור לדף אודות */}
          </li>
          <li><a href="#">תנאי שימוש</a></li>
          <li><a href="#">מדיניות פרטיות</a></li>
          <li><a href="#">הצהרת נגישות</a></li>
          <li><a href="#">תקנון מועדון לקוחות</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer; // י-export הקומפוננטה לשימוש בקומפוננטות אחרות