import React, { useState } from "react";
import Footer from "../components/footer/footer";
import { useRouter } from "next/router";
import NavBar from "../components/navbar/NavBar";
import styles from "../styles/hireTalent.module.css";
import { collection, addDoc } from "firebase/firestore";
import { app, db } from "../firebase/clientApp";

const Becomeamentor = () => {
  const router = useRouter();

  const [enrollData, setEnrollData] = useState({
    name: "",
    jobtitle: "",
    email: "",
    comapnyname: "",
    mobilenumber: "",
    howdidufindus: "",
    permission: false,
  });

  const addenrollDocument = async (enroll_data) => {
    await addDoc(collection(db, "enroll_data"), {
      enroll_data,
    });
  };
  const handleChange = (e, data) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    setEnrollData({ ...enrollData, [data]: message });
  };
  const handleClick = () => {
    const mailformat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (enrollData.name.length == 0) {
      alert("Please fill in the appropriate fields");
    } else if (enrollData.jobtitle.length == 0) {
      alert("Please fill in the appropriate fields");
    } else if (enrollData.email.length == 0) {
      alert("Please fill in the appropriate fields");
    } else if (enrollData.comapnyname.length == 0) {
      alert("Please fill in the appropriate fields");
    } else if (enrollData.mobilenumber.length == 0) {
      alert("Please fill in the appropriate fields");
    } else if (enrollData.howdidufindus.length == 0) {
      alert("Please fill in the appropriate fields");
    } else if (enrollData.email.match(mailformat)) {
      addenrollDocument(enrollData);
      router.push("/");
      alert("Successfully Submitted");
    } else {
      alert("Please enter valid email");
    }
  };
  const handleClickCheck = () => {
    setEnrollData((prev) => {
      return { ...enrollData, permission: !prev.permission };
    });
  };
  return (
    <>
      <div>
        <div className={styles.container}>
          <NavBar />

          <div className={styles.wrapper2}>
            <div className={styles.miniwrapper1}></div>
            <div className={styles.flexcenter2}>
              <div className={styles.instructorcard}>
                <div className={styles.logo}>
                  Become one of the many of companies that hire SightSpectrum
                  Talent.
                </div>
                <div className={styles.new}>
                  <div className={styles.icarddesc}>
                    1. Immediate hiring of candidates at scale in niche skills
                  </div>
                  <div className={styles.icarddesc}>
                    2. Flexible jobs Contract or Full Time
                  </div>
                  <div className={styles.icarddesc}>
                    3. Save time and effort on Vetting the Candidate
                  </div>
                  <div className={styles.icarddesc}>
                    4. Onboarding support of Candidates
                  </div>
                  <div className={styles.icarddesc}>
                    5. Minimize recruiting and hiring burnout
                  </div>
                  <div className={styles.icarddesc2}>
                    Please get in touch and our expert team will answer all your
                    questions.{" "}
                  </div>
                  <div className={styles.icarddesc2}>
                    Write an email to hi@sightspectrum.com
                  </div>
                </div>
              </div>

              <div className={styles.instructorcard}>
                <div className={styles.wrapper}>
                  <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                      <div className={styles.label}>Name*</div>
                      <input
                        onChange={(e) => {
                          handleChange(e, "name");
                        }}
                        value={enrollData.name}
                        maxLength={40}
                        className={styles.input1}
                        type="text"
                      />
                      <div className={styles.label}>Email*</div>
                      <input
                        onChange={(e) => {
                          handleChange(e, "email");
                        }}
                        value={enrollData.email}
                        maxLength={40}
                        className={styles.input1}
                        type="email"
                      />
                      <div className={styles.label}>Mobile Number*</div>
                      <input
                        onChange={(e) => {
                          handleChange(e, "mobilenumber");
                        }}
                        value={enrollData.mobilenumber}
                        maxLength={10}
                        className={styles.input1}
                        type="number"
                      />
                      <div className={styles.label}>Company Name*</div>
                      <input
                        onChange={(e) => {
                          handleChange(e, "comapnyname");
                        }}
                        value={enrollData.comapnyname}
                        maxLength={40}
                        className={styles.input1}
                        type="text"
                      />
                      <div className={styles.label}>Job Title*</div>
                      <input
                        onChange={(e) => {
                          handleChange(e, "jobtitle");
                        }}
                        value={enrollData.jobtitle}
                        maxLength={40}
                        className={styles.input1}
                        type="text"
                      />
                      <div className={styles.label}>How Did You Find Us?</div>
                      <select
                        onChange={(e) => {
                          handleChange(e, "howdidufindus");
                        }}
                        className={styles.input1}
                        id="howdidufindus"
                        name="howdidufindus"
                      >
                        <option
                          value=""
                          selected="selected"
                          disabled="disabled"
                        >
                          -- select one --
                        </option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Forums like reddit,quora">
                          Forums like reddit,quora
                        </option>

                        <option value="Recommendation from Friends or Family">
                          Recommendation from Friends or Family
                        </option>
                        <option value="Recommendation from Work, Co-Workers">
                          Recommendation from Work, Co-Workers
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.flex}>
                    <input onClick={handleClickCheck} type="checkbox" />
                    <div className={styles.checkboxtxt}>
                      I permit SightSpectrum and its team to contact me with
                      updates and notifications via Email, SMS, Whatsapp, and
                      Call.
                    </div>
                  </div>

                  <button
                    disabled={enrollData.permission == false}
                    onClick={handleClick}
                    className={styles.button}
                  >
                    Submit
                  </button>
                </div>
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
