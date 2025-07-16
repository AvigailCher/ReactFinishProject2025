
import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import pic1 from '../images/girls/1/11.png';
import club from '../images/club.jpg';
import  girls  from '../images/girls.png';
import  boys  from '../images/boys.png';
import  salegirls  from '../images/girlsSale.jpg';
import  sale  from '../images/sale.jpg';
import  girlsSale  from '../images/girlsSale.jpg';
function HomePage() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000' }}>
      <ImageCarousel />

      <Container fluid style={{ padding: '20px' }}>
        <Row className="g-3">
          <Col xs={12} md={6}>
            <Image
              src={girlsSale}
              alt="SALE GIRLS"
              fluid
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={sale}
              alt="SALE"
              fluid
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' ,objectPosition:'center top'}}
            />
          </Col>
        </Row>


       

         {/* תמונות נוספות אחת אחרי השנייה */}
         <div style={{ marginTop: '30px' }}>
          {['1'].map((num, idx) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <Image
                src={club}
                alt={`תמונה ${num}`}
                fluid
                style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>


        <div style={{ marginTop: '30px' }}>
          {['1'].map((num, idx) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <Image
                src={sale}
                alt={`תמונה ${num}`}
                fluid
                style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>



      </Container>
    </div>
  );
}

export default HomePage;