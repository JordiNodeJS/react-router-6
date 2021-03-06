import {
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from 'react-router-dom'
import './App.css'
import NavLink from './component/NavLink'
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
      <p>
        <Link to='details'>Got to details</Link>
      </p>
      <Outlet />
    </>
  )
}

const TacoIndex = () => <h4>Index </h4>

const TacoDetails = () => {
  const { nombre_taco } = useParams()

  return <h2>Taco Details {nombre_taco}</h2>
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
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/search-page'>Search</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        // Routes: indica todas las rutas que tiene nuestra aplicacción //
        Route: cuál es el path en que se tiene que renderizar un elemento
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        // capturo el segmento de url con :nombre_taco
        <Route path='/tacos/:nombre_taco' element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='/tacos/midu' element={<h3>Midu</h3>} />
        <Route path='*' element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
