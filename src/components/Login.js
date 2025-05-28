import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log('Login data:', formData);
    // Sau khi đăng nhập thành công
    navigate('/');
  };

  return (
    <div className="login-box">
      <h2>Đăng nhập</h2>
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
        <button type="submit">Đăng nhập</button>
        <p className="register-link">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </p>
      </form>
    </div>
  );
};

export default Login; 