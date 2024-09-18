import styles from "./OurServicesHomesection.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const services = [
    {
        title: "Book Appointment",
        content:
            "Consult with any doctor from 18 departments at any time and anywhere",
        link: "/bookappointment",
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
    // {
    //     title: "Surgery",
    //     content:
    //         "Consult with any doctor from 18 departments at any time and anywhere",
    //     link: "/Surgery",
    //     icon: "",
    // },
];
const OurServicesHomesection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.cardGrid}>
                    <div className={`${styles.gridHeader} ${styles.cards}`}>
                        <h2 className={styles.headerTitle}>Our Services</h2>
                        {/* <p className={styles.headerContent}>
              Sloane Virtual Hospital is your trusted partner for better health.
            </p> */}
                        <a href="/services"><button className={styles.btn1}>View all</button></a>
                    </div>
                    <div className={styles.carditem}>

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
                                                    <HiOutlineArrowNarrowRight size={20} className="icon-img" />
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
        </div>
    );
};
export default OurServicesHomesection;
