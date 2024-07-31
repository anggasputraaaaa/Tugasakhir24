import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../components/Card";
import Content from "../components/Content";
import { motion } from "framer-motion"

const TABLE_HEAD = ["Tanggal","Waktu","Suhu", "Kelembaban", "Permukaan Air", "Curah Hujan",];


const Main = () => {
  const [tableRows, setTableRows] = useState([
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hydrometeorologi.vercel.app/api/data');
        const newData = response.data.map(item => ({
          suhu: item.temperature.toString(),
          kelembaban: item.humidity.toString(),
          air: item.distance.toString(),
          hujan: item.rainfall.toString(),
          waktu: item.time,
          tanggal: item.date,
        }));
        setTableRows(prevRows => [...prevRows, ...newData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  },[] );
  

  return (
    <>
    <div  className="h-full w-full">
     {/* ganti agar bisa diubah */}
        <Card /> 
    </div>
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1}}
      className="h-full py-2 ">
          <Content  datake={TABLE_HEAD} dataka={tableRows}  />
      </motion.div>
    
    </>
  )
}

export default Main