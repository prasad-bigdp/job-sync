import  Header from "../componets/Header"
import JobSearchBar from "../componets/JobSearchinput"
import MainSection from "../components/MainSection"



const Homepage=()=>{
       return(
        <div className="font-[Poppins]" >
                <Header/>
                 <main>
                     <JobSearchBar/>
                 </main>
                <section>
                  <MainSection/>
                </section>

                <footer>
                
                
                </footer>

        </div>
       )
}


export default Homepage