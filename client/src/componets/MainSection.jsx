import React from 'react'
import FeaturedCompanies from './FeaturedCompanies'
import PopularCategories from './PopularCategories'
import TrendingChips from './TrendingChips'
import JobVacancyTabs from './JobVacancyTabs'
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
    <FeaturedCompanies/>
    <PopularCategories/>
    <TrendingChips title="Trending skills" items={trendingSkills}/>
    <TrendingChips title="Trending job titles" items={trendingTitles}/>
    <JobVacancyTabs/>
    <Footer/>
   </>
  )
}

export default MainSection