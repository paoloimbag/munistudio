import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShots = async () => {
      try {
        // Using sample data for now since we need to set up proper API access
        const sampleData = [
          {
            id: 1,
            title: "Admin Dashboard — Light/Dark Mode",
            images: {
              normal: "https://cdn.dribbble.com/userupload/14197627/file/original-0f6b11de24b4f9e62644bc71c9fb33e9.png"
            },
            html_url: "https://dribbble.com/shots/25153281-Admin-Dashboard-Light-Dark-Mode",
            likes_count: 2,
            views_count: 89
          },
          {
            id: 2,
            title: "WD Admin Dashboard",
            images: {
              normal: "https://cdn.dribbble.com/userupload/14099583/file/original-6c8f7d7c0a2d18d175c8fc8d53d11c91.png"
            },
            html_url: "https://dribbble.com/shots/24946777-WD-Admin-Dashboard",
            likes_count: 1,
            views_count: 76
          }
          // Add more projects here
        ];

        setProjects(sampleData);
        setLoading(false);

        // Uncomment this when you have your API access token
        /*
        const response = await fetch(
          'https://api.dribbble.com/v2/user/shots?access_token=YOUR_ACCESS_TOKEN'
        );
        const data = await response.json();
        setProjects(data);
        setLoading(false);
        */
      } catch (error) {
        console.error('Error fetching shots:', error);
        setLoading(false);
      }
    };

    fetchShots();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-section bg-light py-4">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map(project => (
            <Col key={project.id}>
              <Card className="project-card border-0">
                <Link 
                  to={`/project/${project.id}`} 
                  className="text-decoration-none card-img-hover"
                >
                  <Card.Img variant="top" src={project.images.normal} />
                  <div className="hover-overlay">
                    <div className="d-flex justify-content-between align-items-center p-3">
                      <a 
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-sm rounded-pill"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View on Dribbble
                      </a>
                    </div>
                  </div>
                </Link>
                <Card.Body className="p-3">
                  <h5 className="card-title">{project.title}</h5>
                  <div className="stats">
                    <span className="me-3">
                      <i className="bi bi-heart-fill me-1"></i>
                      {project.likes_count}
                    </span>
                    <span>
                      <i className="bi bi-eye-fill me-1"></i>
                      {project.views_count}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio; 