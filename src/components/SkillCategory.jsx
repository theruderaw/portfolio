import React from 'react'
import '../styles/skills.css'

const skillIconMap = {
    'Python': 'devicon-python-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'SQL (PostgreSQL)': 'devicon-postgresql-plain colored',
    'FastAPI': 'devicon-fastapi-plain colored',
    'Node.js': 'devicon-nodejs-plain colored',
    'WebSockets': 'devicon-socketio-original colored',
    'REST APIs': 'devicon-openapi-plain colored',
    'SMTP Workflows': 'devicon-google-plain colored',
    'ReactJS': 'devicon-react-original colored',
    'Tailwind CSS': 'devicon-tailwindcss-original colored',
    'HTML5': 'devicon-html5-plain colored',
    'CSS3': 'devicon-css3-plain colored',
    'JavaScript Canvas': 'devicon-html5-plain colored',
    'NLP': 'devicon-python-plain colored',
    'Scikit-Learn': 'devicon-scikitlearn-plain colored',
    'TF-IDF': 'devicon-python-plain colored',
    'Cosine Similarity': 'devicon-python-plain colored',
    'Git': 'devicon-git-plain colored',
    'GitHub': 'devicon-github-original',
    'Linux': 'devicon-linux-plain',
    'Postman': 'devicon-postman-plain colored'
}

export default function SkillCategory({
    name,
    skill_dict,
    isOpen,
    onMouseEnter,
    onMouseLeave,
    onClick
}) {
    return (
        <div
            className={`skill-tab ${isOpen ? 'active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <h3>{name}</h3>
            <div className={`skill-list-container ${isOpen ? 'open' : ''}`}>
                <ul className="skills-list">
                    {Object.entries(skill_dict).map(([skillName, level]) => (
                        <li key={skillName} className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">
                                    {skillIconMap[skillName] && (
                                        <i className={`${skillIconMap[skillName]} skill-icon`} style={{ marginRight: '0.6rem', fontSize: '1.1rem' }}></i>
                                    )}
                                    {skillName}
                                </span>
                                <span className="skill-percentage">{level}%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${level}%` }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
