import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Header title="Not My order"></Header>
      <Search></Search>
      <h1> Validate your order </h1>
    </div>

  );
}

export default App;
