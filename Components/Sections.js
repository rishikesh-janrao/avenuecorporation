import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperSlider from '../Components/SwiperSlider';
import Link from 'next/link';
import {
  faLightbulb,
  faLaptop,
  faGlobe,
  faMoneyCheckAlt,
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import NumberCounter from '../Components/NumberCounter';
import Image from 'next/image';
import NavigationContext from '../Contexts/NavigationContext';

import styles from '../styles/Home.module.css';
import { useContext, useState } from 'react';
const Sections = {
  HomeSlider: () => <SwiperSlider HomeSlider={true} />,
  AboutUs: () => (
    <div id='about' className={styles.panel}>
      <label className={styles.panelTitle}>About Us</label>
      <div className={styles.panelBody}>
        <div className={styles.panelBody_description}>
          <p>
            The idea of Avenue Corporation is to provide Innovative and
            sustainable packaging solution to reduce carbon footprint by up to
            93% and cost reduction by 10-15%. The solution consist of using a
            unique Engineering approach and the usage of high technology
            eco-friendly material.
          </p>
        </div>
        <div className={styles.panelBody_actions}>
          <div className={styles.panelButton}>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
          </div>
          <div className={styles.panelButton}>
            <Link href='/solutions'>
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
                src='/pixels/solutions-grid/hover-images/grid-1.gif'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
              />
            ) : (
              <Image
                src='/pixels/solutions-grid/1.png'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
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
                src='/pixels/solutions-grid/hover-images/grid-2.gif'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
              />
            ) : (
              <Image
                src='/pixels/solutions-grid/2.png'
                alt='Avenue Corporation Logo'
                layout='responsive'
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
                src='/pixels/solutions-grid/hover-images/grid-3.gif'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
              />
            ) : (
              <Image
                src='/pixels/solutions-grid/3.png'
                alt='Avenue Corporation Logo'
                layout='responsive'
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
                src='/pixels/solutions-grid/hover-images/grid-4.gif'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
              />
            ) : (
              <Image
                src='/pixels/solutions-grid/4.png'
                alt='Avenue Corporation Logo'
                layout='responsive'
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
                src='/pixels/solutions-grid/hover-images/grid-5.gif'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
              />
            ) : (
              <Image
                src='/pixels/solutions-grid/5.png'
                alt='Avenue Corporation Logo'
                layout='responsive'
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
                src='/pixels/solutions-grid/hover-images/grid-6.gif'
                alt='Avenue Corporation Logo'
                layout='responsive'
                width={80}
                height={40}
              />
            ) : (
              <Image
                src='/pixels/solutions-grid/6.png'
                alt='Avenue Corporation Logo'
                layout='responsive'
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
  MeetOurClients: ({ showClientSlider }) => (
    <div className={styles.panel}>
      {showClientSlider && (
        <label className={styles.panelTitle}>Meet Our Clients</label>
      )}
      <div className={styles.panelBody}>
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
            <FontAwesomeIcon icon={faEnvelope} />
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
              <Link href='/about'>
                <div>Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  WorkCompleted: ({ reqCount }) => {
    return (
      <div className={styles.workCompleted}>
        <div className={styles.workCompleted__1}>
          <NumberCounter
            count={2500}
            description='Requirements met'
            isPositive={true}
            delay={1}
          />
        </div>
        <div className={styles.workCompleted__2}>
          <NumberCounter
            count={100}
            description='Curated Products'
            isPositive={true}
            delay={50}
          />
        </div>
        <div className={styles.workCompleted__3}>
          <NumberCounter
            count={20}
            description='Product Categories'
            isPositive={true}
            delay={200}
          />
        </div>
      </div>
    );
  },
  ContactForm: ({}) => {
    const bt = require('bootstrap/dist/css/bootstrap.css');
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
        console.log(formData);
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
      let AtIndex = e.value.indexOf('@');
      let DotIndex = e.value.indexOf('.');
      if (DotIndex == -1) {
        e.setCustomValidity('Email should have format like abc@bca.com');
        e.classList.add(styles.invalid);
      } else {
        AtIndex = AtIndex == -1 ? 0 : AtIndex;
        DotIndex = DotIndex == -1 ? 9999999 : DotIndex;
        if (AtIndex > DotIndex) {
          e.setCustomValidity("Email should include @ and then '.'");
          e.classList.add(styles.invalid);
        } else {
          e.setCustomValidity('');
          e.classList.remove(styles.invalid);
        }
      }
    }

    return (
      <div id='ContactForm' className={styles.ContactForm}>
        <div className={styles.contactForm_description}>
          <p>Because Trust Matters!</p>
          <p>
            As a young organisation, our steps are cautious. Experienced
            professionals thoroughly guide handholding for every action taken.
            It has been a wonderful and blessed journey for Avenue Corp so far.
            We would like to bestow our sincere gratitude and fervent regards to
            our partners who trusted in us because, like you, we also value our
            customers’ trust!
          </p>
        </div>
        <div className={styles.contactForm_form}>
          <p>Get in touch</p>
          <form onSubmit={submitForm}>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='floatingInputName'
                placeholder='Name'
                onKeyDown={onlyCharacters}
                required
                name='name'
              />
              <label htmlFor='floatingInputName'>Name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='floatingInputEmail'
                placeholder='name@example.com'
                onChange={(e) => validateEmail(e.target)}
                name='email'
              />
              <label htmlFor='floatingInputEmail'>Email address</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='tel'
                className='form-control'
                id='floatingInputMobile'
                placeholder='e.g. 839078716'
                maxLength={10}
                required
                name='mobile'
                onKeyDown={onlyDigits}
              />
              <label htmlFor='floatingInputMobile'>Mobile Number</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='floatingInputCompanyName'
                placeholder='e.g. Avenue Corporation'
                maxLength={100}
                name='companyname'
              />
              <label htmlFor='floatingInputMobile'>Company Name</label>
            </div>
            <div className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Leave a message here'
                id='floatingTextarea2'
                style={{ minHeight: '8em' }}
                required
                name='msg'
              ></textarea>
              <label htmlFor='floatingTextarea2'>Message</label>
            </div>
            <div className={styles.button}>
              <button type='submit'>Get a callback</button>
            </div>
          </form>
        </div>
      </div>
    );
  },
  FooterLinks: ({}) => {
    const navContext = useContext(NavigationContext);
    const socialLinks = navContext.socialLinks;

    return (
      <div className={styles.FooterLinks}>
        <div className={styles.FooterLinks__cell}>
          <Image
            src='/pixels/logo/blue-bg.png'
            alt='Avenue Corporation Logo'
            layout='responsive'
            width={80}
            height={40}
          />
        </div>
        <div id='address' className={styles.FooterLinks__cell}>
          <label>Head Office</label>
          <a href='#address'>
            <p>Avenue Corporation</p>
            Gate no 984/3, M/S Shirke-Bricks Industries Compound, Next to Span
            Pump, Sanaswadi, Tq. Shirur, Dist. Pune - 412208.
          </a>
        </div>
        <div id='contact' className={styles.FooterLinks__cell}>
          <label>Contact Us</label>
          <span className={styles.FooterLinks__contactus}>
            <a href='mailto:marketing@avenuecorporation.in'>
              marketing@avenuecorporation.in
            </a>
            <br />
            <a href='mailto:sales@avenuecorporation.in'>
              sales@avenuecorporation.in
            </a>
            <br />
            <a href='mailto:salesavenuecorporation@gmail.com'>
              salesavenuecorporation@gmail.com
            </a>
            <br />
            <a href='tel:9730272570'>+91 9730272570</a>
            <br />
            <a href='tel:8380840125'>+91 8380840125</a>
          </span>
          <span className={styles.socials}>
            <Link href={socialLinks['linkedin'] || ''}>
              <span>
                <FontAwesomeIcon icon={faLinkedin} listItem />
              </span>
            </Link>
            <Link href={socialLinks['instagram'] || ''}>
              <span>
                <FontAwesomeIcon icon={faInstagram} listItem />
              </span>
            </Link>
            <Link href={socialLinks['twitter'] || ''}>
              <span>
                <FontAwesomeIcon icon={faTwitter} listItem />
              </span>
            </Link>
            <Link target={'_blank'} href={socialLinks['youtube'] || ''}>
              <span>
                <FontAwesomeIcon icon={faYoutube} listItem />
              </span>
            </Link>
            <Link href={socialLinks['whatsapp'] || ''}>
              <span>
                <FontAwesomeIcon icon={faWhatsapp} listItem />
              </span>
            </Link>
            <Link href={socialLinks['facebook'] || ''}>
              <span>
                <FontAwesomeIcon icon={faFacebook} listItem />
              </span>
            </Link>
          </span>
        </div>
        <div className={styles.FooterLinks__cell}>
          <label>Quick Links</label>
          <ul>
            <li>
              <Link href={'/about'}>About Us</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact Us</Link>
            </li>
            <li>
              <Link href={'/about'}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={'/about'}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  },
};

export default Sections;
