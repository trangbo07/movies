import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    console.log('Register data:', formData);
    // Sau khi đăng ký thành công
    navigate('/login');
  };

  return (
    <div className="register-box">
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="username"
            placeholder="Tên đăng nhập" 
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            placeholder="Mật khẩu" 
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu" 
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Đăng ký</button>
        <p className="login-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
};

export default Register; 