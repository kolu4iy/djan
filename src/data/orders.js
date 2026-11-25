// Мини-БД заказов поверх localStorage.
// Позже можно переключить этот модуль на fetch к бэкенду — интерфейс тот же.

const KEY = 'orders_v1'

export function getOrders() {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] }
  catch { return [] }
}

export function saveOrder(order) {
  const orders = getOrders()
  const record = {
    ...order,
    id: Date.now().toString(36),
    createdAt: new Date().toISOString(),
    status: 'new',
  }
  orders.unshift(record)
  localStorage.setItem(KEY, JSON.stringify(orders))
  return record
}
