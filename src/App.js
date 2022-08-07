import './App.css';
import {Name} from "./Name";
import {Surname} from "./Surname";
import {Age} from "./Age";
import {Counter} from "./Counter";


function User(props) {
  return (
    <div>
      <h3>
        I'm <Name name={props.name} />  <Surname surname={props.surname} /> and I'm <Age age={props.age} />
      </h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <header className="App-header">

    <Counter />

        <User
          name={"Elon"}
          surname={"Musk"}
          age={51}
        />

        <User
          name={"David"}
          surname={"Moor"}
          age={28}
        />

        <User
          name={"Sarah"}
          surname={"Doe"}
          age={21}
        />

      </header>
    </div>
  )
};

export default App;
