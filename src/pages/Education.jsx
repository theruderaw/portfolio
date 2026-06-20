import '../styles/education.css'

export default function Education() {
    return (
        <section>
            <h2 className="page-title">Education</h2>
            <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.1rem' }}>B.Tech in Electronics and Communications Engineering</h3>
                <p style={{ color: '#a8a8ff', fontSize: '0.9rem', marginTop: '0.25rem' }}>MIT World Peace University, Pune, MH | 2021 – Present</p>
                <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>CGPA: 7.56/10</p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Relevant Coursework:</strong> Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Natural Language Processing, Artificial Intelligence and Machine Learning.
                </p>
            </div>
            <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Leadership</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Student Placement Representative (SOEEE) | May 2023 – Jun 2024</li>
                    <li style={{ marginTop: '0.5rem' }}>Class Representative (1st Year Batch) | Nov 2022 – Jun 2023</li>
                </ul>
            </div>
        </section>
    )
}
