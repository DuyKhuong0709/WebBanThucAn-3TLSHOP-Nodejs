import React from "react";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";

// import file chart vừa tạo
import PieChar from "./chart";
// 
export default function DashBoard() {
  return (
    <section id="dashboard">
      <div className="dashboard" style={{borderStyle:"solid"}}>
        <div className="dashboard-top">
          <div className="dashboard-top-search">
            <form>
              <input placeholder="Tìm kiếm ..."></input>
              <span>
                <SearchOutlined></SearchOutlined>
              </span>
            </form>
          </div>
          <button className="nut"><a href="./" className="nn">Về Shop</a></button>
          <div className="dashboard-top-content">
            <li className="dashboard-top-content-avatar">
              <img className="aava" src="https://kampong.vn/wp/wp-content/uploads/2021/05/about_bg-scaled.jpg
"></img>
              <span >Admin</span>
            </li>
            <li className="dashboard-top-content-bell">
              <BellOutlined></BellOutlined>
            </li>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">120,000,000</span>
                  <span className="title">Tổng thu nhập</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">500</span>
                  <span className="title">Ghé thăm</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <DollarCircleOutlined></DollarCircleOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">280,000,000</span>
                  <span className="title">Tổng doanh thu</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <FileTextOutlined></FileTextOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1402</span>
                  <span className="title">Tổng đơn</span>
                </div>
              </li>
            </div>
          </div>
          {/* <ChartDashBoard></ChartDashBoard> */}
          

           {/* tên function của componet chart */}
          <PieChar></PieChar>
        </div>
        
        
        
        

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}
