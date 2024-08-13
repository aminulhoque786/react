import Agency from "./components/agency/Agency"
import Banner from "./components/banner/Banner"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hundrerd from "./components/hundred/Hundrerd"
import Price from "./components/price/Price"
import Project from "./components/project/Project"

import Work from "./components/work/Work"


function App() {
  

  return (
    <>
     <Header/>
     <Banner/>
      <Work/>
      <Agency/>
      <Hundrerd/>
      <Experience/>
      <Price/>
    <Project/>
    <Footer/>
    </>
  )
}

export default App
