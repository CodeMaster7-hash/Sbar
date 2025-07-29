import React, { useEffect } from "react";
function CV() {
    useEffect(() => {
        document.title = "Umair Ali CV";
    }, [])
    return (
        <>
            <div className="container">

                <header className="info">
                    <h1>Umair Ali Jee</h1>
                    <address>Sisa Gaden Housing Society, Mustafa Abad, Lahore</address>
                    <p>Phone: <a href="tel:+923289485896" className="cv">+92 328 9485896</a> | Email: <a href="mailto:info@example.com" className="cv">umairalijeealijee@gmail.com</a></p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/umair-ali-jee-147806310" target="blank" className="cv">myLinkedin</a> | GitHub: <a href="https://github.com/CodeMaster7-hash" target="blank" className="cv">myGithub</a></p>
                </header>

                <section className="summary">
                    <h2>Summary</h2>
                    <p>Highly motivated and experienced professional with a strong background in front end web development.</p>
                </section>

                <section className="education">
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <h3>Bachelor's Degree in [Software Engineering]</h3>
                            <p>Lahore Garrison University, in year 2025</p>
                        </li>
                    </ul>
                </section>
                <section class="experience">
                    <h2>Work Experience</h2>
                    <ul>
                        <li>
                            <h3>Job Title</h3>
                            <small>Front End Web Developer as Intern</small>
                            <p>App Aura, April-2025 to July-2025</p>
                            <ul>
                                <li>Designing React.js Interfaces</li>
                                <li>Integrated third-party APIs</li>
                                <li>Improve Code Quality</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Front End Web Developer</li>
                        <li>Android Developer</li>
                        <li>AI Reseacher</li>
                    </ul>
                </section>
                <section class="projects">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <h3>sBar</h3>
                            <p>A portfolio website</p>
                        </li>
                        <li>
                            <h3>ScrewJet</h3>
                            <p>Car Assistance Mobile Application</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Analytic Web</h3>
                            <p>A website that can manage finacial records in data.</p>
                        </li>
                    </ul>
                </section>
                <section class="certifications">
                    <h2>Certifications</h2>
                    <ul>
                        <li>Certificate of Front End Web Developer with React.js and Node.js, Lahore Garrison University, September 25, 2024</li>
                        <li>Certificate of Appreciation, Web3Pak, November 05, 2024</li>
                    </ul>
                </section>

                <section class="references">
                    <h2>References</h2>
                    <p>Available upon request</p>
                </section>

            </div>
        </>
    );
}
export default CV;