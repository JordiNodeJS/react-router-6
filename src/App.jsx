import { Route, Routes, Link, useParams } from 'react-router-dom'
import './App.css'

// componente: es una función que renderiza un elemento(un conjunto de etiquetas html)
const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = ['cochinita', 'chili', 'carnita', 'quesadilla']
  return (
    <>
      <h1>Search</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const Tacos = () => {
  const { nombre_taco } = useParams()

  return (
    <>
      <h1>Tacos</h1>
      <h3>{nombre_taco}</h3>
      <p><Link to='details'>Got to details</Link></p>
    </>
  )
}

const TacoDetails = () => {
  const { nombre_taco } = useParams()

  return (
    <h2>Taco Details {nombre_taco}</h2>
  )
}

function App() {
  return (
    <div className='App'>
      <h1>React Router 6</h1>
      ☕🧃☕🧃☕
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search-page'>Search</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
          // Routes: indica todas las rutas que tiene nuestra aplicacción
        <Route path='/' element={<Home />} /> // Route: cuál es el path en que
        se tiene que renderizar un elemento
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:nombre_taco' element={<Tacos />}> // capturo el segmento de url con :nombre_taco
          <Route path='details' element={<TacoDetails />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
