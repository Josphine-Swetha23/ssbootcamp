import React from 'react';

import Modal from 'react-modal';
import styles from './modal.module.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
    },
};



function ModalCompTerms() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className={styles.cursor} onClick={openModal}>Terms & Condition</div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className={styles.container}>

                    <div className={styles.x} onClick={closeModal}><img src="x.svg" alt="" /></div>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>Terms & Condition</div>
                        <div className={styles.subtitle}>The following terms and conditions are subject to change at any time. This page will
                            always display the most recent alterations or modifications.

                        </div>
                        <div className={styles.subtitle}>Conditions for Eligibility</div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>You must be at least 18 years old.
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>For any tech course, you must already have or be working toward a bachelor's
                            degree from an accredited college
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>During your initial interactions with our team, it will be established whether you are
                            fluent in both spoken and written English.
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>After the program's graduation date, you must be able to work legally in the USA for
                            at least a year.
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>When applying for jobs, you must be able to pass any background checks that are
                            involved.
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>There shouldn't be any cases filed or pending against you in any courts, police
                            departments, or other civic or governmental organisations in India or any other
                            overseas jurisdiction
                        </div>
                        </div>

                        <div className={styles.subtitle}>The requirements for certification</div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}> Maintain a live class attendance rate of at least 85% for achieving Certification
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>Within 7 days of the program's conclusion, turn in all of your capstone and
                            course-related projects
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>Complete all required case studies, projects, and assignments by the deadlines
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>Successfully complete all of the program's courses and modules.
                        </div>
                        </div>

                    </div>
                </div>



            </Modal>
        </div>
    );
}

export default ModalCompTerms