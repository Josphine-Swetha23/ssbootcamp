import React from 'react'

import NavBar from '../components/navbar/NavBar'

import styles from '../styles/azurebootcamp.module.css'

const AzureBootcamp = () => {
    return (
        <div className={styles.container} >
            <NavBar />

            <div className={styles.wrapper1}>
                <div className={styles.miniwrapper1}>
                    <div className={styles.logo}>
                        <img src="azurelogowithname.svg" alt="azurelogo" />
                    </div>
                    <div className={styles.heading}>
                        Learn MS Azure and crack your next high paying job in 8 weeks
                    </div>
                    <div className={styles.tag}>Et vel accusamus nam et corrupti numquam. Architecto amet est. Delectus explicabo sint et blanditiis voluptas ratione nesciunt eum. Aut culpa dolore. Iusto eos sit quia. Voluptatem dolores sed pariatur laborum pariatur voluptates magnam placeat rerum.</div>
                    <div className={styles.iconwrappers}>
                        <div className={styles.iconwrapper}>
                            <img src="azurepageicon1.svg" alt="" />
                            <div className={styles.icontitle}>8 Weeks</div>
                            <div className={styles.iconsub}>3hrs Daily</div>
                        </div>
                        <div className={styles.iconwrapper}>
                            <img src="azurepageicon2.svg" alt="" />
                            <div className={styles.icontitle}>5th Nov</div>
                            <div className={styles.iconsub}>in next 5 Days</div>
                        </div>
                        <div className={styles.iconwrapper}>
                            <img src="azurepageicon3.svg" alt="" />
                            <div className={styles.icontitle}>8:00am-11:00am</div>
                            <div className={styles.iconsub}>Mon - Fri</div>
                        </div>
                        <div className={styles.iconwrapper}>
                            <img src="azurepageicon4.svg" alt="" />
                            <div className={styles.icontitle}>Live Classes</div>
                            <div className={styles.iconsub}>100%</div>
                        </div>
                    </div>
                    <div className={styles.enrollbutton}>Enroll Now</div>
                </div>
                <div className={styles.instructorcard}>
                    <div className={styles.icardtitle}>instructor</div>
                    <div className={styles.imgcontainer}></div>
                    <div className={styles.icardname}>Fernando Miller</div>
                    <div className={styles.icarddesc}>Dolorem eos molestias deserunt. Fuga saepe similique aut officiis consequatur dict</div>
                    <div className={styles.icardbuttontitle}>View Profile</div>
                    <img className={styles.icardbutton} src="rightarrowwhite.svg" alt="" />
                </div>
            </div>
            <div className={`${styles.wrapper2} ${styles.backgroundwhite}`}>
                <div className={styles.title}>About the Course</div>
                <div className={styles.twodivs}>

                    <div className={styles.miniwrapper2}>
                        <div className={styles.coursedesc}>Microsoft Azure & Azure DevOps Solutions Course is organized systematically by industry
                            leaders and professionals as per the industry requirements and demands. The course gives you a solid foundation to appear for the Microsoft Certified. <br /> <br /> This course will help you to implement CI and CD pipelines and infrastructure automation along with great networking and security automation and to clear Azure DevOps Engineer Expert Certification. After this course audience can step out with real-time implementation and automating infrastructure and configuring network along with IAAS and PAAS and strategies for collaboration, source code management, security, compliance, continuous
                            integration, delivery, and monitoring.  </div>

                    </div>
                    <div className={styles.wrapper3}>
                        <div className={styles.title2}>Why Should you Join?</div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Career growth is all about refining oneself, and it never expires</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>2 months intensive program on Azure</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Invest Your Time, And Notch Your life and Career to another level</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={styles.wrapper2}>
                <div className={styles.title}>Course Curriculum</div>
                <div className={styles.wrapper4}>

                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Continuous Integration</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure storage</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure PaaS services</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Version Control System</div>
                        </div>

                    </div>

                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure subscriptions and Resources</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure Networking</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure Key Vault</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Containerization
                            </div>
                        </div>

                    </div>

                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure virtual machines</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>High availability Services</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Infrastructure as coden</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Azure Kubernetes Service</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AzureBootcamp