import React  from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>        
                        <h5>Về chúng tôi</h5>
                        <p>
                            Trangbone là một trang web bán hàng online.
                        </p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;