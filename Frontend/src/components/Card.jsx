import React, { useEffect, useState } from 'react'
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWater } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import axios from 'axios';

const Card = () => {
    const [suhu, setSuhu] = useState("");
    const [kelembaban, setKelembaban] = useState("");
    const [air, setAir] = useState("");
    const [hujan, setHujan] = useState("");
    const [waktu, setWaktu] = useState("");
    const [tanggal, setTanggal] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://hydrometeorologibackend.vercel.app/api/data');
                response.data.map(item => (
                    setSuhu(item.temperature.toString()),
                    setKelembaban(item.humidity.toString()),
                    setAir(item.distance.toString()),
                    setHujan(item.rainfall.toString()),
                    setWaktu(item.time.toString()),
                    setTanggal(item.date.toString())
                ));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 500); 
        return () => clearInterval(intervalId);
    }, []);
    
    const displaySuhu = suhu === "0" ? "Error" : `${suhu}°`;
    const displayKelembaban = kelembaban === "0" ? "Error" : `${kelembaban} %`;
    const displayAir = air === "0" ? "Error" : `${air} cm`;
    const displayHujan = hujan === "-1" ? "Error" : `${hujan} mm`;

    return (
        <div className='flex gap-9 p-5 items-center'>
            <div className='flex gap-5 flex-col'>
                <div className='flex flex-col w-96 h-32 bg-gradient-to-tl from-[#00e5ff] to-[#1200ff] shadow-md rounded-2xl'>
                    <div className='flex justify-between p-4'>
                        <span className='font-bold font-raleway text-white'>Suhu</span>
                        <CiTempHigh className='text-2xl text-white' />
                    </div>
                    <div className='flex items-center justify-center py-2'>
                        <span className='text-5xl font-bold font-raleway text-white'>{displaySuhu}</span> 
                    </div>
                </div>
                <div className='flex flex-col w-96 h-32 bg-gradient-to-tl from-[#00e5ff] to-[#1200ff] shadow-md rounded-2xl'>
                    <div className='flex justify-between p-4'>
                        <span className='font-bold font-raleway text-white'>Curah Hujan</span>
                        <IoMdRainy className='text-2xl text-white'/>
                    </div>
                    <div className='flex items-center justify-center py-2'>
                        <span className='text-5xl font-bold font-raleway text-white'>{displayHujan}</span> 
                    </div>
                </div>
            </div>
            <div className='flex gap-5 flex-col'>
                <div className='flex flex-col w-96 h-32 bg-gradient-to-tl from-[#00e5ff] to-[#1200ff] shadow-md rounded-2xl'>
                    <div className='flex justify-between p-4'>
                        <span className='font-bold font-raleway text-white'>Kelembaban</span>
                        <WiHumidity className='text-2xl text-white' />
                    </div>
                    <div className='flex items-center justify-center py-2'>
                        <span className='text-5xl font-bold font-raleway text-white'>{displayKelembaban}</span> 
                    </div>
                </div>
                <div className='flex flex-col w-96 h-32 bg-gradient-to-tl from-[#00e5ff] to-[#1200ff] shadow-md rounded-2xl'>
                    <div className='flex justify-between p-4'>
                        <span className='font-bold font-raleway text-white'>Permukaan Air</span>
                        <FaWater className='text-2xl text-white' />
                    </div>
                    <div className='flex items-center justify-center py-2'>
                        <span className='text-5xl font-bold font-raleway text-white'>{displayAir}</span> 
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-24 items-start gap-9'>
                <p className='text-white text-2xl font-raleway font-bold flex items-center gap-3'> <MdDateRange className='text-4xl' /> {tanggal}</p>
                <p className='text-white text-2xl font-raleway font-bold flex items-center gap-3'> <MdAccessTime className='text-4xl' /> {waktu}</p>
            </div>
        </div>
    )
}

export default Card;
