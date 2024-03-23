import React, { useEffect, useState } from 'react';
import { quanLyPhimServ } from "../../services/quanLiPhim";

const ListMovie = () => {
    const [arrMovie,setArrMovie] = useState([]);
    useEffect(() => {
        quanLyPhimServ.getAllMovie()
        .then((res) => {
            console.log("🚀 ~ quanLyPhimServ.getAllMovie ~ res:", res)
            setArrMovie(res.data.content);
        })
        .catch((err) => {
            console.log("🚀 ~ useEffect ~ err:", err)
            
        })
    },[]);
  return (

    <div className='grid grid-cols-5 gap-10'>
        {arrMovie.map((item,index) => {
            return(
                <div className='movie_item space-y-4'>
                    <img className='w-full h-96 object-cover rounded' src={item.hinhAnh} alt="" />
                    <h3 className='mb-3'>
                        <span className="bg-orange-500 text-white rounded py-1 px-2 text-lg font-semibold mr-3">C18</span>
                        <span className='text-lg font-semibold'>
                            {item.tenPhim}
                        </span>
                        
                    </h3>
                    <p className='line-clamp-2'>{item.moTa}</p>

                </div>
            )
        })}
    </div>
  )
}

export default ListMovie