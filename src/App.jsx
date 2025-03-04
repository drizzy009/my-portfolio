import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';

const About = lazy(() => import('./pages/about/About'));
const Resume = lazy(() => import('./pages/resume/Resume'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const Contact = lazy(() => import( './pages/contact/Contact'));
const Portfolio = lazy(() => import( './pages/portfolio/Portfolio'));


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      )}
    </main>
  );
}

export default App;
