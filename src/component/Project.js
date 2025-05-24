import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/proj1.png";
import projImg2 from "../assets/images/proj2.png";
import projImg3 from "../assets/images/furtn.png";
import "./Project.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const projects = [
    {
      title: "Restaurant Landing Page",
      description: "Modern front-end UI for restaurant website",
      imgUrl: projImg1,
      githubUrl: "https://github.com/rasha-abedlatif/RestaurantWebsite.git"
    },
    {
      title: "Wellness & Yoga Website",
      description: "Responsive front-end site for holistic wellness brand",
      imgUrl: projImg2,
      githubUrl: "https://github.com/rasha-abedlatif/Fitness-Website.git"
    },
    {
      title: "E-commerce Furniture Store",
      description: "Front-end for minimalist online shop",
      imgUrl: projImg3,
      githubUrl: "https://github.com/rasha-abedlatif/Furniture.git"
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="project" id="projects" ref={ref}>
      <Container>
        <Row>
          <Col size={12}>
            <AnimatePresence>
              {inView && (
                <>
                  <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Projects
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Explore my latest work across front-end, back-end, and SEO domains. Each project showcases my practical experience and technical skills.
                  </motion.p>

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Front-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Back-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">SEO</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <motion.div
                          key={activeTab}
                          variants={containerVariants}
                          initial="hidden"
                          animate="show"
                          className="projects-grid"
                        >
                          {projects.map((project, index) => (
                            <motion.div variants={cardVariants} key={index}>
                              <ProjectCard {...project} />
                            </motion.div>
                          ))}
                        </motion.div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          Back-end projects coming soon. Stay tuned!
                        </motion.p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          SEO projects and case studies are under construction.
                        </motion.p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
