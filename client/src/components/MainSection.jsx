import React from 'react'
import PopularCategories from './PopularCategories';
import JobInsightsSection from './JobInsightsSection';
import FeaturedCompanies from './FeaturedCompanies';
import TrendingRoles from './TrendingRoles';
import Footer from './Footer'



const trendingSkills = [
  'Accounting Jobs', 'Analytics Jobs', 'Animation Jobs', 'Architecture Jobs',
  'Banking Jobs', 'BPO Jobs', 'Data Science Jobs', 'Java Jobs', 'Marketing Jobs',
];

const trendingTitles = [
  'Business Analyst Jobs', 'Digital Marketing Head Jobs', 'Engineering Manager Jobs',
  'HR Head Jobs', 'Marketing Head Jobs', 'Marketing Manager Jobs',
];

function MainSection() {
  return (
   <>
      <PopularCategories />
      <JobInsightsSection/>
      <FeaturedCompanies />
      <TrendingRoles />
      <Footer/>
   </>
  )
}

export default MainSection