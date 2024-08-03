import { useEffect, useRef, useState } from 'react'
import Grafik from '../components/Grafik'
import Content from '../components/Content'
import { motion } from "framer-motion"
import axios from 'axios';

const TABLE_HEAD = [ "Tanggal",  "Waktu","Kelembaban",];

const Kelembaban = () => {
  
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hydrometeorologibackend.vercel.app/api/data');
        
        // Sort the data based on date and time
        const sortedData = response.data.sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);
          return dateB - dateA;
        });
        
        // Extract the top 10 latest entries and map to desired format
        const newData = sortedData.slice(0, 15).map(item => ({
          Kelembaban: item.humidity.toString(),
          waktu: item.time,
          tanggal: item.date,
        }));
        
        // Check if the new data differs from the existing data
        if (JSON.stringify(newData) !== JSON.stringify(tableRows)) {
          setTableRows([...newData]);
        }
        
        console.log('New Data:', newData);
        console.log('Table Rows:', tableRows);

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
        <span className='font-raleway text-white font-bold text-2xl'>Grafik Kelembaban</span>
        <Grafik  
        dataka={tableRows} 
        value={"kelembaban"}
        x={"waktu"}/>    
      </div>
      {/* Bagian bawah */}
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1.5}}         
      className='h-2/3 flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-white font-bold text-2xl'>Data Kelembaban</span>
        <Content dataka={tableRows} datake={TABLE_HEAD} />
      </motion.div> 
    </div>
  )
}

export default Kelembaban
