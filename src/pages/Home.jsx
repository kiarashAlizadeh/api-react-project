import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import ArticleItem from '../components/articleItem/ArticleItem';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/articles')
      .then((response) => setArticles(response.data));
  }, []);
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 className="my-4">لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
          {articles.map((article) => (
            <Col>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
