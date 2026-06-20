import React, { useState } from 'react'
import '../styles/project.css'

const projects = [
    {
        title: 'Safety Monitoring Helmet',
        subtitle: 'Final Year Capstone Project',
        description: 'Developed an IoT-enabled safety helmet featuring real-time heart rate monitoring, fall detection, and RFID-based user authentication.',
        bullets: [
            'Built the server architecture using FastAPI and PostgreSQL, implementing WebSockets.',
            'Designed a responsive monitoring dashboard using ReactJS and Tailwind CSS.',
        ],
        tech: ['IoT', 'FastAPI', 'WebSockets', 'ReactJS', 'Tailwind CSS'],
    },
    {
        title: 'Movie Recommendation System',
        subtitle: 'NLP/AIML Project',
        description: 'Built a recommendation engine using TF-IDF with bigrams over a comprehensive dataset of 35,000+ movies.',
        bullets: [
            'Developed modular training and storage scripts utilizing Scikit-Learn.',
            'Optimized recommendations via normalized linear functions and Cosine Similarity.',
        ],
        tech: ['NLP', 'Scikit-Learn', 'TF-IDF', 'Python'],
    },
]

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState(null)

    const toggleProject = (title) => {
        if (expandedProject === title) {
            setExpandedProject(null)
        } else {
            setExpandedProject(title)
        }
    }

    return (
        <section>
            <h2 className="page-title">Projects</h2>
            <div className="projects-container">
                {projects.map((proj) => (
                    <div
                        className={`project-tab ${expandedProject === proj.title ? 'expanded' : ''}`}
                        key={proj.title}
                        onClick={() => toggleProject(proj.title)}
                    >
                        <h3>{proj.title}</h3>
                        <div className={`project-details-container ${expandedProject === proj.title ? 'open' : ''}`}>
                            <p className="subtitle">{proj.subtitle}</p>
                            <p>{proj.description}</p>
                            <ul>
                                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                            <ul className="skills-list" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                                {proj.tech.map((t) => <li key={t}>{t}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
