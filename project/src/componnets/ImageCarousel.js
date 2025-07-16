
// // import React, { useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import { Carousel } from 'bootstrap';

// // // import pic1 from '../images/girls/8/81.png';

// // import pic1 from '../shkufit/piture1.png';
// // // import pic2 from '../shkufit/picture2.png';
// // // import pic3 from '../shkufit/picture3.png';
// // // import pic4 from '../shkufit/picture4.png';
// // import pic5 from '../shkufit/picture5.png';

// // const ImageCarousel = () => {
// //   useEffect(() => {
// //     const carouselElement = document.querySelector('#imageCarousel');
// //     if (carouselElement) {
// //       new Carousel(carouselElement, {
// //         interval: 2000,
// //         ride: 'carousel'
// //       });
// //     }
// //   }, []);

// //   const images = [pic1,  pic5];

// //   return (
// //     <div id="imageCarousel" className="carousel slide">
// //       <div className="carousel-inner">
// //         {images.map((src, index) => (
// //           <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
// //             <img
// //               src={src}
// //               className="d-block w-100"
// //               alt={`תמונה ${index + 1}`}
// //               style={{ height: '80vh', objectFit: 'cover' ,objectPosition:'center top'}}
// //             />
// //             <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
// //               <h1 style={{ textShadow: '0 0 10px black' }}>הקולקציה החדשה שלנו</h1>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageCarousel;

// import React from 'react';
// import { Row, Col, Image, Container } from 'react-bootstrap';
// import ImageCarousel from './ImageCarousel';
// import pic1 from '../images/girls/1/11.png'; // לא בשימוש - אפשר למחוק
// import club from '../images/club.jpg';
// import girls from '../images/girls.png'; // לא בשימוש - אפשר למחוק
// import boys from '../images/boys.png'; // לא בשימוש - אפשר למחוק
// import salegirls from '../images/girlsSale.jpg'; // לא בשימוש - אפשר למחוק
// import sale from '../images/sale.jpg';
// import girlsSale from '../images/girlsSale.jpg';

// function HomePage() {
//   return (
//     <div style={{ backgroundColor: '#fff', color: '#000' }}>
//       <ImageCarousel /> {/* רכיב קרוסלה בראש הדף */}

//       <Container fluid style={{ padding: '20px' }}>
//         <Row className="g-3">
//           {/* שתי תמונות במבנה של שתי עמודות - אחת לימין ואחת לשמאל במסך גדול */}
//           <Col xs={12} md={6}>
//             <Image
//               src={girlsSale}
//               alt="SALE GIRLS"
//               fluid
//               style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//             />
//           </Col>
//           <Col xs={12} md={6}>
//             <Image
//               src={sale}
//               alt="SALE"
//               fluid
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 borderRadius: '8px',
//                 objectPosition: 'center top', // מיקום התמונה - ממורכזת בחלק העליון
//               }}
//             />
//           </Col>
//         </Row>

//         {/* קטע להצגת תמונה אחת עם מרווח מלמעלה. המערך ['1'] מיותר כאן, אפשר פשוט לשים את ה־<Image> לבד */}
//         <div style={{ marginTop: '30px' }}>
//           {['1'].map((num, idx) => (
//             <div key={idx} style={{ marginBottom: '20px' }}>
//               <Image
//                 src={club}
//                 alt={`תמונה ${num}`}
//                 fluid
//                 style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* קטע נוסף שמציג שוב את אותה תמונה של 'sale' - כנראה זמני או לשכפול תצוגות */}
//         <div style={{ marginTop: '30px' }}>
//           {['1'].map((num, idx) => (
//             <div key={idx} style={{ marginBottom: '20px' }}>
//               <Image
//                 src={sale}
//                 alt={`תמונה ${num}`}
//                 fluid
//                 style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default HomePage;
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // טעינת JavaScript של Bootstrap – דרוש בשביל הפעלת הקרוסלה
import { Carousel } from 'bootstrap'; // ייבוא ישיר של רכיב הקרוסלה של Bootstrap

import pic1 from '../shkufit/piture1.png';
// התמונות הלא בשימוש – אפשר למחוק או להחזיר כשיהיו בשימוש
// import pic2 from '../shkufit/picture2.png';
// import pic3 from '../shkufit/picture3.png';
// import pic4 from '../shkufit/picture4.png';
import pic5 from '../shkufit/picture5.png';

const ImageCarousel = () => {
  useEffect(() => {
    const carouselElement = document.querySelector('#imageCarousel');
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 2000,   // מעבר תמונה כל 2 שניות
        ride: 'carousel'  // התחלה אוטומטית של הקרוסלה
      });
    }
  }, []);

  const images = [pic1, pic5]; // מערך התמונות שיוצגו בקרוסלה

  return (
    <div id="imageCarousel" className="carousel slide">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={src}
              className="d-block w-100"
              alt={`תמונה ${index + 1}`}
              style={{ height: '80vh', objectFit: 'cover', objectPosition: 'center top' }} // שולט על חיתוך ומיקום של התמונה
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              {/* טקסט במרכז התמונה עם צל שחור לקריאות */}
              <h1 style={{ textShadow: '0 0 10px black' }}>הקולקציה החדשה שלנו</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
