import { Container } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0', backgroundColor: '#dc3545', borderBottom: '1px solid #dc3545' }}>
          <Container>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '13px 16px', display: 'flex', justifyContent: 'space-between' }}>
          <a className="navbar-brand" href="/" style={{ color: '#fff', fontWeight: '800', fontSize: '22px', textDecoration: 'none', paddingTop:'10px'}}>Alumni Tracer Form</a>
          <button className="pill-button">Dashboard</button>
        </nav>
        </Container>
    </div>

  );
};

export default Header;