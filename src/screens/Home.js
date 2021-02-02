import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./styles/Home.css"
import {BrowserRouter as Router} from 'react-router-dom'

const Home = () => {
    return (
        <Router>
        <div classname="home">
            <Navbar />
            <div className="content-wrapper">
                <div className="text-wrapper">
                    <h1>Become A Game Dev</h1>
                </div>
                <div className="learnmore-wrapper">
                    <a href="/tuts" className="learn-more-link">
                    <div className="learnmore-button">
                        <p className="learnmore">Learn More</p>
                    </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
        </Router>
    )
}

export default Home
