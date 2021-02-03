import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./styles/Home.css"
import Card from '../components/Card';
import ChooseYourEngine from '../imgs/Choose Your Engine.svg';
import GodotUI from '../imgs/Godot-UI.svg';
import GodotCourse from '../imgs/Godot Course.svg';
import Tuts from './Tuts';
import HomePage from './Home'

const Home = () => {
    return (
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
            <section className="stuff">
                <div className="stuff-container">
                    <Card img={ChooseYourEngine} desc="In this post I give you suggestions on which Game Engine You would use from a particular case EX:  'No coding experience, A particular programming language etc.'" buttonto="/" buttontext="Learn More" />
                    <Card img={GodotUI} desc="In this post I give you a tutorial on the godot's UI (User Interface) so that you can get familiar with it's UI(User Interface) and get used to it." buttonto="/" buttontext="Learn More" />
                    <Card img={GodotCourse} desc="In this post I give you a tutorial series(not released yet) fully on godot. You'll learn about GDScript, Nodes, Scenes, Reusability of Scenes and many more." buttonto="/" buttontext="Learn More"/>
                </div>
            </section>
            <Footer />
        </div>


    )
}

export default Home;
