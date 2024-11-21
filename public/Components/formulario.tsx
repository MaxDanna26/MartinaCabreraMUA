import React,{ useState } from 'react';

import '../CSS/form.css';

export default function Form() {

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    phone: '',
    date: '',
    event: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message , phone , date , event } = formData;

    if (!name || !message || !phone || !date || !event) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Construye el enlace mailto
    const mailtoLink = `mailto:martinacabreramua89@gmail.com?subject=${encodeURIComponent(name + "/" + event + " " + "-" + " " + phone + " " + "-" + " " + date)}&body=${encodeURIComponent(
      `${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Nombre:</label>
          <input
            type="text"
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />

          <label htmlFor="phone">Telefono:</label>
          <input 
            type="tel"
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Numero de telefono'
            autoComplete='off'
            required  
          />

          <label htmlFor="date">Fecha:</label>
          <input 
            type="date"
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            autoComplete='off'
            required 
          />

          <label htmlFor="event">Tipo de evento:</label>
          <select 
            name="event" 
            id="event"
            value={formData.event}
            onChange={handleChange}
            autoComplete='off'
            required>
            <option value=""></option>
            <option value="Boda">Boda</option>
            <option value="Shooting">Shooting</option>
            <option value="Colaboracion">Colaboracion</option>
            <option value="Evento">Evento</option>
            <option value="Otro">Otro</option>
          </select>

          <label htmlFor='message'>Mensaje:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí"
            autoComplete="off"
            required
          ></textarea>


        <button type="submit">Enviar</button>
      </form>
  );
};

