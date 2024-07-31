
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Legend,
    Line
    } from "recharts";

const Grafik = ({dataka ,x,value}) => {
    // console.log(value);
    console.log(x);
    
    const data ={dataka}
    console.log(data.dataka);
    return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
        width={500}
        height={400}
        data={data.dataka}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
            <CartesianGrid strokeDasharray="10 0" stroke='' />
            <XAxis dataKey={x} stroke='#fff' />
            <YAxis stroke='#FFF'/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={value} stroke="#9290C3" activeDot={{ r: 8 }}/>
        </LineChart>
    </ResponsiveContainer>
    </>
)
}

export default Grafik