import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import SecurityPage from './pages/SecurityPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import UseCasesPage from './pages/UseCasesPage';
import FrameworksPage from './pages/FrameworksPage';
import ProductivitySkillsPage from './pages/ProductivitySkillsPage';
import DocsPage from './pages/DocsPage';
import FAQPage from './pages/FAQPage';
import ChangelogPage from './pages/ChangelogPage';
import ReviewsPage from './pages/ReviewsPage';
import GuidePage from './pages/GuidePage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/productivity-skills" element={<ProductivitySkillsPage />} />
        <Route path="/frameworks" element={<FrameworksPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/faq" element={<FAQPage />} />
        <Route path="/docs/requirements" element={<DocsPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Route>
    </Routes>
  );
}

export default App;
