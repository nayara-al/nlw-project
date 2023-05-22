import "./style/global.css"
import Habit from "./components/Habit"

function App() {
  
  return (
    <>
      <Habit completed={10}/>
    </>
  )
}

export default App

//Componente: Reaproveitar / isolar
//Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente