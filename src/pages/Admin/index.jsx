import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import SocketIoClient from 'socket.io-client';
import { getUser, logout } from '../../services/auth';

import Header from './components/Header';
import CheckoutsLabel from './components/CheckoutsLabel';
import Checkout from './components/Checkout';
import CheckoutModal from './components/CheckoutModal';
import { Container, Checkouts } from './styles';
import checkoutsArray from './checkouts';

function Admin() {
  const history = useHistory();

  // const [socket, setSocket] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [checkouts, setCheckouts] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    // const io = SocketIoClient(process.env.REACT_APP_API_URL);
    // setSocket(io);

    // io.on('notification', (data) => {
    //   console.log(data);
    // });
    console.log('montei');
    const user = getUser();

    setName(user.name);
    setEmail(user.email);
    setCity(user.city);

    setCheckouts(checkoutsArray);
  }, []);

  return (
    <Container>
      <Header
        name={name}
        email={email}
        city={city}
        onLogout={() => {
          logout();
          // socket.disconnect();
          history.push('/login');
        }}
      />

      <CheckoutsLabel />
      <Checkouts>
        {
          checkouts.map((item) => {
            item.checkin.time = new Date();

            return (
              <Checkout
                key={Math.random()}
                data={item}
                onClick={(checkoutData) => {
                  setData(checkoutData);
                  setOpen(true);
                }}
                onDismiss={() => console.log('Dispensado')}
              />
            );
          })
        }
      </Checkouts>

      {
        data
          ? (
            <CheckoutModal
              open={open}
              onClose={() => setOpen(false)}
              data={data}
              onConfirm={() => console.log('confirmado')}
            />
          )
          : ''
      }
    </Container>
  );
}

export default Admin;
