import { useState, useEffect } from 'react'
import './styles.css'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  // Detectar éxito desde la URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('success') === 'true') {
      setSubmitted(true)

      // limpiar URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-content">
          <p>Envíame un mensaje</p>

          {submitted && (
            <div className="success-message">
              ¡Mensaje enviado! Te responderé pronto.
            </div>
          )}

          {!submitted && (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/?success=true"
              className="contact-form"
            >
              {/* requerido por Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="form-row" id='nameDiv'>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Nombre</label>
              </div>

              <div className="form-row" id='emailDiv'>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
              </div>

              <div className="form-row" id='subjectDiv'>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label>Asunto</label>
              </div>

              <textarea
                className='asunto'
                rows="5"
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
