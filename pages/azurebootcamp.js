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
            <div className={styles.wrapper2}>
                <div className={styles.title}>Introduction to Azure DevOps</div>
                <div className={styles.wrapper5}>

                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Continuous Integration</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Building Containers with Azure DevOps</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Find and Fix Open Source Vulnerabilities</div>
                        </div>
                    </div>
                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Release Management Workflow</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Deployment Models and Services</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Continuous deployment</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.wrapper2}>
                <div className={styles.title}>Implementing Compliance and Security</div>
                <div className={styles.subtxt}>Manage and check the code quality with Sonar Cloud on Azure DevOps. Also, integrate Azure Key Vault with Azure DevOps to access secrets in Azure Pipeline.
                </div>
                <div className={styles.wrapper6}>
                    <div className={styles.wrapper3}>
                        <div className={styles.title2}>Topics</div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Secure and Compliant Development Process & Application Config Data</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Security and Compliance in a Pipeline Code Quality</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Security Policies</div>
                        </div>
                    </div>
                    <div className={styles.wrapper3}>
                        <div className={styles.title2}>Tasks</div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Manage Technical Debt with Azure DevOps and Sonar Cloud</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Integrate Azure Key Vault with Azure DevOps</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Implement Security and Compliance in an Azure DevOps pipelines</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper2}>
                <div className={styles.title}>Project Management and Real Time examples
                </div>

                <div className={styles.wrapper7}>
                    <div className={styles.wrapper3}>
                        <div className={styles.title2}>Pre-Requisites</div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Azure subscription</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Memory – Minimum 8 GB RAM</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Processor – Intel Core i3 CPU @2.00 GHz or later Storage – 250 GB HDD/SDD or later</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Visual studio code</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>PowerShell 5.0</div>
                        </div>
                    </div>
                    <div className={styles.wrapper8}>
                        <div className={styles.title2}>Practical Sessions</div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>Post completion of session every day, we will give one real time example to perform the tasks from the audience</div>
                        </div>
                        <div className={styles.ticktxt}>
                            <img src="tickstroke.svg" alt="" />
                            <div className={styles.subtxt}>After completion of course we will provide real time artifacts and architecture diagrams for future reference in terms of terraform and devops pipelines and containers etc..</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.wrapper2}>
                <div className={styles.title}>Frequently Asked Questions</div>
                <div className={styles.wrapper5}>

                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Continuous Integration</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Building Containers with Azure DevOps</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Find and Fix Open Source Vulnerabilities</div>
                        </div>
                    </div>
                    <div className={styles.accordians}>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Release Management Workflow</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Deployment Models and Services</div>
                        </div>
                        <div className={styles.miniwrapper3}>
                            <img src="plus.svg" alt="" />  <div className={styles.accordian}>Implementing Continuous deployment</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.wrapper9}>
                <div className={styles.enrollbutton}>Enroll Now</div>
            </div>

            <div className={styles.footercontainer}>
                <div className={styles.footerwrappers}>
                    <div className={styles.footerwrapper}>
                        <div className={styles.footerlinks}>
                            <a className={styles.footerlink} href="">Home</a>
                            <a className={styles.footerlink} href="">Services</a>
                            <a className={styles.footerlink} href="">Solutions</a>
                        </div>
                        <div className={styles.footerlinks}>
                            <a className={styles.footerlink} href="">Industries</a>
                            <a className={styles.footerlink} href="">Who We Are</a>
                            <a className={styles.footerlink} href="">Get in Touch</a>
                        </div>

                    </div>
                    <div className={styles.footerdivider} />
                    <div className={styles.footerwrapper}>
                        <div className={styles.footerlinks}>
                            <a className={styles.footerlink} href="">Refund Policy</a>
                            <a className={styles.footerlink} href="">Terms & Conditions</a>
                            <a className={styles.footerlink} href="">Privacy Policy</a>
                            <a className={styles.footerlink} href="">Disclaimer</a>
                        </div>
                        <div className={styles.footerlinks}>
                            <a className={styles.footerlink} href="">Accessibilty</a>
                            <a className={styles.footerlink} href="">Copyright Policy</a>
                            <a className={styles.footerlink} href="">Customer Charter</a>
                        </div>

                    </div>
                    <div className={styles.footerdivider} />
                    <div className={styles.footertxt}>
                        <div className={styles.footertxt1}>Stay Updated!
                        </div>
                        <div className={styles.footertxt2}>Get updates on new programs, tips and snippets on
                            the technology right in your inbox.
                        </div>

                    </div>
                </div>
                <div className={styles.inputgroup}>
                    <input type="email" className={styles.emailinput} value="email address" id="Email" name="Email" autocomplete="off" />
                    <div className={styles.buttonsubmit}  >
                        <img src="tick.svg" alt="tick" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AzureBootcamp