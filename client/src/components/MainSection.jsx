import React from 'react'
import PopularCategories from './PopularCategories'
import FeaturedCompany from './FeaturedCompany'
import TrendingRoles from './TrendingRoles'
import JobInsightsSection from './JobInsightsSection'


function MainSection() {
  return (
   <>
     <PopularCategories/>
     <JobInsightsSection/>
     <FeaturedCompany/>
     <TrendingRoles/>
     
   </>
  )
}

export default MainSection