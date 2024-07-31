import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Grafik from '../components/Grafik'
import Content from '../components/Content'
import { motion } from "framer-motion"
import axios from 'axios';

const TABLE_HEAD = ["Tanggal", "Waktu","Air" ];


const Ketinggian = () => {
  
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hydrometeorologibackend.vercel.app/api/data');
       
        const sortedData = response.data.sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);
          return dateB - dateA;
        });

        
        const newData = sortedData.slice(0,10).map(item => ({
          air: item.distance.toString(),
          waktu: item.time,
          tanggal: item.date,
        }));
        
        console.log(newData)
        
        setTableRows([ ...newData]);
        
        console.log(tableRows)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  },[] );
  
  return (
    <div className='flex flex-col gap-6 p-4 h-full '>
      {/* Bagian atas */}
      <div className='h-1/3 w-full flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-white font-bold text-2xl'>Grafik Ketinggian Air</span>
        <Grafik  
        dataka={tableRows} 
        value={"air"}
        x={"waktu"}/>    
      </div>
      {/* Bagian bawah */}
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1.5}}         
      className='h-2/3 flex flex-col justify-center items-center gap-3'>
      <span className='font-raleway text-white font-bold text-2xl'>Data Ketinggian Air</span>
        <Content dataka={tableRows} datake={TABLE_HEAD} />
      </motion.div> 
    </div>
  )
}

export default Ketinggian
