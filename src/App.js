import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionList from './components/CollectionList';
import Hero from './components/Hero';
function App() {
  const [itemListData, setItemListData] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'http://cors.io/?https://testnets-api.opensea.io/assets?asset_contract_address=0x9123c95d8bcF2eF7D02896EDC8d884203dBaBBE5&order_direction=asc'
      );
      console.log(openSeaData.data);
      setItemListData(openSeaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      <Hero activeItem={itemListData[active]} />
      <CollectionList items={itemListData} setActive={setActive} />
    </div>
  );
}

export default App;
