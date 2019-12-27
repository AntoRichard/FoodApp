import React from 'react';
import CartFood from './CartFood';
import Dosaa from '../../Images/Food/indian/dosa.jpeg';
import Aapamm from '../../Images/Food/indian/aapam.jpg';
import Chapathii from '../../Images/Food/indian/chapathi.jpg';
import Idlyy from '../../Images/Food/indian/idly.jpg';
import Pongall from '../../Images/Food/indian/pongal.jpg';
import Purii from '../../Images/Food/indian/puri.jpeg';
import { price } from './price';
import Stripe from 'react-stripe-checkout';

const Cart = ({ data }) => {
  const { Idly, Dosa, Chapathi, Pongal, Puri, Aapam } = data;
  const { idly, dosa, chapathi, pongal, puri, aapam } = price;

  const tokenHandler = (token, address) => {
    console.log(token, address);
  };
  return (
    <div>
      <div style={{ margin: '92px 20px 0px 20px' }}>
        <h2>CART PAGE</h2>
        {Idly > 0 ? (
          <CartFood title="Idly" value={Idly} img={Idlyy} price={idly} />
        ) : null}
        {Dosa > 0 ? (
          <CartFood title="Dosa" value={Dosa} img={Dosaa} price={dosa} />
        ) : null}
        {Chapathi > 0 ? (
          <CartFood
            title="Chapathi"
            value={Chapathi}
            img={Chapathii}
            price={chapathi}
          />
        ) : null}
        {Pongal > 0 ? (
          <CartFood
            title="Pongal"
            value={Pongal}
            img={Pongall}
            price={pongal}
          />
        ) : null}
        {Puri > 0 ? (
          <CartFood title="Puri" value={Puri} img={Purii} price={puri} />
        ) : null}
        {Aapam > 0 ? (
          <CartFood title="Aapam" value={Aapam} img={Aapamm} price={aapam} />
        ) : null}
      </div>
      <div
        style={{
          border: '2px solid #ccc',
          margin: '30px 60px',
          boxShadow: '1px 1px 10px 1px #eee',
          textAlign: 'center'
        }}
      >
        {idly * Idly +
          dosa * Dosa +
          pongal * Pongal +
          chapathi * Chapathi +
          Aapam * aapam ===
        0 ? (
          <h2>No Items in Cart</h2>
        ) : (
          <h2>
            Total:{' '}
            {idly * Idly +
              dosa * Dosa +
              pongal * Pongal +
              chapathi * Chapathi +
              Aapam * aapam}
          </h2>
        )}
      </div>
      <div style={{ float: 'right', marginRight: '60px' }}>
        <Stripe
          stripeKey="pk_test_iMmLSAxXx0AxLBH8tRZwKx8I00LmaTH1BH"
          token={tokenHandler}
          shippingAddress="E-11 Casa grande"
          amount={
            idly * Idly +
            dosa * Dosa +
            pongal * Pongal +
            chapathi * Chapathi +
            Aapam * aapam
          }
          name={'Anto'}
        />
      </div>
    </div>
  );
};

export default Cart;
