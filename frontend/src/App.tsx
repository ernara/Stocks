import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Counter from './Components/Counter/Counter';
import Search from './Components/Search/Search';
import Test from './Components/Test/Test';

function App() {
      const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    };
  return (
    <div className="App">
      <Counter/>
      <Test/>
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </div>
  );
}

export default App;
