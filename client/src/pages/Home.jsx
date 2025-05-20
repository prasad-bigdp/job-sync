import Header from "../components/Homecomponents/Header"
import  JobSearchBar from "../components/Homecomponents/JobSearchinput"
import MainSection from "../components/Homecomponents/MainSection"
import  Footer from "../components/Homecomponents/Footer"

const Home = () => {
  return (
    <div className="font-[Poppins]" >
      <div className="sticky bg-white top-0 z-20"> <Header /></div>
      <main className=" max-lg:sticky bg-white z-10 max-lg:top-14">
        <JobSearchBar />
      </main>
      <section>
        <MainSection />
      </section>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}


export default Home
