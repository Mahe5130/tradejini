import React from "react";
import { Link } from "react-router-dom";

function HomeDetail() {
  return (
    <div>
      <div class="page-banner-wrap  text-capitalize">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
              <div class="page-heading">
                <h1>Blog's Details</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb justify-content-center">
                  {/* <li class="breadcrumb-item active" aria-current="page">
                    Blog's Details
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-details-wrapper section-padding mtm-30">
        <div class="container">
          <div class="row justify-content-center g-5">
            <div class="col-xl-8 col-12 pe-xl-5">
              <div class="blog-content">
                <img
                  src="assets/img/nifty-breaches-25k.webp"
                  alt="crypto trading image"
                />

                <div class="post-meta">
                  <div class="post-cat">
                    <Link to="/detail">Hemanth Reddy</Link>
                  </div>
                  <div class="post-date">
                    <span>August 1, 2024</span>
                  </div>
                  <div class="post-comment">
                    <a>Comment (5)</a>
                  </div>
                </div>

                <h3 class="pt-md-4">
                  Celebration at Dalal Street as Nifty breaches 25,000!
                </h3>
                <p class="mt-4">
                  Benchmark indices in the Indian stock market reached a
                  historic milestone today as the Nifty touched the 25,000 mark
                  for the first time, buoyed by robust buying in banking and
                  FMCG stocks. This significant achievement marks a new chapter
                  in Indian market history and reflects the growing confidence
                  among investors.{" "}
                </p>
                <p class="mt-4 mb-4">
                  The Indian stock market attempted breaching the milestone
                  yesterday on Monday but fell short merely by less than a half
                  points before falling dramatically.
                </p>

                <p class="mt-4">
                  Today, the Nifty50 index surged to an intraday high of 25,000,
                  while the Bank Nifty also soared to an all-time high, driven
                  by strong performances from major banks like ICICI Bank and
                  SBI. Analysts attribute this rally to positive cues from the
                  global economy, including favorable US economic data and
                  expectations of a potential interest rate cut by the Federal
                  Reserve in September. The overall bullish sentiment was
                  further supported by substantial buying from both Foreign
                  Institutional Investors (FIIs) and Domestic Institutional
                  Investors (DIIs), who collectively injected over ₹5,300 crores
                  into the market last Friday.
                </p>
                <p class="mt-4 mb-4">
                  We will examine the critical phases that have defined Nifty's
                  rise to this historic level. Through this, we aim to provide a
                  comprehensive analysis of the market dynamics at play.{" "}
                </p>

                <h4>Market’s reaction to 2024 General Elections</h4>

                <p>
                  The rally that led Nifty to breach the 25,000 mark can be
                  traced back to the period surrounding the election results.
                  The Indian stock market experienced significant volatility
                  during this time, driven by investor sentiment and the
                  uncertainty associated with the electoral outcomes.
                </p>

                <p>
                  On the day of the election results in 2024, the BSE Sensex
                  plummeted by 2,800 points (3.66%) to close at 73,669.28, while
                  the Nifty50 dropped 809 points (3.6%) to end at 22,409. The
                  total market capitalization of all listed companies on the BSE
                  decreased by approximately ₹8.78 lakh crore, bringing the
                  total to ₹417.13 lakh crore. The India VIX, a measure of
                  market volatility, surged by 20% to around 25 levels,
                  indicating heightened uncertainty among investors. Major
                  contributors to the decline included heavyweights like
                  Reliance Industries and HDFC Bank, with Reliance alone
                  accounting for a 565-point drop.
                </p>

                <p>
                  This market turbulence followed exit polls predicting a
                  substantial victory for the BJP-led NDA alliance in the 2024
                  Lok Sabha elections. Prior to the results, the markets had
                  reached new all-time highs, buoyed by optimistic sentiment.
                  However, as preliminary results indicated the NDA alliance
                  leading in over 290 seats, investors adopted a cautious and
                  risk-averse stance, leading to the substantial market decline.
                </p>
                
                
              </div>

              <div class="related-post-wrapper">
                <div class="row">
                  <div class="col-md-6 col-xl-4 col-12">
                    <div class="single-related-post">
                      <p>
                        <i class="icon-arrow-left me-1"></i> Previous
                      </p>
                      <Link to="#">
                      What is EMA in Trading? How to Use Exponential Moving Average With Formula
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4 mt-md-0 mt-4 offset-xl-4 col-12 text-md-end">
                    <div class="single-related-post">
                      <p>
                        Next <i class="icon-arrow-right me-1"></i>
                      </p>
                      <Link to="#">
                      Pump and Dump Schemes: How to Avoid Stock Market Traps?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="share-post-wrapper d-flex justify-content-between align-items-center">
                <div class="share-title">
                  <h5 class="mb-0">Share this post:</h5>
                </div>
                <div class="share-links">
                  <Link to="#">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i class="fab fa-telegram-plane"></i>
                  </Link>
                  <Link to="#">
                    <i class="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i class="fab fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>

              <div class="comments-wrapper">
                <h5>3 comments on this post:</h5>

                <div class="comments-list">
                  <div class="single-comment">
                    <div
                      class="user-img bg-cover"
                      style={{
                        backgroundImage: "url('assets/img/blog/author/1.png')",
                      }}
                    ></div>
                    <div class="comment-data">
                      <h6>Peter Doe</h6>
                      <span>Nov 22, 2024</span>

                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis quia animi ipsam consequatur quidem
                        fugit. Magni totam saepe cumque amet, nihil, quaerat
                        veritatis, consequuntur eveniet blanditiis soluta.
                      </p>

                      <Link to="#" class="replay-btn">
                        Reply
                      </Link>
                    </div>
                  </div>
                  <div class="single-comment replay-comment">
                    <div
                      class="user-img bg-cover"
                      style={{
                        backgroundImage: "url('assets/img/blog/author/2.png')",
                      }}
                    ></div>
                    <div class="comment-data">
                      <h6>Anna Hawk</h6>
                      <span>Nov 23, 2024</span>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi esse illo harum labore inventore! Explicabo
                        voluptatum ab distinctio delectus voluptatem.
                      </p>

                      <Link to="#" class="replay-btn">
                        Reply
                      </Link>
                    </div>
                  </div>
                  <div class="single-comment">
                    <div
                      class="user-img bg-cover"
                      style={{
                        backgroundImage: "url('assets/img/blog/author/3.png')",
                      }}
                    ></div>
                    <div class="comment-data">
                      <h6>Jonathon R.</h6>
                      <span>Dec 01, 2024</span>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio qui eligendi delectus saepe deleniti incidunt quod
                        nostrum nobis necessitatibus exercitationem eius,
                        doloribus aliquid quam accusantium.
                      </p>

                      <Link to="#" class="replay-btn">
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="comment-form-wrapper">
                  <h5 class="mb-30">Leave a comment</h5>

                  <form action="#" class="comment-form row">
                    <div class="col-md-6 col-12">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div class="col-md-6 col-12">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div class="col-md-12 col-12">
                      <textarea placeholder="Write your comment"></textarea>
                    </div>

                    <div class="col-md-12 col-12">
                      <button class="custom-btn" type="submit">
                        Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-8 col-12">
              <div class="sidebar__wrapper">
                <div class="sidebar__widget sidebar__widget-theme-bg mb-30">
                  <div class="sidebar__widget-content">
                    <div class="sidebar__search">
                      <form action="#">
                        <div class="sidebar__search-input-2">
                          <input type="text" placeholder="Search here" />
                          <button type="submit">
                            <i class="far fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="sidebar__widget mb-30">
                  <h3 class="sidebar__widget-title">Catagories</h3>
                  <div class="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link to="/detail">
                          Crypto Trading
                          <span>
                            <i class="icon-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <a class="active" href="/detail">
                          Day Trading
                          <span>
                            <i class="icon-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link to="/detail">
                          Option Trading
                          <span>
                            <i class="icon-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/detail">
                          Stock Trading
                          <span>
                            <i class="icon-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/detail">
                          Forex Investment
                          <span>
                            <i class="icon-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/detail">
                          TradePro Template
                          <span>
                            <i class="icon-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="sidebar__widget mb-30">
                  <h3 class="sidebar__widget-title">Our Latest Post</h3>
                  <div class="sidebar__widget-content">
                    <div class="sidebar__post">
                      <div class="rc__post mb-25">
                        <div class="rc__post-thumb mr-20">
                          <Link to="#">
                            <img
                              src="assets/img/cold-smooth.webp"
                              alt="Blog Image"
                            />
                          </Link>
                        </div>
                        <div class="rc__post-content">
                          <div class="rc__meta">
                            <span>
                              <i class="far fa-clock"></i>
                              November 21, 2024
                            </span>
                          </div>
                          <h3 class="rc__post-title">
                            <Link to="#">
                            Pump and Dump Schemes: How to Avoid Stock Market Traps?
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div class="rc__post mb-25">
                        <div class="rc__post-thumb mr-20">
                          <Link to="#">
                            <img
                              src="assets/img/Trade-to-trade.webp"
                              alt="Blog Image"
                            />
                          </Link>
                        </div>
                        <div class="rc__post-content">
                          <div class="rc__meta">
                            <span>
                              <i class="far fa-clock"></i>
                              November 21, 2024
                            </span>
                          </div>
                          <h3 class="rc__post-title">
                            <Link to="#">
                            Trade to Trade Stock Segment: Meaning, Advantages & How to Trade in T2T Stocks
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div class="rc__post">
                        <div class="rc__post-thumb mr-20">
                          <Link to="#">
                            <img
                              src="assets/img/Option-sell.webp"
                              alt="Blog Image"
                            />
                          </Link>
                        </div>
                        <div class="rc__post-content">
                          <div class="rc__meta">
                            <span>
                              <i class="far fa-clock"></i>
                              November 21, 2024
                            </span>
                          </div>
                          <h3 class="rc__post-title">
                            <Link to="#">
                            How to Trade in Options with Small Capital
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar__widget mb-30">
                  <h3 class="sidebar__widget-title">Archives List</h3>
                  <div class="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link to="#">
                          July 2024<span>(10)</span>
                        </Link>
                      </li>
                      <li class="active">
                        <Link to="#">
                          August 2024<span>(05)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          March 2024<span>(10)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          April 2024<span>(20)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          June 2024<span>(13)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          January 2024<span>(05)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="sidebar__widget mb-30">
                  <h3 class="sidebar__widget-title">Tags</h3>
                  <div class="sidebar__widget-content">
                    <div class="tagcloud">
                      <Link to="#">trading</Link>
                      <Link to="#">tradepro</Link>
                      <Link to="#">ETF</Link>
                      <Link to="#">Blockchain</Link>
                      <Link to="#">Crypto</Link>
                      <Link to="#">Bitcoin</Link>
                      <Link to="#">Stock</Link>
                      <Link to="#">Day Trading</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="newsletter-subscribe-widgets text-white">
                <div class="wid-title">
                  <h5>Join Us!</h5>
                </div>
                <p>
                  Subscribe our newsletter and stay up to date about the company
                </p>
                <div class="newsletter-subscribe">
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" class="submit-btn">
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetail;
