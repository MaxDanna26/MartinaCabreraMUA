import React,{ useState } from 'react';

import '../CSS/form.css';

export default function Form() {

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    // Construye el enlace mailto
    const mailtoLink = `mailto:martinacabreramua89@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nombre: ${name}\n\nMensaje: ${message}`
    )}`;

    // Redirige al cliente de correo
    window.location.href = mailtoLink;
  };

  return (
      <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />


          <label>Asunto:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto del mensaje"
            required
          />

          <label>Mensaje:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>

        <button type="submit">Enviar</button>
      </form>
  );
};
