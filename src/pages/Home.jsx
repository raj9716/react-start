import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; // if you are styling


import rajImage from '../assets/rajnish.jpg';
import drdoImage from '../assets/drdo.png';
import faberImage from '../assets/faber.png';
import asianImage from '../assets/asian.png';



function Home() {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="home-container">
            <Slider {...settings}>
                <div>
                    <section class="banner">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-5 mb-4 mb-md-0 text-center">
                                    <img src={rajImage} alt="Rajnish" className="banner-img" />
                                </div>
                                <div class="col-md-7 text-center text-md-start">
                                    <h1>Hi, I’m Rajnish Tiwari <br /> Web Developer </h1>
                                    <p>I create modern, responsive websites using React, Bootstrap, and other cutting-edge technologies.</p>
                                    <a href="#contact" class="btn btn-custom mt-3">Hire Me</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section class="banner banner-child">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-5 mb-4 mb-md-0 text-center">
                                    <img src={rajImage} alt="Rajnish" className="banner-img" />
                                </div>
                                <div class="col-md-7 text-center text-md-start">
                                    <h1>Hi, I’m Rajnish Tiwari <br /> Web Developer </h1>
                                    <p>I create modern, responsive websites using React, Bootstrap, and other cutting-edge technologies.</p>
                                    <a href="#contact" class="btn btn-custom mt-3">Hire Me</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>

            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h2>About Us</h2>
                        <p>As a front-end developer, I specialize in building clean, user-friendly, and performance-optimized websites that are not only visually appealing but also functional and accessible across all devices. Whether it's a business landing page, portfolio, blog, or an interactive web application, I focus on delivering designs that enhance user experience and engagement.</p>

                        <p>Using React.js, I create reusable components and dynamic user interfaces that load quickly and respond smoothly. React allows me to build scalable and maintainable applications with structured code and modular design patterns. In addition, I integrate Bootstrap 5 to speed up development using its flexible grid system and modern UI components — resulting in websites that are both mobile-first and visually consistent.</p>

                        <p>I follow industry best practices like semantic HTML, modular CSS, and clean JavaScript, along with tools like Git for version control and Vite or Webpack for project builds. I'm also open to using APIs, contact forms, image sliders, and other interactive features to meet unique project requirements.</p>

                        <p>If you're looking for a modern, fast-loading, and professionally built website — I’d be excited to collaborate with you and turn your vision into a powerful online presence.</p>

                    </div>
                </div>
            </div>


            <section className="services py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">My Services</h2>
                        <p className="text-muted">What I can do as a Frontend Developer</p>
                    </div>

                    <div className="row g-4">
                        {/* Web Development */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Responsive Web Design</h5>
                                <p className="text-muted">Building mobile-first, cross-browser websites using HTML, CSS, and JavaScript.</p>
                            </div>
                        </div>

                        {/* Bootstrap */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-bootstrap-fill fs-1 text-purple mb-3"></i>
                                <h5 className="fw-bold">Bootstrap UI</h5>
                                <p className="text-muted">Designing quick, responsive interfaces using Bootstrap 5 grid and components.</p>
                            </div>
                        </div>

                        {/* React */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-lightning-fill fs-1 text-warning mb-3"></i>
                                <h5 className="fw-bold">React Development</h5>
                                <p className="text-muted">Creating scalable web apps using modern React.js with reusable components.</p>
                            </div>
                        </div>

                        {/* Figma */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-pencil-fill fs-1 text-danger mb-3"></i>
                                <h5 className="fw-bold">Figma to HTML</h5>
                                <p className="text-muted">Converting Figma designs into clean, pixel-perfect frontend code.</p>
                            </div>
                        </div>

                        {/* Photoshop */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-brush-fill fs-1 text-info mb-3"></i>
                                <h5 className="fw-bold">Photoshop Edits</h5>
                                <p className="text-muted">Image editing, banners, and web assets optimized for fast loading.</p>
                            </div>
                        </div>

                        {/* WordPress */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center p-4">
                                <i className="bi bi-wordpress fs-1 text-dark mb-3"></i>
                                <h5 className="fw-bold">WordPress Setup</h5>
                                <p className="text-muted">Setting up WordPress themes and basic customizations for fast deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="projects">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">My Projects</h2>
                        <p className="text-muted">Some of the work I’ve recently done</p>
                    </div>

                    <div className="row g-4">
                        {/* Project Card 1 */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={drdoImage} alt="DRDO" className='img-fluid' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">DRDO</h5>
                                    <div className="d-flex justify-content-center gap-2">
                                        <a href="https://millclient.com/projects/sesam/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={faberImage} alt="FABER INDIA" className='img-fluid' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">FABER INDIA</h5>
                                    <div className="d-flex justify-content-center gap-2">
                                        <a href="https://faberindia.com/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={asianImage} alt="ASIANPAINTS" className='img-fluid' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">ASIANPAINTS</h5>
                                    <div className="d-flex justify-content-center gap-2">
                                        <a href="https://www.asianpaints.com/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>

    );
}

export default Home;
