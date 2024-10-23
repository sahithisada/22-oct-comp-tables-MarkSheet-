import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
     <Table name="Seetha Marks" Tmarks="98" Hmarks="90" Emarks="96" Mmarks="91" Scmarks="93" Somarks="95" Total="563"></Table>
     <Table name="Geetha Marks" Tmarks="56" Hmarks="37" Emarks="74" Mmarks="69" Scmarks="23" Somarks="82" Total="341"></Table>
     <Table name="Sheela Marks" Tmarks="68" Hmarks="89" Emarks="58" Mmarks="84" Scmarks="77" Somarks="90" Total="466"></Table>
     <Table name="Maala Marks" Tmarks="97" Hmarks="78" Emarks="55" Mmarks="35" Scmarks="73" Somarks="81" Total="419"></Table>
     <Table name="Laxmi Marks" Tmarks="18" Hmarks="23" Emarks="42" Mmarks="9" Scmarks="32" Somarks="45" Total="169"></Table>
     </div>
  )
}

export default App;
