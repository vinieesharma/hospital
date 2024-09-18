import {
  ceo,
  profile,
  teamMember1,
  teamMember2,
  teamMember3,
  teamMember4,
} from "../../assets/images";
import styles from "./OurTeam.module.css";
import { PiMapPinFill } from "react-icons/pi";

const team = [
  {
    image: teamMember4,
    name: "Mr. Altamash Khan",
    degree: "High Court Advocate",
    designation: "Our Legal consultant",
    location: "Indore, Madhya Pradesh",
  },
  {
    image: profile,
    name: "Mr. Irfan usmani ",
    degree: "Micro biologist",
    designation: "HOD department of medecine",
    location: "Ujjain, Madhya Pradesh",
  },
  {
    image: teamMember3,
    name: "Mr. Iftikhar Hasan ",
    degree: "Er. & MAB marketing ",
    designation: "",
    location: "Kota, Rajasthan",
  },
  {
    image: teamMember2,
    name: "Mr. Usman Asgar Ahmad ",
    degree: "",
    designation: "Business promoters UAE",
    location: "Abu Dhabi, UAE",
  },
  {
    image: profile,
    name: "Mr. Ritesh Shukla",
    degree: "Speaker and influencer",
    designation: "Our Business permoter",
    location: "Indore, Madhya Pradesh",
  },
  {
    image: teamMember1,
    name: "Mr. Swapnil",
    degree: "Film director and event organizer",
    designation: "Project influencers",
    location: "Abu Dhabi, UAE",
  },
];
const OurTeam = () => {
  return (
    <div
      style={{
        backgroundColor: "#eaf3ff",
        marginBottom:'6rem'
      }}
    >
      <div
        style={{
          maxWidth: "140rem",
          margin: "0 auto",
          padding: "5rem 3rem",
        }}
      >
        <h2 className={styles.section_title}>Our Team</h2>
        <div className={styles.inner_container}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.ceo_image_container}>
              <img src={ceo} alt="CEO Profile" className={styles.ceo_image} />
            </div>
            <div style={{ textAlign: "left", marginTop: "4px" }}>
              <p
                style={{
                  fontWeight: 900,
                  marginBottom: "4px",
                  fontSize: "2rem",
                }}
              >
                Mr. Faisal Usman
              </p>
              <p style={{ textAlign: "center" }}>Founder & CEO</p>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div>
              <div className={styles.grid}>
                {team.map((member, index) => {
                  const { name, degree, designation, location, image } = member;
                  return (
                    <div className={styles.grid_item} key={index}>
                      <div className={styles.card_image_container}>
                        <img
                          src={image}
                          alt="team member profile"
                          className={styles.card_image}
                        />
                      </div>
                      <div className={styles.card_content}>
                        <div>
                          <p style={{ fontWeight: 900, marginBottom: "3px" }}>
                            {name}
                          </p>
                          <p style={{ marginBottom: "1px" }}>{degree}</p>
                          <p style={{}}>{designation}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <PiMapPinFill
                            style={{
                              position: "relative",
                              top: "2px",
                              marginRight: "3px",
                            }}
                          />
                          <p style={{ fontStyle: "italic" }}>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
