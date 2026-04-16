import './Header.css';

export default function Header () {
  const arr = ['Coleções', 'Anéis', 'Colares', 'Brincos', 'Pulseiras'];
  return (
    <header className="header">
      <h1>Cris TrêsMarias</h1>
      <nav className="nav">
        {arr.map((item) => (
          <a href={item.toLowerCase()} className="nav-link">
            {item}
          </a>
        ))}
      </nav>
      <div>
        <span>♡</span>
        <button>Carrinho</button>
      </div>
    </header>
  )
}
