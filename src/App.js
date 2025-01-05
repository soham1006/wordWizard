import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   <Navbar title="TextUtils"/>
   <div className='container my-3'>
    <TextForm heading="Enter text below"/>
   </div>
</>  
);
}

export default App;