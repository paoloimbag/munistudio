import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <Container fluid className="hero-section">
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="profile-info mb-4">
              <img 
                src="https://cdn.dribbble.com/users/7998549/avatars/normal/6a4a94ad3a37a9fd76d3fa7f1a8c6c0a.jpg" 
                alt="Paolo Imbag"
                className="profile-image mb-4"
              />
              <h1 className="display-6 fw-bold mb-2">Paolo Imbag</h1>
              <p className="text-muted mb-3">Digital Designer — UI/Visual Design/Branding</p>
              <div className="d-flex justify-content-center gap-2 mb-4">
                <a 
                  href="https://dribbble.com/paoloimbag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill"
                >
                  Follow on Dribbble
                </a>
                <button className="btn btn-outline-dark rounded-pill">Hire Me</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Hero; 