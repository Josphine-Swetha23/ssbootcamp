import React from "react";
import Footer from "../components/footer/footer";
import Link from "next/link";
import NavBar from "../components/navbar/NavBar";
import styles from "../styles/becomeamentor.module.css";

const Becomeamentor = () => {
  return (
    <>
      <div>
        <div className={styles.container}>
          <NavBar />
          <div className={styles.wrapper1}>
            <div className={styles.miniwrapper1}>
              <div className={styles.logo}>Build Your Dream</div>
              <div className={styles.heading}>
                Immediate hiring of candidates at scale in niche skills Flexible
                jobs Contract or Full Time Save time and effort on Vetting the
                Candidate Onboarding support of Candidates Minimize recruiting
                and hiring burnout Microsoft Azure, often referred to as Azure,
                is a cloud computing platform operated by Microsoft for
                application management via Microsoft-managed data centers.{" "}
              </div>
            </div>
            <img className={styles.heroimg} src="Group.svg" alt="" />
          </div>
          <div className={styles.flexcenter}>
            <div className={styles.enrollbutton}>
              {" "}
              <Link href="/hireTalent">Hire Talent Now</Link>{" "}
            </div>
          </div>

          <div className={`${styles.wrapper2} ${styles.backgroundwhite}`}>
            <div className={styles.twodivs}>
              <div className={styles.miniwrapper2}>
                <div className={styles.logo1}>
                  The Race to Hire the <br /> Best Candidate
                </div>
              </div>
              <div className={styles.heading1}>
                {" "}
                This course will help you to implement CI and CD pipelines and
                infrastructure automation along with great networking and
                security automation and to clear Azure DevOps Engineer Expert
                Certification. After this course audience can step out with
                real-time implementation and automating infrastructure and
                configuring network along with IAAS and PAAS and strategies for
                collaboration, source code management, security, compliance,
                continuous integration, delivery, and monitoring.{" "}
              </div>
            </div>
          </div>
          <div className={styles.iconwrappers}>
            <div className={styles.iconwrapper}>
              <dixv className={styles.icontitle}>High Calibre Talents</dixv>
              <div className={styles.iconsub}>
                Trained by professionals in the field and exposed to active
                projects
              </div>
            </div>
            <div className={styles.iconwrapper}>
              <div className={styles.icontitle}>Save Hiring cost</div>
              <div className={styles.iconsub}>
                Compared to other conventional hiring costs, you will save a
                huge amount.
              </div>
            </div>
            <div className={styles.iconwrapper}>
              <div className={styles.icontitle}>Ready to Join</div>
              <div className={styles.iconsub}>
                1We save your Search Time by providing industry-ready software
                developers
              </div>
            </div>
          </div>
          <div className={styles.wrapper2}>
            <div className={styles.miniwrapper1}>
              <div className={styles.logo}>Build Your Dream</div>
            </div>
            <div className={styles.wrapper21}>
              <div className={styles.wrappertxt}>
                <div className={styles.tutorcards}>
                  <div>
                    <div className={styles.icontitle1}> 1. Sourcing </div>
                    <div className={styles.tutorcard}>
                      <div className={styles.tutordesc}>
                        Exclusively hiring engineering graduates Among each
                        group of 20 candidates, one is hand-selected and
                        screened A customized training schedule is designed for
                        the candidates.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.icontitle1}> 2. Training </div>
                    <div className={styles.tutorcard}>
                      <div className={styles.tutordesc}>
                        300+ hours of training in several technologies 10+ Years
                        Industry Experienced Trainer Tasks from real-time
                        projects are given to candidates
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.icontitle1}> 3. Grooming </div>
                    <div className={styles.tutorcard}>
                      <div className={styles.tutordesc}>
                        Assessments and mini-projects are offered to ensure
                        trainee deployability Advanced Training sessions
                        Performance Management
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.icontitle1}> 4. Finishing </div>
                    <div className={styles.tutorcard}>
                      <div className={styles.tutordesc}>
                        Soft skill Training Mock-ups Interviews
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.icontitle1}> 5. Deployment </div>
                    <div className={styles.tutorcard}>
                      <div className={styles.tutordesc}>
                        Ongoing project support following deployment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.head}>
              Several companies that have employed our Candidates
            </div>
            <div className={styles.flexcenter2}>
              <div className={styles.instructorcard}>
                <div className={styles.imgcontainer}></div>
                <div className={styles.icardname}>Mentor Name</div>
                <div className={styles.icarddesc}>
                  Lorem ipsum dolor sit amet,
                </div>
              </div>
              <div className={styles.instructorcard}>
                <div className={styles.imgcontainer}></div>
                <div className={styles.icardname}>Mentor Name</div>
                <div className={styles.icarddesc}>
                  Lorem ipsum dolor sit amet,
                </div>
              </div>
              <div className={styles.instructorcard}>
                <div className={styles.imgcontainer}></div>
                <div className={styles.icardname}>Mentor Name</div>
                <div className={styles.icarddesc}>
                  Lorem ipsum dolor sit amet,
                </div>
              </div>
            </div>
            <div className={styles.flexcenter1}>
              <div className={styles.enrollbutton}>
                {" "}
                <Link href="/hireTalent">Hire Talent Now</Link>{" "}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Becomeamentor;
