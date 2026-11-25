import { CATEGORIES } from '../data/pickups'

const SPEC_ROWS = [
  ['position',    'Позиция'],
  ['magnet',      'Магнит'],
  ['wire',        'Провод'],
  ['turns',       'Витки'],
  ['resistance',  'Сопротивление'],
  ['output',      'Выход'],
  ['tone',        'Характер'],
]

export default function PickupCard({ pickup, onOrder }) {
  const cat = CATEGORIES[pickup.category]
  return (
    <div className="pickup-card">
      <div className="pickup-photo">
        {pickup.photo
          ? <img src={pickup.photo} alt={pickup.name} />
          : <div className="photo-placeholder" aria-hidden>🎸</div>}
      </div>

      <div className="pickup-body">
        <div className="pickup-tags">
          <span className="tag tag-group">{cat.group}</span>
          <span className="tag">{cat.label}</span>
        </div>

        <h3>{pickup.name}</h3>
        <p className="pickup-desc">{pickup.description}</p>

        <table className="specs">
          <tbody>
            {SPEC_ROWS.map(([key, label]) => (
              <tr key={key}>
                <td>{label}</td>
                <td>{pickup[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pickup-footer">
          <div className="pickup-price">{pickup.price.toLocaleString('ru-RU')} ₽</div>
          <button className="btn btn-primary" onClick={() => onOrder(pickup)}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  )
}
