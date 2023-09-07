import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';

const About = lazy(() => import('./pages/about/About'));
const Resume = lazy(() => import('./pages/resume/Resume'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a 3-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Turn off the loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount (optional)
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </main>
  );
}

export default App;
