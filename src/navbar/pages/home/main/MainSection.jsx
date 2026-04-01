import { Link } from "react-router-dom";
import { LiaPencilRulerSolid, LiaBezierCurveSolid } from "react-icons/lia";
import { FaRegLightbulb, FaRegEnvelope } from "react-icons/fa";
import "./MainSection.css";
import { useInView } from "./useInView";

// Card Component with scroll animation
const AnimatedCard = ({ card, index }) => {
  const [ref, isInView] = useInView();

  const delayClass = 
    index === 0 ? 'delay-100' : 
    index === 1 ? 'delay-200' : 
    index === 2 ? 'delay-300' : 
    'delay-400';

  return (
    <div
      ref={ref}
      className={`animated-card${isInView ? ' in-view animate-slide-up-fade' : ''} ${delayClass}`}
    >
      {/* Icon Container */}
      <div className="animated-card-icon">
        {card.icon}
      </div>

      {/* Title */}
      <Link
        to="#"
        className="link-underline animated-card-title"
      >
        {card.title}
      </Link>

      {/* Counter */}
      <p className="animated-card-count">
        {card.count}
      </p>
    </div>
  );
};

export default function MainSection() {
    const cards = [
        { icon: <LiaPencilRulerSolid />, title: "Web Design", count: "120 Projects" },
        { icon: <LiaBezierCurveSolid />, title: "Ui/Ux Design", count: "241 Projects" },
        { icon: <FaRegLightbulb />, title: "Web Research", count: "240 Projects" },
        { icon: <FaRegEnvelope />, title: "Marketing", count: "331 Projects" },
    ];

    return (
      <div className="main-section-containers">
        <section className="main-section">
          <div className="main-section-grid">
            {cards.map((card, index) => (
              <AnimatedCard key={index} card={card} index={index} />
            ))}
          </div>
        </section>
      </div>
    );
}