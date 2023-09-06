import  { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import('./pages/about/About'));
const Resume = lazy(() => import('./pages/resume/Resume'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
