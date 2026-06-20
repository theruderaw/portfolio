import React, { useState } from 'react'
import SkillCategory from '../components/SkillCategory'
import '../styles/skills.css'

const skillCategories = [
    {
        name: 'Languages',
        skill_dict: {
            'Python': 90,
            'JavaScript': 80,
            'TypeScript': 75,
            'SQL (PostgreSQL)': 85
        }
    },
    {
        name: 'Backend',
        skill_dict: {
            'FastAPI': 90,
            'Node.js': 70,
            'WebSockets': 80,
            'REST APIs': 90,
            'SMTP Workflows': 85
        }
    },
    {
        name: 'Frontend',
        skill_dict: {
            'ReactJS': 80,
            'Tailwind CSS': 85,
            'HTML5': 90,
            'CSS3': 80,
            'JavaScript Canvas': 65
        }
    },
    {
        name: 'Data Analysis',
        skill_dict: {
            'NLP': 75,
            'Scikit-Learn': 70,
            'TF-IDF': 80,
            'Cosine Similarity': 80
        }
    },
    {
        name: 'Tools',
        skill_dict: {
            'Git': 85,
            'GitHub': 85,
            'Linux': 80,
            'Postman': 90
        }
    }
]

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(() => {
        return sessionStorage.getItem('active-skill-category') || 'Languages'
    })

    const handleActiveChange = (name) => {
        setActiveCategory(name)
        sessionStorage.setItem('active-skill-category', name)
    }

    return (
        <section className="page-with-effects">
            <div className="aurora-container">
                <div className="aurora-blob blob-1"></div>
                <div className="aurora-blob blob-2"></div>
            </div>
            <div className="page-content-wrapper">
                <h2 className="page-title">Technical Skills</h2>
                <div className="skills-container">
                    {skillCategories.map((cat) => (
                        <SkillCategory
                            key={cat.name}
                            name={cat.name}
                            skill_dict={cat.skill_dict}
                            isOpen={activeCategory === cat.name}
                            onMouseEnter={() => handleActiveChange(cat.name)}
                            onClick={() => handleActiveChange(cat.name)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
