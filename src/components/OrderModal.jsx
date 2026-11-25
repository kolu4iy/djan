import { useState } from 'react'
import { saveOrder } from '../data/orders'

export default function OrderModal({ pickup, onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', qty: 1, position: pickup.position, comment: '',
  })
  const [sent, setSent] = useState(null)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const record = saveOrder({ pickupId: pickup.id, pickupName: pickup.name, ...form })
    setSent(record.id)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">✕</button>

        {sent ? (
          <div className="modal-ok">
            <div className="ok-icon">✓</div>
            <h3>Заказ принят!</h3>
            <p>Номер заказа: <strong>{sent}</strong></p>
            <p className="muted">Мы свяжемся с вами в течение рабочего дня.</p>
            <button className="btn btn-outline" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <h3>Заказ: {pickup.name}</h3>
            <p className="muted modal-sub">
              {pickup.price.toLocaleString('ru-RU')} ₽ / шт. Заполните форму — мы свяжемся для подтверждения.
            </p>
            <form className="order-form" onSubmit={submit}>
              <label>Имя *<input required value={form.name} onChange={set('name')} placeholder="Как к вам обращаться" /></label>
              <label>Телефон *<input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+7 ___ ___-__-__" /></label>
              <label>Email<input type="email" value={form.email} onChange={set('email')} placeholder="you@mail.ru" /></label>
              <div className="row2">
                <label>Кол-во *<input required type="number" min="1" value={form.qty} onChange={set('qty')} /></label>
                <label>Позиция<select value={form.position} onChange={set('position')}>
                  <option>Neck</option><option>Middle</option><option>Bridge</option>
                  <option>Neck + Bridge (пара)</option><option>Другое / обсудим</option>
                </select></label>
              </div>
              <label>Комментарий<textarea rows="3" value={form.comment} onChange={set('comment')} placeholder="Цвет, откосы, сроки…" /></label>
              <button type="submit" className="btn btn-primary full">Отправить заказ</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
