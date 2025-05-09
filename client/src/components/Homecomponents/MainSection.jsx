import React from 'react'
import TopCompanies from './TopCompanies';
import RecommendedJobs from './RecommendedJobs';
import InternshipCorner from './InternshipCorner';
import TrendingDomains from './TrendingDomains';


function MainSection() {
  return (
    <>
       <TopCompanies/>
       <RecommendedJobs/>
       <InternshipCorner/>
       <TrendingDomains/>
    </>
  )
}

export default MainSection