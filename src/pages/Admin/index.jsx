import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SocketIoClient from 'socket.io-client';
import { getUser, logout } from '../../services/auth';

import Header from './components/Header';
import CheckoutsLabel from './components/CheckoutsLabel';
import Checkout from './components/Checkout';
import CheckoutModal from './components/CheckoutModal';
import { Container, Checkouts } from './styles';

function Admin() {
  const history = useHistory();

  const [socket, setSocket] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [checkouts, setCheckouts] = useState([]);
  const [data, setData] = useState(null);

  const removeCheckout = (id) => {
    const newCheckouts = checkouts.filter((item) => item.id !== id);

    setCheckouts(newCheckouts);
  };

  useEffect(() => {
    const listenNotification = (socketIo) => {
      socketIo.on('notification', (notification) => {
        notification.time = new Date();
        notification.id = Math.random();

        if (notification.bar_id === getUser().id) {
          setCheckouts([...checkouts, notification]);
        }
      });
    };

    if (socket) {
      listenNotification(socket);
    }
  }, [checkouts, socket]);

  useEffect(() => {
    const io = SocketIoClient(process.env.REACT_APP_API_URL);
    setSocket(io);

    const user = getUser();
    setName(user.name);
    setEmail(user.email);
    setCity(user.city);
  }, []);

  return (
    <Container>
      <Header
        name={name}
        email={email}
        city={city}
        onLogout={() => {
          logout();
          socket.disconnect();
          history.push('/login');
        }}
      />

      <CheckoutsLabel />
      <Checkouts>
        {
          checkouts.map((item) => (
            <Checkout
              key={Math.random()}
              data={item}
              onClick={(checkoutData) => {
                setData(checkoutData);
                setOpen(true);
              }}
              onDismiss={() => removeCheckout(item.id)}
            />
          ))
        }
      </Checkouts>

      {
        data && (
          <CheckoutModal
            open={open}
            onClose={() => setOpen(false)}
            data={data}
            onConfirm={() => {
              socket.emit('confirmation', data);
              removeCheckout(data.id);
              setOpen(false);
            }}
          />
        )
      }
    </Container>
  );
}

export default Admin;
