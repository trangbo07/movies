// HomePageMovieApp.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const heroSlides = [
    {
      id: 1,
      image: 'back4.png',
      title: 'Chào mừng đến với TrangBoMovie',
      description: 'Khám phá thế giới điện ảnh với hàng ngàn bộ phim hấp dẫn'
    },
    {
      id: 2,
      image: 'back2.png',
      title: 'Phim Mới Cập Nhật Hàng Ngày',
      description: 'Luôn cập nhật những bộ phim mới nhất và hot nhất'
    },
    {
      id: 3,
      image: 'back3.png',
      title: 'Chất Lượng Full HD',
      description: 'Trải nghiệm xem phim với chất lượng hình ảnh sắc nét'
    }
  ];

  useEffect(() => {
    setFeaturedMovies([
      { id: 1, title: 'Avengers: Endgame', image: 'back1.png', rating: 4.8 },
      { id: 2, title: 'The Dark Knight', image: 'back4.png', rating: 4.9 },
      { id: 3, title: 'Inception', image: 'back2.png', rating: 4.7 },
      { id: 4, title: 'Chuyện thiên nhiên', image: 'back3.png', rating: 4.9 },
    ]);

    setLatestMovies([
      { id: 4, title: 'Messi x Ronaldo', image: 'ronaldo.png', rating: 4.6 },
      { id: 5, title: 'Caribe - Vùng đất cấm', image: 'caribe.png', rating: 4.5 },
      { id: 6, title: 'Cướp biển caribe', image: 'caribe.png', rating: 4.4 },
      { id: 7, title: 'The change of the would', image: 'khampha.png', rating: 4.4 },
    ]);

    setPopularMovies([
      { id: 8, title: 'Lâu đài trong chuyện cổ tích', image: 'laudai.png', rating: 4.7 },
      { id: 9, title: 'Lâu đài trong chuyện cổ tích - Part 2 ', image: 'laudai.png', rating: 4.0 },
      { id: 10, title: 'The love of human', image: 'tinhyeu.png', rating: 4.8 },
      { id: 11, title: 'The love of human - Part 2', image: 'tinhyeu.png', rating: 4.0 },
    ]);
  }, []);

  const MovieCard = ({ movie }) => (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100 shadow-lg border-0 card-hover">
        <Link to={`/movie/${movie.id}`} className="text-decoration-none">
          <div className="position-relative">
            <Card.Img variant="top" src={movie.image} alt={movie.title} className="rounded-top" />
            <div className="badge bg-danger position-absolute top-0 end-0 m-2">
              ★ {movie.rating}
            </div>
          </div>
          <Card.Body className="text-center">
            <Card.Title className="text-dark fw-semibold fs-5">{movie.title}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );

  const Section = ({ title, movies }) => (
    <section className="mb-5">
      <h2 className="section-title text-danger mb-4">{title}</h2>
      <Row>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </section>
  );

  return (
    <Container fluid className="px-0">
      <Carousel fade controls indicators className="hero-carousel">
        {heroSlides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              className="carousel-slide d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image})`,
                height: '90vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <Container>
                <h1 className="display-3 fw-bold mb-3 animated fadeInDown">{slide.title}</h1>
                <p className="lead mb-4 animated fadeInUp">{slide.description}</p>
                <Link to="/movies" className="btn btn-danger btn-lg px-5 py-3 rounded-pill shadow animated fadeIn">
                  Xem phim ngay
                </Link>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="py-5">
        <Section title="Phim Nổi Bật" movies={featuredMovies} />
        <Section title="Phim Mới Nhất" movies={latestMovies} />
        <Section title="Phim Phổ Biến" movies={popularMovies} />

        <section className="mb-5">
          <h2 className="section-title text-danger mb-4">Thể Loại Phim</h2>
          <Row>
            {[ 'Hành Động', 'Hài Hước', 'Tâm Lý', 'Kinh Dị', 'Khoa Học Viễn Tưởng', 'Tình Cảm' ].map((genre, index) => (
              <Col key={index} xs={6} sm={4} md={2} className="mb-3">
                <Link
                  to={`/movies?genre=${genre.toLowerCase()}`}
                  className="btn btn-outline-danger w-100 py-3 rounded-pill genre-hover shadow-sm"
                >
                  {genre}
                </Link>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Container>
  );
};

export default Home;
