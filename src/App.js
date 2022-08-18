import './App.css';
// import { Name } from "./Name";
// import { Surname } from "./Surname";
// import { Age } from "./Age";
// import { Counter } from "./Counter";
import { Product } from "./homework-6/Product";
import Input from "./input";



/* function User(props) {
  return (
    <div>
      <h3>
        I'm <Name name={props.name} />  <Surname surname={props.surname} /> and I'm <Age age={props.age} />
      </h3>
    </div>
  )
} */

const fruits = [
  {
    name: "apples",
    price: "2$",
    desc: "apples from Armenia"
  },
  {
    name: "bananas",
    price: "1$",
    desc: "bananas from Ecuador"
  },
  {
    name: "oranges",
    price: "1.5 $",
    desc: "oranges from Spain"
  },
  {
    name: "lemons",
    price: "0.5$",
    desc: "lemon from Greece"
  },
  {
    name: "avocados",
    price: "5$",
    desc: "lemon from South Africa"
  }
];

function App() {

  const li = fruits.map((fruit, index) => {

    return <li key={index}>
      <Product
        name={fruit.name}
        price={fruit.price}
        description={fruit.desc}
      />
    </li>
  });


  /* const li = [
    <li key="a">{fruits[0]}</li>,
    <li key="b">{fruits[1]}</li>,
    <li key="c">{fruits[2]}</li>,
    <li key="d">{fruits[3]}</li>
  ];
 */

  return (
    <div className="App">
      <header className="App-header">

      <Input />

        <ol>
          {li}
        </ol>

        <div>
          { /*  <Product
            name="Apples"
            price=" 1.2$"
            description=" Fresh apples from Armenia"
          />

          <br />

          <Product
            name="Peaches"
            price=" 1$"
            description=" Fresh peaches from Armenia"
          />

          <br />

          <Product
            name="Prunes"
            price=" 2$"
            description=" Fresh prunes from Armenia"
          />
         */}
        </div>

        {/* <Counter />

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
        />  */}

      </header>
    </div>
  )
};

export default App;
