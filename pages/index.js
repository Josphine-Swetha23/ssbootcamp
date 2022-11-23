import React, { useState } from 'react'
import Card from '../components/card/Card'
import NavBar from '../components/navbar/NavBar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Footer from '../components/footer/footer'
import Link from 'next/link';
import ModalCompTerms from '../components/modal/Modal'
import ModalCompRefund from '../components/modal/ModalRefund'


import "swiper/css";
import "swiper/css/pagination";
import styles from '../styles/index.module.css'

const HomePage = () => {

  const [email, setEmail] = useState("Email Address")
  const handleClick = (e) => {
    if (e.target.value == "Email Address") {
      setEmail("")
    }

  }

  return (
    <div className={styles.container} >
      <NavBar />

      <div className={styles.wrapper1}>
        <div className={styles.wrapper1l}><div className={styles.guaranteetext}>100% GROWTH GUARANTEE</div>
          <div className={styles.herotitle}>Notch up your
            career level 🎓</div>
          <div className={styles.herotag}>Learn the skills from the tech gurus<br />
            But learning it from the core, first hand, makes you one!</div>

          <div className={styles.herobutton}> <Link href="/enroll" >Join for free</Link> </div>



        </div>
        <img className={styles.heroimg} src="heroimg.svg" alt="heroimage" />
      </div>

      <div className={styles.wrapper2}>
        <div className={styles.wrappertxt}>
          <div className={styles.wrappertxt1}>
            WHAT WE OFFER
          </div>
          <div className={styles.wrappertxt2}>Programs Offered</div>
        </div>
        <div className={styles.wrapper2cards}>
          <div className={styles.wrapper2card}>
            <img className={styles.cardlogo} src="reactlogo.svg" alt="reactlogo " />
            <div className={styles.carddetails}>
              <div className={styles.cardwrapper}>
                <div className={styles.cardtitle}>React</div>
                <div className={styles.cardpill}>8 WEEKS</div>
              </div>
              <div className={styles.carddetail}>Dolorem eos molestias deserunt. Fuga saepe similique aut officiis consequatur dict</div>
              <div className={styles.carddatetime}>
                <img src="calendar.svg" alt="calendar" />
                <div className={styles.carddate} >5th Nov 2022 - 10 am to 1 pm</div>
              </div>
              <div className={styles.cardtag}>NEXT BATCH STARTS IN 3 WEEKS</div>
              <div className={styles.cardwrapper}>
                <div className={styles.button1}>  <Link href="/enroll" >Enroll Now</Link> </div>
                <div className={styles.cardexplore}>
                  <div className={styles.button2}>Explore Course</div>
                  <img src="rightarrow.svg" alt="rightarrow" />
                </div>

              </div>
            </div>

          </div>
          <div className={styles.wrapper2card}>
            <img className={styles.cardlogo} src="azurelogo.svg" alt="" />
            <div className={styles.carddetails}>
              <div className={styles.cardwrapper}>
                <div className={styles.cardtitle}>Azure</div>
                <div className={styles.cardpill}>8 WEEKS</div>
              </div>
              <div className={styles.carddetail}>Dolorem eos molestias deserunt. Fuga saepe similique aut officiis consequatur dict</div>
              <div className={styles.carddatetime}>
                <img src="calendar.svg" alt="calendar" />
                <div className={styles.carddate} >5th Nov 2022 - 10 am to 1 pm</div>
              </div>
              <div className={styles.cardtag}>NEXT BATCH STARTS IN 3 WEEKS</div>
              <div className={styles.cardwrapper}>
                <div className={styles.button1}>  <Link href="/enroll" >Enroll Now  </Link>  </div>
                <div className={styles.cardexplore}>
                  <div className={styles.button2}>  <Link href="/azurebootcamp" > Explore Course</Link></div>
                  <img src="rightarrow.svg" alt="rightarrow" />
                </div>

              </div>
            </div>

          </div>


        </div>

      </div>
      <div className={styles.wrapper3}>
        <div className={styles.wrappertxt}>
          <div className={styles.wrappertxt1}>WHY CHOOSE US</div>
          <div className={styles.wrappertxt3}>Benefits of the Service</div>
          <div className={styles.benefitswrappers}>
            <div className={styles.benefitswrapper}>
              <div className={styles.biconwrapper}>
                <img src="icon1.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Attend First Session for Free</div>
                  <div className={styles.bicontxt2}>First, serve with all the liberty</div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon2.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>In-Person / Live Class</div>
                  <div className={styles.bicontxt2}>Meet and connect in real-time as well as virtually.</div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon3.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Personal Tutors</div>
                  <div className={styles.bicontxt2}>Exclusive tutors  </div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon4.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Join the Community to interact</div>
                  <div className={styles.bicontxt2}>Connect and engage with geeks
                  </div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon5.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Separate Doubts Clearing Sessions</div>
                  <div className={styles.bicontxt2}>A private crystal clear session for doubts</div>

                </div>
              </div>
            </div>
            <div className={styles.benefitswrapper}>
              <div className={styles.biconwrapper}>
                <img src="icon6.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Regular Assessments and Quizzes</div>
                  <div className={styles.bicontxt2}>Periodic evaluations and analyses </div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon7.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Regular Assessments and Quizzes</div>
                  <div className={styles.bicontxt2}>Experience a real-time work culture</div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon8.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Boot Camp Completion Certificate</div>
                  <div className={styles.bicontxt2}>Obtain certification for your geekiness</div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon9.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Soft Skills and Interview Assistance</div>
                  <div className={styles.bicontxt2}>Thrive and amass whatever you need</div>

                </div>
              </div>
              <div className={styles.biconwrapper}>
                <img src="icon10.svg" alt="" />
                <div className={styles.bicontxt}>
                  <div className={styles.bicontxt1}>Job Assistance</div>
                  <div className={styles.bicontxt2}>Join the squad for your optimal position</div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className={styles.wrapper4}>
        <div className={styles.wrappertxt}>
          <div className={styles.wrappertxt1}>HOW WE DO IT</div>
          <div className={styles.wrappertxt3}>Step by Step Process</div>

          <div className={styles.numwrappers1}>

            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>1</div>

              </div>
              <div className={styles.numtxt}>Sign-up and get validated to join</div>
            </div>
            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>2</div>

              </div>
              <div className={styles.numtxt}>Attend the interactive sessions</div>
            </div>
            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>3</div>

              </div>
              <div className={styles.numtxt}>Do Assignments</div>
            </div>
            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>4</div>

              </div>
              <div className={styles.numtxt}>Connect with your fellow batchmates.</div>
            </div>
          </div>
          <div className={styles.numwrappers1}>

            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>5</div>

              </div>
              <div className={styles.numtxt}>Get your Skills tested in regular Quizzes</div>
            </div>
            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>6</div>

              </div>
              <div className={styles.numtxt}>Attend the interactive sessions</div>
            </div>
            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>7</div>

              </div>
              <div className={styles.numtxt}>Do Assignments</div>
            </div>
            <div className={styles.numwrapper}>
              <div className={styles.numrect}>
                <div className={styles.num}>8</div>

              </div>
              <div className={styles.numtxt}>Connect with your fellow batchmates.</div>
            </div>
          </div>


        </div>

      </div>
      <div className={styles.wrapper2}>
        <div className={styles.wrappertxt}>
          <div className={styles.wrappertxt1}>Meet Our Tutor</div>
          <div className={styles.wrappertxt2}>Tutor</div>
          <div className={styles.tutorcards}>
            <div className={styles.tutorcard}>
              <div className={styles.tutorcircle}>
                <img className={styles.tutorimg} src="image1.jpg" alt="" />
              </div>
              <div className={styles.tutorname}>Clifford Weimann</div>
              <div className={styles.tutordesc}>Dolorem eos molestias deserunt. Fuga saepe similique aut officiis consequatur dict</div>
              <div className={styles.tutorcourse}>
                <img className={styles.logotutor} src="reactlogo.svg" alt="" />
                React</div>
              <div className={styles.viewtutor}>View Profile
                <img src="rightarrow.svg" alt="" />
              </div>

            </div>
            <div className={styles.tutorcard}>
              <div className={styles.tutorcircle}>
                <img className={styles.tutorimg} src="image1.jpg" alt="" />
              </div>
              <div className={styles.tutorname}>Clifford Weimann</div>
              <div className={styles.tutordesc}>Dolorem eos molestias deserunt. Fuga saepe similique aut officiis consequatur dict</div>
              <div className={styles.tutorcourse}>
                <img className={styles.alogotutor} src="azurelogo2.svg" alt="" />
                Azure</div>
              <div className={styles.viewtutor}>View Profile
                <img src="rightarrow.svg" alt="" />
              </div>

            </div>

          </div>


        </div>
      </div>
      <div className={styles.wrapper5}>
        <div className={styles.wrappertxt}>
          <div className={styles.wrappertxt1}>Test yourself</div>
          <div className={styles.wrappertxt3}>Skill Assessment</div>
        </div>
        <div className={styles.skilltxt}>Check your skill level.  Answer 15 multiple choice questions.
          <br /> Get instant results with correct answers
        </div>
        <div className={styles.skillbutton}>Take a Free Assessment</div>
      </div>
      <img className={styles.todo} src="todolistimg.svg" alt="" />
      <div className={styles.wrapper4}>
        <div className={styles.wrappertxt}>
          <div className={styles.wrappertxt1}>OUR TESTIMONIAL</div>
          <div className={styles.wrappertxt3}>Pay heed to our Alumni</div>
        </div>
        <div className={styles.testimonialcards}>



          <Swiper
            spaceBetween={50}
            slidesPerView={3}

            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            ...
          </Swiper>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiper2}
          >
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            ...
          </Swiper>


        </div>
      </div>
      <Footer />
    </div >
  )
}

export default HomePage






