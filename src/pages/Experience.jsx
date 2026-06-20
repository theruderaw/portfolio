import '../styles/experience.css'

export default function Experience() {
    return (
        <section>
            <h2 className="page-title">Professional Experience</h2>
            <div className="experience-card">
                <h2>Backend Developer Intern</h2>
                <span className="date">Feb 2024 – Jun 2024</span>
                <p className="company">CodeMischief Coding Solutions</p>
                <ul>
                    <li>Engineered robust Python FastAPI and PostgreSQL backend systems for enterprise-grade CRM/ERP systems, ensuring seamless integration with ReactJS frontends.</li>
                    <li>Implemented automated SMTP workflows and dynamic PDF generation modules, improving documentation turnaround times.</li>
                    <li>Designed custom PostgreSQL-based reporting queries to optimize data retrieval and visualization for client analysis.</li>
                </ul>
                <ul className="skills-list" style={{ marginTop: '1rem' }}>
                    <li>Python</li>
                    <li>FastAPI</li>
                    <li>PostgreSQL</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </section>
    )
}
