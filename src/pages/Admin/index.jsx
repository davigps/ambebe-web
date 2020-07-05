import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import SocketClient from 'socket.io-client';
import { getUser, logout } from '../../services/auth';

import Header from './components/Header';
import CheckoutsLabel from './components/CheckoutsLabel';
import Checkout from './components/Checkout';
import { Container, Checkouts } from './styles';
import checkoutsArray from './checkouts';

function Admin() {
  const history = useHistory();

  // const [socket, setSocket] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [checkouts, setCheckouts] = useState([]);

  const getCheckouts = (i) => {
    if (i <= checkoutsArray.length) {
      setCheckouts(checkoutsArray.slice(0, i));
      setTimeout(() => getCheckouts(i + 1), 60 * 1000);
    }
  };

  useEffect(() => {
    // const io = SocketClient(process.env.REACT_APP_API_URL);
    // setSocket(io);

    // io.on('notification', (data) => {
    //   console.log(data);
    // });
    const user = getUser();

    setName(user.name);
    setEmail(user.email);
    setCity(user.city);

    getCheckouts(1);
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
          checkouts.map((data) => {
            data.checkin.time = new Date();

            return (
              <Checkout
                key={Math.random()}
                data={data}
              />
            );
          })
        }
      </Checkouts>
    </Container>
  );
}

export default Admin;
