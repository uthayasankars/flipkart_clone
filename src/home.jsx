import Navbar from './components/NavBar/navbar'
import Category from './components/Category/category';

function Home(props) {
  return (
    <>
    <div className="main-home">
      <div className="home-navbar">
    <Navbar loginName="Login"/>
    </div>
    <div className="home-category">
    <Category/>
    </div>
    </div>

    </>

  )
}

export default Home