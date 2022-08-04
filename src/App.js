import './App.css';


function Name(props) {
  return (
    <span>{props.name}</span>
  )
};

function Surname(props) {
  return (
    <span>{props.surname}</span>
  )
};

function Age(props) {
  return (
    <span>{props.age}</span>
  )
};

function Country(props) {
  return (
      <span>{props.country}</span>
  )
};

function User(props) {
  return (
    <div>
      <h3>
        I'm <Name name={props.name} />  <Surname surname={props.surname} /> and I'm <Age age={props.age} /> from <Country country={props.country} />
      </h3>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <User
          name={"Elon"}
          surname={"Musk"}
          age={51}
          country={"USA"}
        />

        <User
          name={"David"}
          surname={"Moor"}
          age={28}
          country={"USA"}
        />

        <User
          name={"Sarah"}
          surname={"Doe"}
          age={21}
          country={"UK"}
        />

      </header>
    </div>
  )
};

export default App;
