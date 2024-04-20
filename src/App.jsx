import { useState } from "react"
import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import RepoList from "./components/RepoList"

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <RepoList nomeUsuario={nomeUsuario} />
        </>
      )}


      {/* {formularioVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
