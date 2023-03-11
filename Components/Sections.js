import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperSlider from "../Components/SwiperSlider";
import Link from "next/link";
import {
  faLightbulb,
  faLaptop,
  faGlobe,
  faMoneyCheckAlt,
  faLock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import NumberCounter from "../Components/NumberCounter";
import Image from "next/image";
import NavigationContext from "../Contexts/NavigationContext";

import styles from "../styles/Home.module.css";
import pageStyles from "../styles/Page.module.css";
import { useContext, useState } from "react";
const Sections = {
  HomeSlider: () => <SwiperSlider HomeSlider={true} />,
  AboutUs: () => (
    <div id="about" className={styles.panel}>
      <label className={styles.panelTitle}>About Us</label>
      <div className={styles.panelBody}>
        <div className={styles.panelBody_description}>
          <p>
            Avenue Packs, Fully dedicated to integrity, quality and innovation. We strive to offer a unique combination of integrated packaging solutions and services unmatched by any other company to be the best.
          </p>
        </div>
        <div className={styles.panelBody_actions}>
          <div className={styles.panelButton}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </div>
          <div className={styles.panelButton}>
            <Link href="/solutions">
              <a>Solutions</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ),
  WhyUs: () => (
    <div className={`${styles.panel} ${styles.whyUsPanel}`}>
      <label className={styles.panelTitle}>Why choose us ?</label>
      <div className={styles.panelBody}>
        <div className={styles.panelBody_description}>
          <p>
            Bringing the best-in-class industrial packaging solution to you,
            Avenue Corporation is a packaging engineering company that stands
            out for its eco-friendly, innovative, cost-effective & smart
            catalogue of products
          </p>
        </div>
        <div
          className={`${styles.panelBody_actions} ${styles.whyUsPanelBody_actions}`}
        >
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faLightbulb} />
            </span>
            <p>Innovation & Technology</p>
          </div>
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faGlobe} />
            </span>
            <p>Sustainability</p>
          </div>
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faLaptop} />
            </span>
            <p>Industry 4.0</p>
          </div>
        </div>
        <div
          className={`${styles.panelBody_actions} ${styles.whyUsPanelBody_actions}`}
        >
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon
                className={styles.faIcons}
                icon={faMoneyCheckAlt}
              />
            </span>
            <p>Cost-effective</p>
          </div>
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faLock} />
            </span>
            <p>Reliable & Safe</p>
          </div>
        </div>
      </div>
    </div>
  ),
  Solutions: () => {
    //START REUSABLE COMPONENT CHECK - PENDING
    const [hover, sethover] = useState(0);
    return (
      <div className={styles.solutions}>
        <label>Solutions</label>
        <div className={styles.solutionsGridContainer}>
          <div
            className={`${styles.gridItem} ${styles.gridItem_1}`}
            onMouseEnter={() => sethover(1)}
            onMouseLeave={() => sethover(0)}
          >
            {hover == 1 ? (
              <Image
                src="/pixels/solutions-grid/hover-images/grid-1.gif"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
                priority
              />
            ) : (
              <Image
                src="/pixels/solutions-grid/1.png"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
                priority
              />
            )}
          </div>
          <div
            className={`${styles.gridItem} ${styles.gridItem_2}`}
            onMouseEnter={() => sethover(2)}
            onMouseLeave={() => sethover(0)}
          >
            {hover == 2 ? (
              <Image
                src="/pixels/solutions-grid/hover-images/grid-2.gif"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            ) : (
              <Image
                src="/pixels/solutions-grid/2.png"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            )}
          </div>
          <div
            className={`${styles.gridItem} ${styles.gridItem_3}`}
            onMouseEnter={() => sethover(3)}
            onMouseLeave={() => sethover(0)}
          >
            {hover == 3 ? (
              <Image
                src="/pixels/solutions-grid/hover-images/grid-3.gif"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            ) : (
              <Image
                src="/pixels/solutions-grid/3.png"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            )}
          </div>
        </div>
        <div className={styles.solutionsGridContainer}>
          <div
            className={`${styles.gridItem} ${styles.gridItem_4}`}
            onMouseEnter={() => sethover(4)}
            onMouseLeave={() => sethover(0)}
          >
            {hover == 4 ? (
              <Image
                src="/pixels/solutions-grid/hover-images/grid-4.gif"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            ) : (
              <Image
                src="/pixels/solutions-grid/4.png"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            )}
          </div>
          <div
            className={`${styles.gridItem} ${styles.gridItem_5}`}
            onMouseEnter={() => sethover(5)}
            onMouseLeave={() => sethover(0)}
          >
            {hover == 5 ? (
              <Image
                src="/pixels/solutions-grid/hover-images/grid-5.gif"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            ) : (
              <Image
                src="/pixels/solutions-grid/5.png"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            )}
          </div>
          <div
            className={`${styles.gridItem} ${styles.gridItem_6}`}
            onMouseEnter={() => sethover(6)}
            onMouseLeave={() => sethover(0)}
          >
            {hover == 6 ? (
              <Image
                src="/pixels/solutions-grid/hover-images/grid-6.gif"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            ) : (
              <Image
                src="/pixels/solutions-grid/6.png"
                alt="Avenue Corporation Logo"
                layout="responsive"
                width={80}
                height={40}
              />
            )}
          </div>
        </div>
      </div>
    );
    //END REUSABLE COMPONENT CHECK - PENDING
  },
  MeetOurClients: ({ showClientSlider, setActive }) => (
    <div className={styles.panel}>
      {showClientSlider && (
        <label className={styles.panelTitle}>Meet Our Clients</label>
      )}
      <div className={styles.panelBody} onMouseOver={() => showClientSlider ? setActive(true) : ""} onBlur={() => showClientSlider ? setActive(false) : ""}>
        {showClientSlider && (
          <div className={styles.panelBody_description}>
            <SwiperSlider ClientsSlider={true} />
          </div>
        )}
        <div className={styles.panelBody_actions_meet_our_clients_container}>
          <div
            className={
              styles.panelBody_actions_meet_our_clients_contact_us_image
            }
          >
            <Image
              src={"/pixels/email-image.png"}
              layout="responsive"
              width={100}
              height={100}
              alt="Email Image"
            />
          </div>
          <div
            className={
              styles.panelBody_actions_meet_our_clients_contact_us_note
            }
          >
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_title
              }
            >
              Avenue Corporation engineered packaging solution
            </div>
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_divider
              }
            ></div>
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_description
              }
            >
              Our Packaging Solutions excels in terms of sustainability vision,
              eco-friendly solutions, core values, and operations; an one stop
              solution for all your industrial packaging needs. We are here to
              deliver expert packaging solutions & meet your sustainability
              goals as per your requirements. If you’re rethinking your
              packaging strategy and are looking to partner with a like-minded
              supplier.
            </div>
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_button
              }
            >
              <Link href="/#ContactForm">
                <div>Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  WorkCompleted: ({ reqCount, active, setActive }) => {
    return (
      <div className={styles.workCompleted} onMouseOver={() => setActive(true)} onPointerOver={() => setActive(true)} onBlur={() => setActive(false)}>
        <div className={styles.workCompleted__1}>
          <NumberCounter
            count={2500}
            description="Requirements met"
            isPositive={true}
            delay={1}
            start={active}
          />
        </div>
        <div className={styles.workCompleted__2}>
          <NumberCounter
            count={100}
            description="Curated Products"
            isPositive={true}
            delay={50}
            start={active}
          />
        </div>
        <div className={styles.workCompleted__3}>
          <NumberCounter
            count={20}
            description="Product Categories"
            isPositive={true}
            delay={200}
            start={active}
          />
        </div>
      </div>
    );
  },
  ContactForm: ({ }) => {
    const bt = require("bootstrap/dist/css/bootstrap.css");
    let formData = {};

    function validateForm(controls) {
      if (controls.email.value.length > 0) {
        validateEmail(controls.email);
      }
      return !(
        !controls.name.validity.valid ||
        !controls.email.validity.valid ||
        !controls.mobile.validity.valid ||
        !controls.msg.validity.valid
      );
    }

    const submitForm = (form) => {
      form.preventDefault();
      let controls = form.target;
      if (validateForm(controls)) {
        const data = {};
        data.name = controls.name.value;
        data.email = controls.email.value;
        data.mobile = controls.mobile.value;
        data.companyname = controls.companyname.value;
        data.msg = controls.msg.value;
        formData = data;
      }
    };

    function onlyCharacters(e) {
      if (e.key.length == 1) {
        if (!/^[a-zA-Z ]+$/.test(e.key)) {
          e.preventDefault();
        }
      }
    }
    function onlyDigits(e) {
      if (e.key.length == 1) {
        if (!/^[0-9]+$/.test(e.key)) {
          e.preventDefault();
        }
      }
    }
    function validateEmail(e) {
      let AtIndex = e.value.indexOf("@");
      let DotIndex = e.value.indexOf(".");
      if (DotIndex == -1) {
        e.setCustomValidity("Email should have format like abc@bca.com");
        e.classList.add(styles.invalid);
      } else {
        AtIndex = AtIndex == -1 ? 0 : AtIndex;
        DotIndex = DotIndex == -1 ? 9999999 : DotIndex;
        if (AtIndex > DotIndex) {
          e.setCustomValidity("Email should include @ and then '.'");
          e.classList.add(styles.invalid);
        } else {
          e.setCustomValidity("");
          e.classList.remove(styles.invalid);
        }
      }
    }

    return (
      <div className={styles.ContactForm}>
        <div className={styles.contactForm_description}>
          <p>Because Trust Matters!</p>
          <p>
            As a young organization, our steps are cautious. Experienced
            professionals thoroughly guide hand-holding for every action taken.
            It has been a wonderful and blessed journey for <u>Avenue Corporation</u>&nbsp;
            so far. We would like to bestow our sincere gratitude and fervent
            regards to our partners who trusted in us because, like you, we also
            value our customer&apos;s trust!
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889.882554922819!2d74.09764783546999!3d18.674533597432422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae47038d89ce5a0c!2zMTjCsDQwJzI4LjMiTiA3NMKwMDUnNTUuMSJF!5e0!3m2!1sen!2sin!4v1668328830736!5m2!1sen!2sin"
            width="600"
            height="450"
            className={styles.gmap}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google maps address"
          ></iframe>
        </div>
        <div className={styles.contactForm_form} id="ContactForm">
          <p>Get in touch</p>
          <form onSubmit={submitForm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputName"
                placeholder="Name"
                onKeyDown={onlyCharacters}
                required
                name="name"
              />
              <label htmlFor="floatingInputName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
                onChange={(e) => validateEmail(e.target)}
                name="email"
              />
              <label htmlFor="floatingInputEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInputMobile"
                placeholder="e.g. 839078716"
                maxLength={10}
                required
                name="mobile"
                onKeyDown={onlyDigits}
              />
              <label htmlFor="floatingInputMobile">Mobile Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputCompanyName"
                placeholder="e.g. Avenue Corporation"
                maxLength={100}
                name="companyname"
              />
              <label htmlFor="floatingInputMobile">Company Name</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="floatingTextarea2"
                style={{ minHeight: "8em" }}
                required
                name="msg"
              ></textarea>
              <label htmlFor="floatingTextarea2">Message</label>
            </div>
            <div className={styles.button}>
              <button type="submit">Get a callback</button>
            </div>
          </form>
        </div>
      </div>
    );
  },
  FooterLinks: ({ }) => {
    const navContext = useContext(NavigationContext);
    const socialLinks = navContext.socialLinks;
    const showPrivacyPolicy = (e) => {
      navContext.setModal({
        styles: {
          width: "60%",
          height: "auto",
          minHeight: "50%",
        },
        title: "Privacy Policy",
        body: (
          <div>
            We{" "}
            <q>
              <strong>Avenue Corporation</strong>
            </q>{" "}
            are carrying out manufacturing of Heavy Duty Corrugated Boxes &
            Complete Packaging Solution, is committed to grow by providing
            it&lsquo;s all Customers a Cost-Effective Solution with Good
            Quality Products, Services & Timely Deliveries always by reducing
            In-Process Rejections, Machine Break down time, increasing
            inspections at all stages & by monitoring daily production
            planning. <br />
            To enhance Customer&lsquo;s satisfaction{" "}
            <q>
              <u>Avenue Corporation</u>
            </q>{" "}
            will strict to adherence of quality management system with all
            legal requirements & continual improvements through proper
            communication with customers & periodically trainings of all
            employees. In its pursuits of excellence,{" "}
            <q>
              <u>Avenue Corporation</u>
            </q>{" "}
            shall strive achievement of an Eco-Friendly Environment &
            Employee&lsquo;s Satisfaction.{" "}
            <q>
              <u>Avenue Corporation</u>
            </q>{" "}
            strive to offer a Unique Combination of Integrated Packaging
            Solution & Services which unmatched by any other company to be the{" "}
            <q>
              <strong>ONLY ONE</strong>
            </q>
            .
            <br />
            <br />
            <div style={{ textAlign: "right" }}>
              {" "}
              Vaibhav Mumbare, Managing Director
              <br />
              Avenue Corporation, Pune (India)
            </div>
          </div>
        ),
      });
      navContext.setModalVisible(true);
    };

    return (
      <div className={styles.FooterLinks}>
        <div className={styles.FooterLinks__cell}>
          <Image
            src="/pixels/logo/blue-bg.png"
            alt="Avenue Corporation Logo"
            layout="responsive"
            width={80}
            height={40}
          />
        </div>
        <div id="address" className={styles.FooterLinks__cell}>

          <div>
            <label>Avenue Corporation</label>
            <a>
              <p> Corporate Address</p>
              Sector R19, Tower 41-06-09, Amanora Park Town, Hadapsar, Pune 411028
            </a>
          </div>
          <div>
            <a href="https://www.google.com/maps/place/18%C2%B040'28.3%22N+74%C2%B005'55.1%22E/@18.6745336,74.0976478,18z/data=!3m1!4b1!4m5!3m4!1s0x0:0xae47038d89ce5a0c!8m2!3d18.6745336!4d74.0986327?hl=en">
              <p>Plant Address</p>
              Gate no 984/3, M/S Shirke-Bricks Industries Compound, Next to Span
              Pump, Sanaswadi, Tq. Shirur, Dist. Pune - 412208.
            </a>
          </div>
        </div>
        <div id="contact" className={styles.FooterLinks__cell}>
          <label>Contact Us</label>
          <span className={styles.FooterLinks__contactus}>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:marketing@avenuecorporation.in">
                marketing@avenuecorporation.in
              </a>
            </span>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:sales@avenuecorporation.in">
                sales@avenuecorporation.in
              </a>
            </span>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:salesavenuecorporation@gmail.com">
                salesavenuecorporation@gmail.com
              </a>
            </span>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:8956747731">+91 8956747731</a>
            </span>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:8956747723">+91 8956747723</a>
            </span>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:7038650650">+91 7038650650</a>
            </span>
            <span className={styles.FooterLinks__row}>
              <span>
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <a href="https://avenuecorporation.in">
                www.avenuecorporation.in
              </a>
            </span>
          </span>
          <span className={styles.socials}>
            {/* <Link href={socialLinks["linkedin"] || ""}>
              <span>
                <FontAwesomeIcon icon={faLinkedin} listItem />
              </span>
            </Link>
            <Link href={socialLinks["instagram"] || ""}>
              <span>
                <FontAwesomeIcon icon={faInstagram} listItem />
              </span>
            </Link>
            <Link href={socialLinks["twitter"] || ""}>
              <span>
                <FontAwesomeIcon icon={faTwitter} listItem />
              </span>
            </Link>
            <Link target={"_blank"} href={socialLinks["youtube"] || ""}>
              <span>
                <FontAwesomeIcon icon={faYoutube} listItem />
              </span>
            </Link> */}
            <Link href={socialLinks["whatsapp"] || ""}>
              <span>
                <FontAwesomeIcon icon={faWhatsapp} listItem />
              </span>
            </Link>
            {/* <Link href={socialLinks["facebook"] || ""}>
              <span>
                <FontAwesomeIcon icon={faFacebook} listItem />
              </span>
            </Link> */}
          </span>
        </div>
        <div className={styles.FooterLinks__cell}>
          <label>Quick Links</label>
          <ul>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li onClick={showPrivacyPolicy}>
              Privacy Policy
              {/* <Link href={'/about'}>Privacy Policy</Link> */}
            </li>
            {/* <li>
              <Link href={"/about"}>Terms and Conditions</Link>
            </li> */}
          </ul>
        </div>
      </div>
    );
  },
  PageBanner: ({ title, description, image, alt, width = 100, height = 20 }) => {
    return (
      <div className={pageStyles.banner}>
        <div className={pageStyles.bannerTile}>
          <Image
            src={`/pixels/pages/${image}`}
            layout="responsive"
            width={width}
            height={height}
            alt={alt}
            objectFit={"cover"}
          />
        </div>
        <div className={pageStyles.bannerContents}>
          <label>{title}</label>
          <p>{description}</p>
          <div className={pageStyles.contact_us_button}>
            <Link href="/#contact">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    );
  },
};

export default Sections;
