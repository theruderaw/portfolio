import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

export default function Contact() {
    const formRef = useRef()
    const [status, setStatus] = useState('')
    const [statusColor, setStatusColor] = useState('')
    const [sending, setSending] = useState(false)
    const [charCount, setCharCount] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
        setStatus('')

        const from_name = formRef.current.from_name.value
        const from_email = formRef.current.from_email.value
        const message = formRef.current.message.value

        const params = {
            subject: 'New Portfolio Message',
            from_name,
            from_email,
            message: `From: ${from_name}\nEmail: ${from_email}\n\nMessage:\n${message}`,
        }

        emailjs.send('service_769a8ae', 'template_c9m3pt5', params, '0V1Cgs852566IzG_0')
            .then(() => {
                setStatusColor('#a8ffb0')
                setCharCount(0)
                setStatus('✅ Message sent successfully!')
                formRef.current.reset()
            })
            .catch((err) => {
                setStatusColor('#ff8a8a')
                setStatus('❌ Failed to send. Please try again.')
                console.error('EmailJS error:', err)
            })
            .finally(() => {
                setSending(false)
            })
    }

    return (
        <section>
            <h2 className="page-title">Get In Touch</h2>
            <p>I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

            <div className="contact-info">
                <div><strong>Email:</strong> <a href="mailto:theruderaw678@gmail.com">theruderaw678@gmail.com</a></div>
                <div><strong>Phone:</strong> +91 8877298660</div>
                <div><strong>Location:</strong> Rambaug Colony, Kothrud, Pune</div>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <div style={{ position: 'relative', width: '100%' }}>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        maxLength="4000"
                        required
                        style={{ width: '100%', paddingBottom: '25px', resize: 'vertical' }}
                        onChange={(e) => setCharCount(e.target.value.length)}
                    ></textarea>
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '12px',
                        fontSize: '0.75rem',
                        color: '#888',
                        pointerEvents: 'none',
                        backgroundColor: 'rgba(0,0,0,0.05)', /* Optional: adds subtle contrast depending on your theme */
                        padding: '2px 6px',
                        borderRadius: '4px'
                    }}>
                        {4000 - (formRef.current?.message?.value?.length || 0)} / 4000
                    </div>
                </div>
                <button type="submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                </button>
                {status && <p style={{ color: statusColor, margin: 0, fontSize: '0.9rem' }}>{status}</p>}
            </form>
        </section>
    )
}
