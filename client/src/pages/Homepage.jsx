import Footer from "../componets/Footer"
import  Header from "../componets/Header"
import JobSearchBar from "../componets/JobSearchinput"
import MainSection from "../componets/MainSection"



const Homepage=()=>{
       return(
        <div className="font-[Poppins]" >
                 <div className="sticky bg-white top-0 z-20"> <Header /></div>
                 <main className=" max-lg:sticky bg-white z-10 max-lg:top-14">
                     <JobSearchBar/>
                 </main>
                <section>
                  <MainSection/>
                </section>

                <footer>
                    <Footer/>
                
                </footer>

        </div>
       )
}


export default Homepage