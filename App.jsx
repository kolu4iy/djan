import './App.css'
import Catalog from './components/Catalog'
import Orders from './components/Orders'

function App() {
  const goOrders = () => document.getElementById('orders')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">🎛 Tone<span>Works</span></a>
          <nav className="nav-links">
            <a href="#catalog">Каталог</a>
            <a href="#about">О мастерской</a>
            <a href="#orders">Мои заказы</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a href="#catalog" className="btn btn-outline">Выбрать звукосниматель</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <h1>Звукосниматели ручной намотки <span className="accent">под ваш инструмент</span></h1>
            <p className="subtitle">
              Синглы, хамбакеры, Z-Coil и басовые модели. Намотка под заказ,
              восковая пропитка, честные характеристики — от прототипа до серии.
            </p>
            <div className="hero-actions">
              <a href="#catalog" className="btn btn-primary">Смотреть каталог</a>
              <a href="#contact" className="btn btn-ghost">Обсудить проект →</a>
            </div>
            <div className="hero-stats">
              <div><strong>7</strong><span>моделей в каталоге</span></div>
              <div><strong>100%</strong><span>ручная намотка</span></div>
              <div><strong>12 мес</strong><span>гарантия</span></div>
            </div>
          </div>
        </section>

        <Catalog onGoOrders={goOrders} />

        <section id="about" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Как мы работаем</h2>
            <div className="grid grid-3 steps">
              {[
                ['1', 'Выбираете модель', 'Смотрите характеристики в каталоге или пишете нам — подскажем под ваш инструмент и стиль.'],
                ['2', 'Оформляете заказ', 'Указываете позицию, количество и пожелания. Мы подтверждаем сроки и цвет.'],
                ['3', 'Намотка и отправка', 'Наматываем, пропитываем, проверяем на стенде и отправляем с гарантией.'],
              ].map(([n, title, text]) => (
                <div className="step" key={n}>
                  <div className="step-num">{n}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Orders />
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <span>© 2026 ToneWorks. Звукосниматели ручной намотки.</span>
          <div className="footer-links">
            <a href="#">Telegram</a>
            <a href="#">VK</a>
            <a href="mailto:order@toneworks.dev">order@toneworks.dev</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
