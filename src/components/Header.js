import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">TrangBoMovie</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/movies" className="nav-link">Phim mèo</Link>
          <Link to="/contact" className="nav-link">Liên hệ</Link>
          <Link to="/login" className="nav-link">Đăng nhập</Link>
          <Link to="/register" className="nav-link">Đăng ký</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 