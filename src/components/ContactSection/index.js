import { useState } from 'react'
import './styles.css'

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ submitting: true, submitted: false, error: null })

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...formData
                }).toString()
            })

            if (response.ok) {
                setStatus({ submitting: false, submitted: true, error: null })
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                throw new Error('Error al enviar el formulario')
            }
        } catch (error) {
            setStatus({ 
                submitting: false, 
                submitted: false, 
                error: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.' 
            })
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Contacto</h2>
                <div className="contact-content">
                    <p>Envíame un mensaje</p>
                    
                    <form 
                        className="contact-form" 
                        name="contact" 
                        method="POST" 
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <div style={{ display: 'none' }}>
                            <label>
                                No llenes este campo si eres humano: 
                                <input name="bot-field" />
                            </label>
                        </div>
                        
                        <div className="form-row" id='nameDiv'>
                            <input 
                                type="text" 
                                name="name"  
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status.submitting}
                            />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="form-row" id='emailDiv'>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status.submitting}
                            />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="form-row" id='subjectDiv'>
                        <input 
                            type="text" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}/>
                            <label htmlFor="subject">Asunto</label>
                        </div>
                        <textarea 
                        className='asunto'
                            rows="5" 
                            name="message" 
                            placeholder="Tu mensaje" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}
                        />
                        
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {status.submitted && (
                            <div className="success-message">
                                ¡Mensaje enviado! Te responderé pronto.
                            </div>
                        )}

                        {status.error && (
                            <div className="error-message">
                                {status.error}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}