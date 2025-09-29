import 'bootstrap/dist/css/bootstrap.min.css';
import { ListEmployee } from './Components/ListEmployee';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { EmployeeComponent } from './Components/EmployeeComponent';
function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element = {<ListEmployee/>}></Route>
          <Route path='/employee' element = {<ListEmployee/>}></Route>
          <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
          <Route path='/update-employee/:id' element = {<EmployeeComponent/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
