import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(50);
    const [index, setIndex] = useState(1);
    const toRotate = ["Hello, I'm Duane Villapando.", "I'm a Fullstack Developer."]
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(50);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <>
            <section className='home' id='home'>
                <div className="bg-animation">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="stars4"></div>
                </div>
                <div className="wrapper">
                    <div className="bg">{text}</div>
                    <div className="fg">{text}</div>
                </div>
                <Link to='/Portfolio/about'>
                    View my work <i className="arrow fa fa-arrow-right"></i>
                </Link>
            </section>
        </>

    )
}

export default Home