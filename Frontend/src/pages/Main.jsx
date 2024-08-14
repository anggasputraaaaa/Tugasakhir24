import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../components/Card";
import Content from "../components/Content";
import { motion } from "framer-motion";

const TABLE_HEAD = ["Tanggal", "Waktu", "Suhu", "Kelembaban", "Permukaan Air", "Curah Hujan"];

const Main = () => {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hydrometeorologibackend.vercel.app/api/data');
        const newData = response.data.map(item => ({
          suhu: item.temperature.toString(),
          kelembaban: item.humidity.toString(),
          air: item.distance.toString(),
          hujan: item.rainfall.toString(),
          waktu: item.time,
          tanggal: item.date,
        }));

        // Sort data by time in descending order
        newData.sort((a, b) => {
          const timeA = new Date(`${a.tanggal}T${a.waktu}`).getTime();
          const timeB = new Date(`${b.tanggal}T${b.waktu}`).getTime();
          return timeB - timeA; // Sort descending (latest first)
        });

        // Set sorted data to state
        setTableRows(prevRows => [...newData, ...prevRows]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-full w-full">
        <Card />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-full py-2">
        <Content datake={TABLE_HEAD} dataka={tableRows} />
      </motion.div>
    </>
  );
};

export default Main;
