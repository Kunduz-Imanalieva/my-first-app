import Age from "./components/Age";
import BiggerNum from "./components/BiggerNum";
import Book from "./components/Book";
import ByeWorld from "./components/ByeWorld";
import Chunga from "./components/Chunga";
import HelloWorld from "./components/HelloWorld";
import Hochu from "./components/Hochu";
import Length from "./components/Length";
import Lowercase from "./components/Lowercase";
import Power from "./components/Power";
import Round from "./components/Round";
import Song from "./components/Song";
import Sum from "./components/Sum";
import Uppercase from "./components/Uppercase";
import Water from "./components/Water";
import Year from "./components/Year";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ByeWorld />
      <Chunga />
      <Hochu v="more" />
      <Hochu v="kosmos" />
      <Book name="Harry Potter" author="JK" />
      <Song name="Believer" artist="Imagine Dragons" />
      <Length string="Example string" />
      <Length string="Hello world" />
      <Uppercase>hello world</Uppercase>
      <Lowercase>HELLO WORLD</Lowercase>
      <Age year={1989} />
      <Age year={1900} />
      <Year age={21} />
      <Round number={123.34566} />
      <Round number={456.7899} />
      <Power number={2} to={3} />
      <Water frozen={false} />
      <Water frozen={true} />
      <Sum a={5} b={5} />
      <Sum a={10} b={5} />
      <BiggerNum a={20} b={15}/>
    </div>
  );
}

export default App;
