'use client';

import { FormEvent, useState } from 'react';
import { business, type Language } from '../data/site';

export default function QuoteForm({ language }: { language: Language }) {
  const [sent, setSent] = useState(false);
  const spanish = language === 'es';

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const customerType = String(data.get('customerType') || 'Not provided');
    const material = String(data.get('material') || 'Not provided');
    const message = String(data.get('message') || 'Not provided');
    const body = [
      `${spanish ? 'Nombre' : 'Name'}: ${data.get('name')}`,
      `${spanish ? 'Teléfono' : 'Phone'}: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `${spanish ? 'Tipo de cliente' : 'Customer type'}: ${customerType}`,
      `${spanish ? 'Material y cantidad' : 'Material and amount'}: ${material}`,
      `${spanish ? 'Mensaje' : 'Message'}: ${message}`,
    ].join('\n');

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      spanish ? 'Consulta del sitio web' : 'Website inquiry',
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          {spanish ? 'Nombre' : 'Name'}
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          {spanish ? 'Teléfono' : 'Phone'}
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          {spanish ? 'Tipo de cliente' : 'Customer type'}
          <select name="customerType" defaultValue="">
            <option value="" disabled>{spanish ? 'Seleccione' : 'Select one'}</option>
            <option>{spanish ? 'Público' : 'Individual'}</option>
            <option>{spanish ? 'Contratista' : 'Contractor'}</option>
            <option>{spanish ? 'Negocio' : 'Business'}</option>
          </select>
        </label>
      </div>
      <label>
        {spanish ? 'Material y cantidad aproximada' : 'Material and approximate amount'}
        <input name="material" placeholder={spanish ? 'Ej. cable de cobre, una camioneta' : 'Example: copper wire, one pickup load'} />
      </label>
      <label>
        {spanish ? 'Mensaje' : 'Message'}
        <textarea name="message" rows={4} />
      </label>
      <button className="button" type="submit">{spanish ? 'Preparar correo' : 'Prepare email'}</button>
      {sent && (
        <p className="form-status" role="status">
          {spanish ? 'Su aplicación de correo debería abrirse con el mensaje listo.' : 'Your email app should open with the message ready.'}
        </p>
      )}
    </form>
  );
}
