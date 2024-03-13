import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
// import Footer from '../pages/Footer';
const HomePage = () => {
  return (

    <div className="home-container">

      <div className="image-container">
        <Link to="/HomePage">
          <img src="Banner.png" alt="Background" className="full-width-image" />
        </Link>
      </div>

      <div className="content-container">
        <h1 class="white-text">Popular Exams</h1>


        <div className="card-container">

          <a href="/nursing">
            <img src="nursing.jpg" alt="Nurshing" className="card-image" />
          </a>
          <a href="/UPSC">
            <img src="upse.jpg" alt="CA" className="card-image" />
          </a>
          <a href="/Banking">
            <img src="Bank.jpg" alt="CA" className="card-image" />
          </a>
          <a href="/Railway">
            <img src="railway.jpg" alt="CA" className="card-image" />
          </a>
          <a href="/SSC">
            <img src="Staff_Selection_Commission_Logo.jpg" alt="CA" className="card-image" />
          </a>
          <a href="/Bank">
            <img src="Bank.jpg" alt="CA" className="card-image" />

          </a>
          <a href="/Railway">
            <img src="railway.jpg" alt="" className="card-image" />
          </a>
          <a href="/Nursing">
            <img src="nursing.jpg" alt="CA" className="card-image" />
          </a>

        </div>


        <div className="">
          <h2 className='text-next'>Test</h2>

          <div className='abcd'>
            <a href="/Nursing">
              <img src="Rectangle 23.png" alt="nursing" className="card-images" />
            </a>

            <a href="/Neet Link">
              <img src="Rectangle 24.png" alt="Neet" className="card-images" />
            </a>
          </div>
        </div>


        <div className='last-card'>
          <h3>Suggested Book Series</h3>

          <a href="/Indian Government and politics"></a>
          <img src="16849946519789354886461_Main.jpg" alt='ind gov & pol' className='card-img'></img>

          <a href="/Bpsc teacher"></a>
          <img src="16849946519789354886461_Main.jpg" alt='ind gov & pol' className='card-img'></img>

          <a href="/Cisf "></a>
          <img src="16849946519789354886461_Main.jpg" alt='ind gov & pol' className='card-img'></img>

          <a href="/ssc cgl"></a>
          <img src="16849946519789354886461_Main.jpg" alt='ind gov & pol' className='card-img'></img>

          <a href="/Indian Government and politics"></a>
          <img src="16849946519789354886461_Main.jpg" alt='ind gov & pol' className='card-img'></img>

          <a href="/Bpsc teacher"></a>
          <img src="16849946519789354886461_Main.jpg" alt='Bpsc teacher' className='card-img'></img>

          <a href="/Cisf"></a>
          <img src="16849946519789354886461_Main.jpg" alt='cisf exams' className='card-img'></img>
        </div>


      </div>
      {/* <Footer/> */}
    </div>
  );
};


export default HomePage;
