import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import website from "../../Assets/about.png";
import streetcar from "../../Assets/Projects/streetcar.jpg";
import MCHP from "../../Assets/Projects/MCHP.png"
import LetsBoilAComputer from "../../Assets/Projects/LetsBoilAComputer.png"
import Keeb from "../../Assets/Projects/Keeb.jpg"
import codingGif from "../../Assets/Projects/codingGif.gif"
import riscv from "../../Assets/riscv.svg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LetsBoilAComputer}
              isBlog={false}
              title="Let's Boil A Computer -  Senior Thesis"
              description="Two-Phase Immersion Cooling System sponsored by Microsoft and fully designed and developed by my team. Created to innovate and revolutionize the status quo of conventional adiabatic server cooling solutions. A year-long compilation of systems, electrical, and computer engineering focusing on achievable and reproductable design for mass scaling in server-farms worldwide."
              ghLink="https://github.com/jeariaas/ComputerBoil2023"
              docLink ="https://docs.google.com/presentation/d/1-zoOJJYBVaeXNWnYgs83x1BmdEN3ebBqwvtoH3TxTWE/edit?usp=sharing"
              reportLink = "https://docs.google.com/document/d/1lbij4sFvxQggx33hoNKynjdBpBl3dS4QzP_y5hIUK-0/edit?usp=sharing"
              isFinalDoc = {true}
              isFinalReport = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Keeb}
              isBlog={false}
              title="Custom Built and Designed 60% Keyboard"
              description="I designed, built, and programmed my very own custom mechanical keyboard. Researching pcb manufacturers, switches, and keycaps from knowing literally nothing to soldering my own parts, I honed my skills and confidence in creating projects and seeing them through to completion. I lubed my switches, band-aid modded my stabilizers, soldered switches to pcb, programmed the keyboard using QMK software, coded macros and layering for 60% keyboard size functionality."
              ghLink="https://github.com/jeariaas/Custom-Keeb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingGif}
              isBlog={false}
              title="Code Practice"
              description="In my GitHub repository, I have compiled a comprehensive collection of algorithms and data structures that I've studied and implemented. The repository includes well-documented code examples, explanations of various algorithmic techniques, and in-depth discussions on the underlying principles of data structures. I cover a range of topics, from basic sorting and searching algorithms to more advanced concepts like dynamic programming, graph algorithms, and tree data structures. Each section is designed to reinforce learning through practical examples and real-world applications, making it a valuable resource for anyone interested in mastering these foundational topics in computer science."
              ghLink="https://github.com/jeariaas/Code-Practice"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streetcar}
              isBlog={false}
              title="Sun Tran Tracker System Design Project"
              description="I followed the systems design process to create a procedural and attainable high-level proof of concept for a crowdsourced Sun Tran streetcar tracking app. Throughout this project, I refined functional block diagrams and verification matrices, which played a key role in supporting the system's implementation and validation. Additionally, I authored a comprehensive report detailing the app's system objectives, stakeholder needs, and use cases, ensuring a clear understanding of the project's goals and guiding the development team toward a successful execution."
              ghLink="https://github.com/jeariaas/Tucson-StreetCar"
              diagramLink = ""
              isDiagram = {false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MCHP} 
              title="Reliability Monitoring Automation - For Work"
              description='This program is designed to process data from multiple Excel sheets containing information about technology tests, calculate the total hours and rejects for each technology across different test scenarios, and present the results in a structured format. The inputs to the program include Excel files containing test data, which are selected by the user using a file dialog window. The program then parses these files, extracts relevant information about test results and technology names, and performs calculations to determine the total hours and rejects for each technology in each test scenario. Finally, the program outputs the aggregated results to new Excel files, organized by test scenario, technology, and corresponding hours and rejects. The complexity of the program lies in its ability to handle multiple Excel sheets, extract specific data based on column names, perform calculations, and organize the results in a structured format, which results in a time complexity that depends on the size of the input data and the number of sheets and rows processed.'
              docLink = "https://drive.google.com/file/d/1Bjrx83R3VEuvBCeEtXkfiE48IZwAEn_f/view?usp=sharing"
              isFinalDoc = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="This Website!"
              description="I built a website using React.js, diving into the framework with little prior experience, and learning as I went through trial and error. Throughout the process, I encountered challenges in structuring components and managing state, but each obstacle was an opportunity to refine my understanding and improve the site's functionality. Styling the website was a journey of experimenting with CSS, where I adjusted layouts, colors, and animations, continuously testing different approaches until everything looked just right. The final result is a clean, responsive site that reflects my growth as a developer and my ability to problem-solve under uncertainty."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riscv}
              isBlog={false}
              title="Dynamic Branch Prediction within RISC-V"
              description="This paper explores the use of a 2-bit bimodal branch predictor implemented in Verilog and simulated using ModelSim, focusing on its performance in embedded RISC-V microcontrollers. The study compares the 2-bit predictor with a 1-bit branch predictor and a static not-taken predictor, showing that the 2-bit predictor delivers superior performance in terms of average speedup and misprediction rates. The results indicate that the 2-bit branch predictor optimizes pipeline performance depending on the workload. The paper also discusses potential improvements and future directions for enhancing dynamic branch prediction techniques."
              ghLink="https://github.com/jeariaas/DynamicBranchPrediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
