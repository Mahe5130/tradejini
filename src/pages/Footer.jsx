import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer-wrapper footer-1">
        <div class="footer-widgets-wrapper">
          <div class="container">
            <div class="row g-5">
              <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                <div class="single-footer-widget wow fadeInLeft">
                  <div class="about-us-widget">
                    <a href="index.html" class="footer-logo d-block">
                    <img src="assets/img/download.svg" alt="Tradejini Logo" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, cons atetur adipisicing elit.
                      Laborum en doloremque nostrum ipsum dolor sit amet quas
                      nulla in ab odit eligendi Tradejini!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
                <div class="footer__widget wow fadeInLeft" data-wow-delay=".2s">
                  <h3 class="footer__widget-title">Company</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>{" "}
                    </li>
                    <li>
                      <a href="#">Products</a>{" "}
                    </li>
                    <li>
                      <a href="#">Pricing</a>{" "}
                    </li>
                    <li>
                      <a href="#">Jiniversity</a>{" "}
                    </li>
                    <li>
                      <a href="#">Support</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
                <div class="footer__widget wow fadeInLeft" data-wow-delay=".4s">
                  <h3 class="footer__widget-title">Support</h3>
                  <ul>
                    <li>
                      <a href="">Help Center</a>{" "}
                    </li>
                    <li>
                      <a href="#">FAQs</a>{" "}
                    </li>
                    <li>
                      <a href="#">Community</a>{" "}
                    </li>
                    <li>
                      <a href="#">Educations</a>{" "}
                    </li>
                    <li>
                      <a href="#">Email Support</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
                <div class="footer__widget wow fadeInLeft" data-wow-delay=".6s">
                  <h3 class="footer__widget-title">Resources</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Trading Tools
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        Stock Screeners
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        Profit Charts
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        Charting Tools
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        Risk Calculators
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-wrapper">
          <div class="container">
            <div class="footer-bottom-content d-md-flex justify-content-between">
              <div
                class="site-copyright wow fadeInUp"
                data-wow-delay=".2"
                data-wow-duration="1s"
              >
                <p>
                  &copy; 2024{" "}
                  <a href="#">
                    Tradejini
                  </a>{" "}
                  All Rights Reserved.
                </p>
              </div>
              <div
                class="social-links mt-4 mt-md-0 wow fadeInUp"
                data-wow-delay=".3"
                data-wow-duration="1s"
              >
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-telegram-plane"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
