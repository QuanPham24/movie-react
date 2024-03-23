import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import "./LichChieuPhim.scss";
import moment from "moment";

const LichChieuPhim = ({ lichChieu }) => {
  console.log(lichChieu);
  // const [arrLichChieu, setArrLichChieu] = useState([]);
  // setArrLichChieu(lichChieu);
  // console.log(arrLichChieu);
  return (
    <div>
      <Tabs
        className="tab_cum_rap"
        tabPosition="left"
        style={{ height: "700px" }}
        items={lichChieu.map((item, index) => {
          return {
            label: (
              <div className="text-left uppercase label_cumrap">
                <h4 className=" text-green-600 font-medium text-lg">
                  {item.tenCumRap}
                </h4>
                <p className="text-gray-500 truncate text-xs">{item.diaChi}</p>
              </div>
            ),
            key: index,
            children: (
              <div>
                {item.danhSachPhim.map((phim, index) => {
                  const gioChieuPhim = phim.lstLichChieuTheoPhim.slice(0, 4);

                  return (
                    phim.dangChieu && (
                      <div key={index} className="flex my-10">
                        <div>
                          <img src={phim.hinhAnh} alt="" className="w-36 h-full"/>
                        </div>
                        {/* ten phim */}
                        <div className="ml-5">
                        <div>
                          <h3 className="mb-3">
                            <span className="bg-orange-500 text-white rounded py-1 px-2 text-lg font-semibold mr-3">
                              C18
                            </span>
                            <span className="text-lg font-semibold">
                              {phim.tenPhim}
                            </span>
                          </h3>
                        </div>
                        {/* suat chieu */}
                        <div className="grid grid-cols-2 gap-5">
                          {gioChieuPhim.map((gio, index) => {
                            return (
                              <div>
                                <p className="space-x-3">
                                  {/* {gio.ngayChieuGioChieu} */}
                                  {/* ngay thang */}
                                  <span>{moment(gio.ngayChieuGioChieu).format("DD-MM-YYYY")} </span>
                                  ~
                                  {/* gio chieu */}
                                  <span>{moment(gio.ngayChieuGioChieu).format("hh:mm")}</span>
                                </p>
                              </div>
                            );
                          })}
                          <div></div>
                        </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LichChieuPhim;
