import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../../styles/azurebootcamp.module.css";
import Link from "next/link";

const customStyles = {
  content: {
    height: "635px",
    width: "1400px",
    display: "flex",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
    marginLeft: "-60px",
    marginTop: "-60px",
  },
};

function ModalCompTerms() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [accordian, setAccordian] = useState(0);

  const handleClickA = (num) => {
    if (accordian == num) {
      setAccordian(0);
    } else {
      setAccordian(num);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={styles.cursor} onClick={openModal}>
        FAQ
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.container1}>
          <div className={styles.wrapper2}>
            <div className={styles.x} onClick={closeModal}>
              <img src="x.svg" alt="" />
            </div>
            <div className={styles.title}>Frequently Asked Questions</div>
            <div className={styles.wrapper5}>
              <div className={styles.accordians}>
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(19);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      How much time will it take to finish the course?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "19"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        The courses take 2 months to complete.
                      </div>
                    </div>
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        The courses has no set start or end date.
                      </div>
                    </div>
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        It will be flexible in accordance with the student's
                        comfort.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(20);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      How much should I pay for the Course?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "20"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        The Certificate Course costs $499 plus taxes.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(21);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      If I come from a non-technical background, am I still
                      allowed to take this course?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "21"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        You can definitely apply for our classes, yes.
                      </div>
                    </div>
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        You will receive in-depth technical training so that you
                        can pursue a profession in one of the technical fields.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(22);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      What are the requirements to enrol in the course?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "22"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        To be eligible to enrol in the course, you must have a
                        bachelor's degree with a minimum grade point average of
                        50%.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(23);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      Is there a registration fee to enrol in the course?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "23"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        For admission to the course, you must pay a fee of $99
                        in advance.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              <div className={styles.accordians}>
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(24);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      Is it possible to apply for the course if you graduated a
                      few years ago and don't have a job for this year?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "24"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        Absolutely, yes!
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(25);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      Can I apply to Newton School if I'm not from US?{" "}
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "25"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        Yes, individuals from other nations are also eligible to
                        apply for the course.
                      </div>
                    </div>
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        To apply for the same, all you need is sufficient
                        identification documentation.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(26);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      Can my employer help with tuition payments?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "26"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        Yes, employers can help with tuition payments
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(27);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      Will I be given a certificate once the course is over?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "27"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        A Certificate of Completion for your study will be given
                        to you by SightSpectrum Academy
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={styles.accordianwrapper}>
                  <div className={styles.miniwrapper3}>
                    <img
                      onClick={(e) => {
                        handleClickA(28);
                      }}
                      src="plus.svg"
                      alt=""
                    />{" "}
                    <div className={styles.accordian}>
                      If we have any additional questions, who can we speak to?
                    </div>
                  </div>
                  <div
                    className={
                      accordian == "28"
                        ? styles.showaccordian
                        : styles.accordiancontentwrapper
                    }
                  >
                    <div className={styles.miniwrapper33}>
                      <img src="bullet.svg" alt="" />{" "}
                      <div className={styles.accordiancontent}>
                        For any additional inquiries, please reach us at
                        hi@sightspectrum.com.
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCompTerms;
