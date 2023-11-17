import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AddArticle from './pages/AddArticle';
import Article from './pages/Article';
import EditArticle from './pages/EditArticle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
