import { useState } from 'react'
import { PICKUPS, CATEGORIES, byCategory } from '../data/pickups'
import PickupCard from './PickupCard'
import OrderModal from './OrderModal'

const FILTERS = [
  ['all', 'Все'],
  ['Гитарные', 'Гитарные'],
  ['Басовые', 'Басовые'],
  ...Object.entries(CATEGORIES).map(([id, c]) => [id, c.label]),
]

export default function Catalog({ onGoOrders }) {
  const [filter, setFilter] = useState('all')
  const [orderFor, setOrderFor] = useState(null)
  const items = byCategory(filter)

  return (
    <section id="catalog" className="section">
      <div className="container">
        <h2 className="section-title">Каталог звукоснимателей</h2>

        <div className="filters">
          {FILTERS.map(([id, label]) => (
            <button
              key={id}
              className={`chip ${filter === id ? 'active' : ''}`}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
          <button className="chip chip-orders" onClick={onGoOrders}>
            📋 Мои заказы ({JSON.parse(localStorage.getItem('orders_v1') || '[]').length})
          </button>
        </div>

        <div className="pickup-grid">
          {items.map(p => (
            <PickupCard key={p.id} pickup={p} onOrder={setOrderFor} />
          ))}
        </div>
      </div>

      {orderFor && <OrderModal pickup={orderFor} onClose={() => setOrderFor(null)} />}
    </section>
  )
}

export { PICKUPS }
