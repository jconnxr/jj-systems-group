import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import OurStory from './pages/about/OurStory'
import Founders from './pages/about/Founders'
import WhatWeDoOverview from './pages/what-we-do/Overview'
import SystemsArchitecture from './pages/what-we-do/SystemsArchitecture'
import IntakeLeadFlow from './pages/what-we-do/IntakeLeadFlow'
import AutomationTooling from './pages/what-we-do/AutomationTooling'
import VisibilityPresence from './pages/what-we-do/VisibilityPresence'
import OngoingOptimization from './pages/what-we-do/OngoingOptimization'
import LocalServiceBusinesses from './pages/industries/LocalServiceBusinesses'
import ProfessionalServices from './pages/industries/ProfessionalServices'
import OperationsHeavyBusinesses from './pages/industries/OperationsHeavyBusinesses'
import FranchiseMultiLocation from './pages/industries/FranchiseMultiLocation'
import Process from './pages/Process'
import CaseStudies from './pages/CaseStudies'
import BookMeeting from './pages/contact/BookMeeting'
import GeneralInquiry from './pages/contact/GeneralInquiry'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/founders" element={<Founders />} />
        <Route path="/what-we-do" element={<WhatWeDoOverview />} />
        <Route path="/what-we-do/systems-architecture" element={<SystemsArchitecture />} />
        <Route path="/what-we-do/intake-lead-flow" element={<IntakeLeadFlow />} />
        <Route path="/what-we-do/automation-tooling" element={<AutomationTooling />} />
        <Route path="/what-we-do/visibility-presence" element={<VisibilityPresence />} />
        <Route path="/what-we-do/ongoing-optimization" element={<OngoingOptimization />} />
        <Route path="/industries/local-service-businesses" element={<LocalServiceBusinesses />} />
        <Route path="/industries/professional-services" element={<ProfessionalServices />} />
        <Route path="/industries/operations-heavy-businesses" element={<OperationsHeavyBusinesses />} />
        <Route path="/industries/franchise-multi-location" element={<FranchiseMultiLocation />} />
        <Route path="/process" element={<Process />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact/book-a-meeting" element={<BookMeeting />} />
        <Route path="/contact/general-inquiry" element={<GeneralInquiry />} />
      </Routes>
    </Layout>
  )
}
