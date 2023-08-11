/* eslint-disable react/jsx-no-target-blank */
import { useGlobalContext } from "./context"
import Search from "./components/Search";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
// eslint-disable-next-line no-unused-vars
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  const { showModal,favorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}

      <Meals />
      {showModal && <Modal /> }  
    </main>
  );
}

export default App;
