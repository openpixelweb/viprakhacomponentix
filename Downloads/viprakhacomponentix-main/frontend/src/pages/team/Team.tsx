
import { Link } from "react-router";
import FadeInAdvanced from "../../components/elements/FadeInAdvanced";
import { teamMembers, type TeamMember } from "../../contents/team/team";
import FooterOne from "../../components/footers/FooterOne";
import Banner from "../../features/banner/Banner";

const Team: React.FC = () => {
    return (
        <>
            <Banner title="Team" subTitle="Team" />
            <section className="team-page">
                <div className="container">
                    <div className="row">
                        {teamMembers.map((member: TeamMember) => (
                            <FadeInAdvanced
                                key={member.id}
                                className={`col-xl-3 col-lg-6 col-md-6`}
                                delay={member.animationDelay}
                                variant={member.animationDirection}
                            >
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img
                                                src={member.image}
                                                alt={`${member.name} - ${member.role}`}
                                            />
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <div className="team-two__social">
                                            <Link to="#"><span className="icon-facebook"></span></Link>
                                            <Link to="#"><span className="icon-instagram"></span></Link>
                                            <Link to="#"><span className="icon-link-in"></span></Link>
                                            <Link to="#"><span className="icon-xpa"></span></Link>
                                        </div>
                                        <h3 className="team-two__title">
                                            <Link to="/team-details">{member.name}</Link>
                                        </h3>
                                        <p className="team-two__sub-title">{member.role}</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        ))}
                    </div>
                </div>
            </section>
            <FooterOne />
        </>
    );
};

export default Team;