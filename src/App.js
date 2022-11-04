import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Member from './Components/Member';
import logo from './Assets/logo.png';
import ProjectOverview from './Components/ProjectOverview';
import Power from './Components/Power';
import Galleries from './Components/Galleries';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <title title="//SKTE." />

      <Navbar />

      <body className='bg-black'>


        <Hero />




        <div className='mt-7'>
          <Member />
        </div>

        <div>

          <div className='flex place-content-center mt-14'>
            <div className='place-self-center'>
              <img src={logo} className='invert w-24 h-12 ' alt="" />
            </div>
          </div>
          <div className='flex pl-5 pr-5 place-content-center text-white text-center mt-14'>
            <p>Skte aka Sekte first formed while in college. We met in the same class and eventually became close friends. The five of us first met when we were trying to do homework for our final exams for the semester, and since then we have done all our college activities together.
              Hadi was the first to come up with the idea of starting a group . He told Kamal about the idea and Kamal agreed.
              After passing the final exam, We eventually formed an unnamed group. It never crossed our mind when we first met to start a group . hadi named the group based on a joke we made during our freshman year and called it " Sekte Sistem Kebut Semalam"  and eventually SEKT was formed.</p>
          </div>

        </div>

        <div className='mt-14'>
          <ProjectOverview />
        </div>

        <div className='mt-28 '>
          <Power />
        </div>

        <div className='mt-28 ml-5'>
          <Galleries />
        </div>

        <div className='mt-28'>
          <Footer />
        </div>

      </body>

    </>
  );
}

export default App;
