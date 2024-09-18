import styles from "./OurServices.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const services = [
  {
    title: "Book Appointment",
    content:
      "Consult with any doctor from 18 departments at any time and anywhere",
    link:"/bookappointment",
    icon: "",
  },
  {
    title: "Order medicine",
    content: "Buy Medicines and Essentials items at best prices",
    link: "/ordermedicine",
    icon: "",
  },
  {
    title: "Lab test",
    content:
      "Consult with any doctor from 18 departments at any time and anywhere",
    link: "/labtest",
    icon: "",
  },
  {
    title: "Book Ambulance",
    content: "Buy Medicines and Essentials items at best prices",
    link: "/BookAmbulance",
    icon: "",
  },
  {
    title: "Surgery",
    content:
      "Consult with any doctor from 18 departments at any time and anywhere",
    link: "/Surgery",
    icon: "",
  },
];
const OurServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.cardGrid}>
          <div className={`${styles.gridHeader} ${styles.cards}`}>
            <h2 className={styles.headerTitle}>Our Services</h2>
            <p className={styles.headerContent}>
              Sloane Virtual Hospital is your trusted partner for better health.
            </p>
            {/* <button className={styles.btn}>Full List of Servies</button> */}
          </div>
          {services.map((service, index) => {
            return (
              <div className={styles.card} key={index}>
                <div>
                  <h3 className={styles.header}>{service.title}</h3>
                  <p className={styles.content}>{service.content}</p>
                </div>
                <div style={{ textAlign: "end" }}>
                  <a href={service.link} className={styles.miniBtnLink}>
                    <button className={styles.miniBtn}>
                      <div
                        style={{
                          position: "absolute",
                          top: "52%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <HiOutlineArrowNarrowRight size={20} />
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OurServices;
