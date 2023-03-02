import React from 'react'
import './Contact.scss'
import fb from '../../assets/images/social-media/icons8-facebook-48.png'
import ig from '../../assets/images/social-media/icons8-instagram-48.png'
import github from '../../assets/images/social-media/icons8-github-94.png'

const Contact = () => {

    let gotoSocialMedia = (socialMedia) => {
        if (socialMedia === "fb") {
            window.open("https://www.facebook.com/profile.php?id=100080638946140", "_blank")
        }
        if (socialMedia === "ig") {
            window.open("https://www.instagram.com/villapandoduane/", "_blank")
        }
        if (socialMedia === "github") {
            window.open("https://github.com/CpE-Duane", "_blank")
        }
    }

    let sayHi = () => {
        window.open("mailto:villapando.duane@gmail.com", "_blank")
    }

    return (
        <section className='contact text-white' id='contact'>
            <div className="container">
                <div className='text-center text-white'>
                    <h1 className='fw-bold'>Get in Touch</h1>
                    <p className=' fs-5'>
                        I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <button className='sayHi mt-5 fs-5 fw-bold' onClick={sayHi}>Say Hi</button>
                </div>

                <div className="social-media text-center">
                    <img src={fb} alt="" onClick={() => gotoSocialMedia("fb")} />
                    <img src={ig} alt="" className='mx-4' onClick={() => gotoSocialMedia("ig")} />
                    <img src={github} alt="" onClick={() => gotoSocialMedia("github")} />
                </div>

                <p className='duane'>DUANE VILLAPANDO &copy; 2023</p>
            </div>
        </section>
    )
}

export default Contact