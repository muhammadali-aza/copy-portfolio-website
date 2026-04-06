import Services from "./Services";

export default function LatestServices() {
    return (
        <div className="education-container">
            <div className="education-content">
                {/* Eyebrow heading */}
                <p className="education-eyebrow">
                    Latest Service
                </p>

                {/* Main heading */}
                <h2 className="education-heading">
                    Inspiring The World One
                    Project
                </h2>

                {/* Description paragraph */}
                <p className="education-description">
                Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                </p>
            </div>
            <Services />
        </div>
    )
}