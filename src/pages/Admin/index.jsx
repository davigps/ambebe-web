import React, { useEffect, useState } from 'react';
import SocketClient from 'socket.io-client';
import { getUser } from '../../services/auth';

// import { Container } from './styles';

function Admin() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const io = SocketClient(process.env.REACT_APP_API_URL);
    setSocket(io);

    console.log(getUser());
  }, []);

  return <div>Admin</div>;
}

export default Admin;
