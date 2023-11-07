import { useEffect, useState } from "react";
import axios from "axios";
import HousesGallery from "../../components/utils/HousesGallery";
import SearchElement from "../../components/utils/SearchElement";
import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";

export default function HousesPage() {
  const [houses, setHouses] = useState([]);
  const [housesCopy, setHousesCopy] = useState([]);

  async function getHouses() {
    try {
      const { data } = await axios(`https://got-back-dbjson.vercel.app/houses`);
      setHouses(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHouses();
  }, []);

  useEffect(() => {
    setHousesCopy([...houses]);
  }, [houses]);

  const updateFilter = (name) => {
    const charactersAux = houses.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
    setHousesCopy(charactersAux);
  };

  return (
    <>
      <header className="header">
        <SearchElement updateFilter={updateFilter} />
        <Header home={true} />
      </header>
      <main className="main">
        {housesCopy && <HousesGallery data={housesCopy} />}
      </main>
      <footer className="footer margin-top margin-bottom">
        <Footer />
      </footer>
    </>
  );
}
