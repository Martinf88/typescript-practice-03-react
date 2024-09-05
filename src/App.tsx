import "./App.css";
import AnimalList from "./components/AnimalList";
import ContactList from "./components/ContactsList";
import Counter from "./components/Counter";
import DarkMode from "./components/DarkMode";
import Profile from "./components/Profile";

const App = () => {
  return (
    <section>
      <h1>React med Typescript</h1>
      <Counter />
      <h2>User Profiels</h2>
      <Profile username={"Kalle"} email={"test.email"} />
      <Profile username={"Sven"} email={"test2.email"} />
      <DarkMode />
      <AnimalList />
      <ContactList />
    </section>
  );
};

export default App;
