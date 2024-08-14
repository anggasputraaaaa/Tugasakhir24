import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Content = ({ dataka, datake }) => {
  
  // Function to get the display value, handle error cases
  const displayValue = (value, unit) => {
    if (value === "0") {
      return "Error";
    } else if (value === "-1") {
      return "Error";
    }
    return `${value} ${unit}`;
  };

  return (
    <Card className="w-full overflow-auto h-[45%] bg-transparent shadow-2xl shadow-[#424769]">
      <table className="w-full min-w-max table-auto text-left bg-transparent">
        <thead>
          <tr>
            {datake.map((head) => (
              <th key={head} className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-4 bg-transparent">
                <Typography
                  variant="small"
                  color="white"
                  className="font-bold leading-none font-raleway"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataka.map((isi, index) => (
            <tr key={index} className="group">
              {isi.tanggal && <td className="p-4 group-hover:bg-[#676f9d] duration-300">
                <Typography variant="small" color="white" className="font-raleway font-bold">
                  {isi.tanggal}
                </Typography>
              </td>}
              {isi.waktu && <td className="p-4 group-hover:bg-[#676f9d] duration-300">
                <Typography variant="small" color="white" className="font-raleway font-bold">
                  {isi.waktu}
                </Typography>
              </td>}
              {isi.suhu && <td className="p-4 group-hover:bg-[#676f9d] duration-300">
                <Typography variant="small" color="white" className="font-raleway font-bold">
                  {displayValue(isi.suhu, '°')}
                </Typography>
              </td>}
              {isi.kelembaban && <td className="p-4 group-hover:bg-[#676f9d] duration-300">
                <Typography variant="small" color="white" className="font-raleway font-bold">
                  {displayValue(isi.kelembaban, '%')}
                </Typography>
              </td>}
              {isi.air && <td className="p-4 group-hover:bg-[#676f9d] duration-300">
                <Typography variant="small" color="white" className="font-raleway font-bold">
                  {displayValue(isi.air, 'cm')}
                </Typography>
              </td>}
              {isi.hujan && <td className="p-4 group-hover:bg-[#676f9d] duration-300">
                <Typography variant="small" color="white" className="font-raleway font-bold">
                  {displayValue(isi.hujan, 'mm')}
                </Typography>
              </td>}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Content;
