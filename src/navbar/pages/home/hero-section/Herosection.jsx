import { FaArrowRight } from "react-icons/fa6";
import TypeEffect from "./typingeffect/TypingEffect";
// Path fix: 4 levels up to reach 'src', then into 'assets'
import HeroSrc from "../../../../assets/heroImage/banner-user-image-one.webp";
import "./hero.css";
import MainSection from "../main/MainSection";
import Experience from "./experience/Experience";
import Skill from "../skill/Skill";
import ScrollAnimationWrapper from "../scroll-animation/ScrollAnimationWrapper";
import Latestervices from "../latestServices/LatestServices";
import Education from "../education/Education";
import Experiencehome from "../experience/Experiencehome";
import Support_company from "../support-company/Support_company";
import Latest_portfolio from "../latest-portfolio/Latest_portfolio";
import My_skill from "../my_skill/my_skill";
import ServiceList from "../ServiceList/ServiceList";
export default function Herosection() {
  return (
    <>
      <div className="hero-grid">
        <div className="hero-left-content">
          <h1 className="hero-title hero-title-sm">HELLO</h1>
        <div className="hero-subtitle-wrapper">
  <p className="hero-subtitle">i'm Jane Cooper a</p>
  <TypeEffect />
</div>
          <p className="hero-description">
            I am a Senior Full Stack Developer at heart and, i create features
            that are best suited for the job at hand.
          </p>

          <div className="hero-button-wrapper">
            <button className="profile">
              <span>View Portfolio</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="hero-right-content">
          <p className="hero-float-text">WEB DESIGNER</p>

          {/* Hero Image */}
          <img src={HeroSrc} alt="Jane Cooper" className="hero-image" />
          <p className="hero-float-text-bottom text-stroke">WEB DESIGNER</p>
        </div>
      </div>
      <ScrollAnimationWrapper>
        <MainSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Experience />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Skill />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Latestervices />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Education />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Experiencehome />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Support_company />
      </ScrollAnimationWrapper>
       <ScrollAnimationWrapper>
        <Latest_portfolio />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <My_skill />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ServiceList />
        </ScrollAnimationWrapper>
    </>
  );
}
