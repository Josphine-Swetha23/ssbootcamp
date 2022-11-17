import React from 'react';

import Modal from 'react-modal';
import styles from "./modal.module.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-45%',
        transform: 'translate(-50%, -50%)',
        boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
    },
};



function ModalCompRefund() {
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
            <div className={styles.cursor} onClick={openModal}>Refund Policy</div>
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
                        <div className={styles.title}>Terms & Use</div>
                        <div className={styles.subtitle}>We appreciate you being interested in SightSpectrum. All of our users will receive a interactive learning experience from us. The Refund Policy is subject to certain rules and conditions, just like any
                            other online transaction. You accept our Terms & Conditions and return policy when you buy a
                            programme on SightSpectrum.

                        </div>
                        <div className={styles.subtitle}>Here is our refund policy:</div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>There won't be any alterations or revisions made to your order once you've paid the required or
                            partial amount, and neither will there be a refund.

                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>SightSpectrum retains the right to reschedule or cancel the course, alter its format, or substitute
                            presenters. If SightSpectrum cancels the entire course, we'll give the subscriber a full refund of the
                            course fees.

                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>In the event that the programme is prolonged after it has started, we will not initiate a refund
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>If the start date of the course is changed, we will not give a refund
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>Individuals who don't show up for the course won't get a refund or a credit
                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>If the course's structure or content is changed, there won't be any returns.
                        </div>
                        </div>



                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>The terms and conditions of this policy are subject to change by SightSpectrum without previous

                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>The course cannot be transferred.

                        </div>
                        </div>
                        <div className={styles.bulletpoints} > <img src="bullet.svg" alt="" /> <div className={styles.subtitle}>If for some reason you are unable to take the course, it cannot be transferred to another individual.

                        </div>
                        </div>



                    </div>
                </div>


            </Modal>
        </div>

    );
}

export default ModalCompRefund