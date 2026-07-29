import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServicesTabs from './components/ServicesTabs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import RequiredDocuments from './components/RequiredDocuments';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CoverPage from './components/CoverPage';
import Gallery from './components/Gallery';
import SmartWealth from './components/SmartWealth';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route
            path="/home"
            element={(
              <>
                <Navbar />
                <main>
                  <ServicesTabs />
                </main>
                <Footer />
                <FloatingWhatsApp />
              </>
            )}
          />
          <Route
            path="/required-documents"
            element={(
              <>
                <Navbar />
                <main>
                  <RequiredDocuments />
                </main>
                <Footer />
                <FloatingWhatsApp />
              </>
            )}
          />
          <Route
            path="/courses"
            element={(
              <>
                <Navbar />
                <main>
                  <Courses />
                </main>
                <Footer />
                <FloatingWhatsApp />
              </>
            )}
          />
          <Route
            path="/courses/:slug"
            element={(
              <>
                <Navbar />
                <main>
                  <CourseDetail />
                </main>
                <Footer />
                <FloatingWhatsApp />
              </>
            )}
          />
          <Route
            path="/gallery"
            element={<Gallery />}
          />
          <Route
            path="/smart-wealth"
            element={(
              <>
                <Navbar />
                <main>
                  <SmartWealth />
                </main>
                <Footer />
                <FloatingWhatsApp />
              </>
            )}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
