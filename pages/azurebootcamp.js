import React, { useState } from "react";
import Footer from "../components/footer/footer";
import Link from "next/link";
import NavBar from "../components/navbar/NavBar";
import styles from "../styles/azurebootcamp.module.css";

const AzureBootcamp = () => {
  const [accordian, setAccordian] = useState(0);
  const [email, setEmail] = useState("Email Address");
  const handleClick = (e) => {
    if (e.target.value == "Email Address") {
      setEmail("");
    }
  };

  const handleClickA = (num) => {
    if (accordian == num) {
      setAccordian(0);
    } else {
      setAccordian(num);
    }
  };
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.wrapper1}>
        <div className={styles.miniwrapper1}>
          <div className={styles.logo}>
            <img src="azurelogowithname.svg" alt="azurelogo" />
          </div>
          <div className={styles.heading}>
            Learn MS Azure and crack your next high paying job in 8 weeks
          </div>
          <div className={styles.tag}>
            Microsoft Azure, often referred to as Azure, is a cloud computing
            platform operated by Microsoft for application management via
            Microsoft-managed data centers.
          </div>
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
        </div>
        <div className={styles.instructorcard}>
          <div className={styles.icardtitle}>instructor</div>
          <div className={styles.imgcontainer}></div>
          <div className={styles.icardname}>Prashanth Kumar Gondipalli</div>
          <div className={styles.icarddesc}>
            I am holding 13 years of experience as an azure devops engineer
            working in EPAM Softwares. Developing Continuous Integration/
            Delivery pipelines. Experience with automation/ integration tools
            like Jenkins
          </div>

          {/* <div className={styles.icardbuttontitle}>View Profile</div>
          <img
            className={styles.icardbutton}
            src="rightarrowwhite.svg"
            alt=""
          /> */}
        </div>
      </div>
      <div className={styles.flexcenter}>
        <div className={styles.enrollbutton}>
          {" "}
          <Link href="/enroll">Enroll Now</Link>{" "}
        </div>
      </div>
      <div className={`${styles.wrapper2} ${styles.backgroundwhite}`}>
        <div className={styles.title}>About the Course</div>
        <div className={styles.twodivs}>
          <div className={styles.miniwrapper2}>
            <div className={styles.coursedesc}>
              Microsoft Azure & Azure DevOps Solutions Course is organized
              systematically by industry leaders and professionals as per the
              industry requirements and demands. The course gives you a solid
              foundation to appear for the Microsoft Certified. <br /> <br />{" "}
              This course will help you to implement CI and CD pipelines and
              infrastructure automation along with great networking and security
              automation and to clear Azure DevOps Engineer Expert
              Certification. After this course audience can step out with
              real-time implementation and automating infrastructure and
              configuring network along with IAAS and PAAS and strategies for
              collaboration, source code management, security, compliance,
              continuous integration, delivery, and monitoring.{" "}
            </div>
          </div>
          <div className={styles.wrapper3}>
            <div className={styles.title2}>Why Should you Join?</div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                Career growth is all about refining oneself, and it never
                expires
              </div>
            </div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                2 months intensive program on Azure
              </div>
            </div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                Invest Your Time, And Notch Your life and Career to another
                level
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.title}>Course Curriculum</div>
        <div className={styles.wrapper4}>
          <div className={styles.accordians}>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(1);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Introduction to Azure</div>
              </div>
              <div
                className={
                  accordian == "1"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Introduction to Microsoft Azure
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Benefits of Cloud computing
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Types of cloud computing
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Data Centers and Services
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Subscriptions
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Classic Vs Azure Resource Manager
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Cloud Service Models (IaaS, PaaS & SaaS)
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Market Place
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure PowerShell
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Azure CLI</div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(2);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Azure storage</div>
              </div>
              <div
                className={
                  accordian == "2"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Types of Azure storage
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Types of Storage Accounts
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Storage replication in Azure
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Managed vs unmanaged storage
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Different types of disks in Azure and benefits
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Choosing the right storage for different workloads
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(3);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Azure PaaS services</div>
              </div>
              <div
                className={
                  accordian == "3"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    overview of Azure PaaS Services
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure App services{" "}
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Azure Web Apps</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Function Apps </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Monitoring and securing App services
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Restricting traffic to apps using Azure Application Gateway
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Auto scaling of App service
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Manage High Availability of App service using Traffic
                    Manager
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(4);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Version Control System</div>
              </div>
              <div
                className={
                  accordian == "4"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Introduction to Git
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Git Architecture
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Git Rebase</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Remove files</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Git Revert</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Git Stash</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Git Cherry-Pick</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Tagging</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Remote Repository
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.accordians}>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(5);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Azure subscriptions and Resources
                </div>
              </div>
              <div
                className={
                  accordian == "5"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create and Manages Azure subscriptions
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Access Control on the subscription Overview of Azure
                    resource manager
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create and manage Resource groups
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Move resources across resource groups
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Overview of Azure resource manager
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(6);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Azure Networking</div>
              </div>
              <div
                className={
                  accordian == "6"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Overview of Virtual Networks
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Creating Virtual networks and subnets
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Setup connectivity to Azure resources
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configuring Point to site VPN
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Creating Site to site VPN.
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Global Vnet Peering
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure load balancers (Standard LB, App Gateway, Front Door,
                    Traffic Manager)
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(7);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Azure Key Vault</div>
              </div>
              <div
                className={
                  accordian == "7"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create Azure Key Vault
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Access policies</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Assign to private network
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create the secrets
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(8);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Containerization</div>
              </div>
              <div
                className={
                  accordian == "8"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Introduction to Docker
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Docker installation
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Docker components
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Building Docker Image
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Creating Docker Registry
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Docker networking
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Docker Volumes</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.accordians}>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(9);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Azure virtual machines</div>
              </div>
              <div
                className={
                  accordian == "9"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deploying virtual machine from Azure portal
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Different ways to create Virtual machine in Azure
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deploy VM’s using Terraform templates
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Virtual machines configuration
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Choosing Right VM configuration
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    VM High Availability and Backup and restore
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(10);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  High availability Services
                </div>
              </div>
              <div
                className={
                  accordian == "10"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Availability sets
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Availability Zones
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure scale sets
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure disaster recovery
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(11);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Infrastructure as code</div>
              </div>
              <div
                className={
                  accordian == "11"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Introduction to terraform
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform Providers
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform State Config
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform Variables (Locals)
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>Meta Arguments</div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform loops (Count & For Each)
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform Security
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform Provisioners
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform State Import
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform code reusability (Modules)
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Terraform Dynamic Blocks etc
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(12);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Azure Kubernetes Service</div>
              </div>
              <div
                className={
                  accordian == "12"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Kubernetes Introduction
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create Azure AKS Cluster using Azure Portal
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Kubernetes Namespaces
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Disks for AKS Storage
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Ingress and Ingress Controller
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Ingress Domain Name based Routing with External DNS
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Container Registry for AKS
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure AKS Cluster Autoscaling
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure AKS - Horizontal Pod Autoscaler HPA
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Kubernetes Services etc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.title}>Introduction to Azure DevOps</div>
        <div className={styles.wrapper5}>
          <div className={styles.accordians2}>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(13);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Implementing continuous integration
                </div>
              </div>
              <div
                className={
                  accordian == "13"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure DevOps Pipeline
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Hosted and Private Agents
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Pipeline and Concurrency
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Pipeline YAML and Classic Pipelinesipeline
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Continuous Integration
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Build Strategy Implementation
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Integration Azure Pipelines
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Setting up Private Agents
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Analyze and Integrate Docker Multi-stage Builds
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(14);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Building Containers with Azure DevOps
                </div>
              </div>
              <div
                className={
                  accordian == "14"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create pipeline for azure web app container
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create pipeline for AKS cluster
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create and deploy a multi-container application on an AKS
                    Cluster. Also, utilize Azure Container and container
                    registry services.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(15);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Find and Fix Open Source Vulnerabilities
                </div>
              </div>
              <div
                className={
                  accordian == "15"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Manage information on security vulnerabilities and suggested
                    fixes for quick remediation
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    White source Bolt Introduction
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Open-source software
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    License and vulnerability scan integration
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(16);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Release Management Workflow
                </div>
              </div>
              <div
                className={
                  accordian == "16"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configure a CI/CD pipeline using classic and manage your
                    secrets using Azure Vault
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configure Azure Monitor as a part of the Release Deployment
                    and create a release dashboard to collect and share
                    information.
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Continuous Delivery
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Azure Release Pipeline
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deployment Patterns
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Integrating Secrets with Release Pipeline
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Automating Health Inspection
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(17);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Implementing Deployment Models and Services
                </div>
              </div>
              <div
                className={
                  accordian == "17"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configure IaaS and PaaS services on Azure. Also, deploy a
                    containerized docker application on Azure Web Apps using the
                    Container registry.
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deployment Modules and Deployment Options
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deployment Patterns
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(18);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>
                  Implementing Continuous deployment
                </div>
              </div>
              <div
                className={
                  accordian == "18"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configure deployment process using approval mechanism and
                    automating the deployments
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configure pre and post approval mechanism
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configuring gates
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accordians2}>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(13);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Tasks</div>
              </div>
              <div
                className={
                  accordian == "13"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Implement Continuous Integration with Azure Pipelines
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Integrate External Source Control with Azure Pipelines
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(14);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Tasks</div>
              </div>
              <div
                className={
                  accordian == "14"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deploy multi container to AKS
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Modernizing ASP.NET Application to Azure
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(15);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Tasks</div>
              </div>
              <div
                className={
                  accordian == "15"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Using White Source to Manage Open Source Security and
                    License
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(16);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Tasks</div>
              </div>
              <div
                className={
                  accordian == "16"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Configuring CI/CD Pipeline as Code with YAML & Classic
                    Editor
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Using secrets in the pipeline with Azure Key vault Setting
                    up and Running Functional Tests
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Release deployment control using Azure Monitor as release
                    gate
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Create a release Dashboard to share information, monitor
                    progress, and trends
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(17);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Tasks</div>
              </div>
              <div
                className={
                  accordian == "17"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Feature Flag Management using Launch Darkly
                  </div>
                </div>
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>
                    Deploying a Dockized app to Azure Web App for Containers
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordianwrapper}>
              <div className={styles.miniwrapper3}>
                <img
                  onClick={(e) => {
                    handleClickA(18);
                  }}
                  src="plus.svg"
                  alt=""
                />{" "}
                <div className={styles.accordian}>Tasks</div>
              </div>
              <div
                className={
                  accordian == "18"
                    ? styles.showaccordian
                    : styles.accordiancontentwrapper
                }
              >
                <div className={styles.miniwrapper33}>
                  <img src="bullet.svg" alt="" />{" "}
                  <div className={styles.accordiancontent}>??</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.title}>Implementing Compliance and Security</div>
        <div className={styles.subtxt}>
          Manage and check the code quality with Sonar Cloud on Azure DevOps.
          Also, integrate Azure Key Vault with Azure DevOps to access secrets in
          Azure Pipeline.
        </div>
        <div className={styles.wrapper6}>
          <div className={styles.wrapper3}>
            <div className={styles.title2}>Topics</div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                Secure and Compliant Development Process & Application Config
                Data
              </div>
            </div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                Security and Compliance in a Pipeline Code Quality
              </div>
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
              <div className={styles.subtxt}>
                Manage Technical Debt with Azure DevOps and Sonar Cloud
              </div>
            </div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                Integrate Azure Key Vault with Azure DevOps
              </div>
            </div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                Implement Security and Compliance in an Azure DevOps pipelines
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.title}>
          Project Management and Real Time examples
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
              <div className={styles.subtxt}>
                Processor – Intel Core i3 CPU @2.00 GHz or later Storage – 250
                GB HDD/SDD or later
              </div>
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
              <div className={styles.subtxt}>
                Post completion of session every day, we will give one real time
                example to perform the tasks from the audience
              </div>
            </div>
            <div className={styles.ticktxt}>
              <img src="tickstroke.svg" alt="" />
              <div className={styles.subtxt}>
                After completion of course we will provide real time artifacts
                and architecture diagrams for future reference in terms of
                terraform and devops pipelines and containers etc..
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        {/* Swetha changes */}
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
                  If I come from a non-technical background, am I still allowed
                  to take this course?
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
                    You will receive in-depth technical training so that you can
                    pursue a profession in one of the technical fields.
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
                    bachelor's degree with a minimum grade point average of 50%.
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
                    For admission to the course, you must pay a fee of $99 in
                    advance.
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
                  Is it possible to apply for the course if you graduated a few
                  years ago and don't have a job for this year?
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
                    A Certificate of Completion for your study will be given to
                    you by SightSpectrum Academy
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

      <div className={styles.wrapper9}>
        <div className={styles.enrollbutton}>
          {" "}
          <Link href="/enroll"> Enroll Now</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AzureBootcamp;
