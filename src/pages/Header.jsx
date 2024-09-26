import React, {useEffect, useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time (you can adjust this as needed)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // Set to 3000ms or any duration you deem appropriate
  
      // Cleanup the timer if the component unmounts before the timer is done
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
      <div className={loading ? "preloader" : "preloader hidden"}>
        <div class="spinner"></div>
      </div>

      <header class="header-1">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-2 col-sm-5 col-md-4 col-6">
              <div class="logo">
                <Link to={"/"}>
              
                  <img src="assets/img/logo-img.svg" alt="Tradejini Logo"  style={{ filter: 'brightness(0) invert(1)' }}  />
                  </Link>
              </div>
            </div>
            <div class="col-lg-10 p-lg-0 d-none d-lg-flex align-items-center justify-content-end">
              <div class="menu-wrap">
                <div class="main-menu">
                  <ul>
                    <li>
                      <Link to="javascript:void(0);">About</Link>
                      {/* <ul class="sub-menu">
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to="javascript:void(0);">Products</Link>{" "}
                    </li>
                    <li>
                      <Link to="javascript:void(0);">Pricing</Link>
                      {/* <ul class="sub-menu">
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="services-2.html">Services 2</a>
                        </li>
                        <li>
                          <a href="services-details.html">Services Details</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to="/">Jiniversity</Link>
                      {/* <ul class="sub-menu">
                        <li>
                          <a href="faq.html">faq</a>
                        </li>
                        <li>
                          <a href="team.html">team</a>
                        </li>
                        <li>
                          <a href="pricing.html">pricing</a>
                        </li>
                        <li>
                          <a href="signin.html">Sign In</a>
                        </li>
                        <li>
                          <a href="signup.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Media</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to="javascript:void(0);">Support</Link>
                      {/* <ul class="sub-menu">
                        <li>
                          <a href="blog-three-col.html">Blog Three Column</a>
                        </li>
                        <li>
                          <a href="blog-two-col.html">Blog Two Column</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-classic.html">Blog Classic</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="blog-details-video.html">
                            Blog Details Video
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-slider.html">
                            Blog Details Slider
                          </a>
                        </li>
                      </ul> */}
                    </li>

                    {/* <li class="menu-item-has-children">
                      <a href="javascript:void(0);">Support</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="blog-three-col.html">Blog Three Column</a>
                        </li>
                        <li>
                          <a href="blog-two-col.html">Blog Two Column</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-classic.html">Blog Classic</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="blog-details-video.html">
                            Blog Details Video
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-slider.html">
                            Blog Details Slider
                          </a>
                        </li>
                      </ul>
                    </li> */}
                   
                  </ul>
                </div>
              </div>
              <div class="header-right-element text-white">
                <Link to="#" class="custom-btn custom-btn--style-2">
                  Signup
                </Link>
              </div>
            </div>
            <div class="d-block d-lg-none col-sm-1 col-md-8 col-6">
              <div class="mobile-nav-wrap">
                <div id="hamburger">
                  <i class="fal fa-bars"></i>
                </div>

                <div class="mobile-nav">
                  <button type="button" class="close-nav">
                    <i class="fal fa-times-circle"></i>
                  </button>
                  <nav class="sidebar-nav">
                    <ul class="metismenu" id="mobile-menu">
                      {/* <li>
                        <a class="has-arrow" href="javascript:void(0);">
                          Homes
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                      <Link to="javascript:void(0);">About</Link>
                      </li>
                     
                      <li>
                      <Link to="javascript:void(0);">Products</Link>{" "}
                       
                      </li>
                      <li>
                      <Link to="javascript:void(0);">Pricing</Link>{" "}
                      </li>
                      <li>
                      <Link to="/">Jiniversity</Link>
                      </li>
                      <li>
                      <Link to="javascript:void(0);">Support</Link>{" "}
                      </li>
                    </ul>
                    <Link to="#" class="custom-btn">
                      Signup
                    </Link>
                  </nav>
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
