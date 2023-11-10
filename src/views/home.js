import React from "react";

import { Helmet } from "react-helmet";
import FeatureCard from "../components/feature-card";
import Question from "../components/question";
import "./home.css";

const Home = (props) => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>WeatherGuard</title>
        <meta property="og:title" content="WeatherGuard" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">WEATHERGUARD</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <button
                className="home-nav2"
                onClick={(e) => {
                  scrollTo(e, "details");
                }}
              >
                About
              </button>
              <button
                className="home-nav3"
                onClick={(e) => {
                  scrollTo(e, "features");
                }}
              >
                Features
              </button>

              <button
                className="home-nav4"
                onClick={(e) => {
                  scrollTo(e, "arch");
                }}
              >
                Architecture
              </button>
              <button
                className="home-nav5"
                onClick={(e) => {
                  scrollTo(e, "workflow");
                }}
              >
                Workflow
              </button>
              <button
                className="home-nav3"
                onClick={(e) => {
                  scrollTo(e, "contact");
                }}
              >
                Contact
              </button>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">WEATHERGUARD</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <button
                  onClick={() => window.location.replace("/#about")}
                  className="home-nav12"
                >
                  About
                </button>
                <button
                  onClick={() => window.location.replace("/#features")}
                  className="home-nav31"
                >
                  Features
                </button>
                <button
                  // onClick={() => window.location.replace("/#contact")}
                  className="home-nav41"
                >
                  <a href="#contact">Contact</a>
                </button>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div id="home" className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              WeatherGuard: Decentralized Weather Insurance
            </h1>
            <div className="home-btn-group">
              <button
                onClick={(e) => {
                  scrollTo(e, "details");
                }}
                className="home-hero-button1 button"
              >
                Learn More ⬇
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="details" className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>About</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Fully-automated Decentralized Weather Insurance
            </h2>
            <span className="home-details-sub-heading">
              Immutable contracts on Arweave network provide fraud-free
              insurance services. Real-time decentralized oracles provide
              up-to-the-minute weather information, ensuring accurate and timely
              claims processing.
            </span>
          </div>
          <img alt="image" src="arweave.png" className="home-details-image" />
        </div>
      </div>
      <div id="features" className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">Features</h2>
              <span className="home-features-sub-heading">
                Key features of WeatherGuard
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Transparent Policies"
                SubHeading="Access and review insurance policies on Arweave network. No hidden clauses or surprise exclusions."
                Image="policy.png"
              ></FeatureCard>
              <FeatureCard
                Heading="Real-time Weather Data"
                SubHeading="Using Chainlink's Real-time decentralized
                  oracles provide up-to-the-minute weather information, ensuring
                  accurate and timely claims processing."
                Image="chainlink.png"
              ></FeatureCard>
              <FeatureCard
                Heading="Decentralized Claims Process"
                SubHeading="Smart contracts automate claims processing based on predefined weather conditions, removing the need for intermediaries."
                Image="process.png"
              ></FeatureCard>
              <FeatureCard
                Heading="Policy Selection"
                SubHeading="Choose from a wide range of predefined insurance policies to maximize your claims"
                Image="personalized.png"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div id="arch" className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Proposed Architecture
          </h1>
          <span className="home-banner-sub-heading">
            Here is my proposed architecture leveraging Smartweave network and
            Chainlink oracles and automation to provide a truly fraud-proof and
            decentralized weather insurance service
          </span>
          <img src="architecture.png" alt="Architecture" />
        </div>
      </div>
      <div id="workflow" className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container06">
              <span className="home-text06 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text09 heading2">How does it work?</h2>
              <span className="home-text10">
                {/* <span>
                  Here are some of the most common questions that we get.
                </span> */}
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container07">
              <Question
                Answer="Leveraging the power of lazy-evaluation in SmartWeave, clients can ensure fraud-free transactions for themselves on the Arweave network. Namely 2 contract- A main contract which holds all the policy creation,assignment and verifying logic and another contract which mints NFTs for claimed policies"
                Question="The WeatherGuard Smart Contracts are deployed on the Arweave Network."
              ></Question>
              <Question
                Answer="The client must pay the insurance amount in $AR tokens. This process can be automated using Chainlink automation to pay the amount according to the duration choosen."
                Question="The client selects an insurance policy and pays the amount in $AR tokens"
              ></Question>
              <Question
                Answer="Chainlink oracles will help provide decentralized and immutable data regarding weather conditions of choosen region. Hence, client need not worry about any manipulation of data."
                Question="Immutable and decentralized data"
              ></Question>
              <Question
                Answer="On claiming your insurance, the contract will fetch data from the oracles to verify if the claim meets the conditions. If so, the policy return amount will be paid back in $AR tokens along with an NFT signifying acquiring of claim and closing the client's policy"
                Question="Insurance Claims"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="home-footer">
        <footer className="home-footer1">
          <div className="home-container08">
            <span className="home-logo2">WEATHERGUARD</span>
            <nav className="home-nav1 home-nav1">
              <button
                className="home-nav12"
                onClick={(e) => {
                  scrollTo(e, "home");
                }}
              >
                Home
              </button>
              <button
                className="home-nav22"
                onClick={(e) => {
                  scrollTo(e, "details");
                }}
              >
                About
              </button>
              <button
                className="home-nav32"
                onClick={(e) => {
                  scrollTo(e, "features");
                }}
              >
                Features
              </button>
              <button
                className="home-nav42"
                onClick={(e) => {
                  scrollTo(e, "arch");
                }}
              >
                Architecture
              </button>
              <button
                className="home-nav52"
                onClick={(e) => {
                  scrollTo(e, "workflow");
                }}
              >
                Workflow
              </button>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container09">
            <span className="home-text27">© by Varun Doshi</span>
            <div className="home-icon-group1">
              <a href="https://twitter.com/Varunx10" target="_blank">
                <img src="twitter.png" className="home-icon10" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/varunxdoshi/"
                target="_blank"
              >
                <img src="linkedin.png" className="home-icon14" alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
