import { getOrders } from '../data/orders'

export default function Orders() {
  const orders = getOrders()
  return (
    <section id="orders" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Мои заказы</h2>
        {orders.length === 0 ? (
          <p className="muted center">Пока пусто. Выберите модель в каталоге и нажмите «Заказать».</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr><th>№</th><th>Дата</th><th>Модель</th><th>Кол-во</th><th>Позиция</th><th>Имя</th><th>Телефон</th></tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{new Date(o.createdAt).toLocaleString('ru-RU')}</td>
                  <td>{o.pickupName}</td>
                  <td>{o.qty}</td>
                  <td>{o.position}</td>
                  <td>{o.name}</td>
                  <td>{o.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="muted small note">
          ⚠ Сейчас заказы хранятся локально в браузере (localStorage) — это заглушка до подключения бэкенда.
        </p>
      </div>
    </section>
  )
}
