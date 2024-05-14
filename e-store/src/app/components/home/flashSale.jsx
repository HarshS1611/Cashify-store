"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Sale = () => {
    const [result, setResults] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const fetchData = async () => {
        const resp = await axios.get("https://fakestoreapi.com/products?limit=10");
        setResults(resp.data);
        setTotalProducts(resp.data.length);
    };

    useEffect(() => {
        if (result.length === 0) {
            fetchData();
        }
    }, []);

    const handleRight = () => {
        if (currentIndex != totalProducts - 1 && currentIndex <= 4)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProducts);
    };

    const handleLeft = () => {
        if (currentIndex > 0)
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts);
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [result]);

    return (
        <div className="flex flex-col mx-40 justify-center mt-20 overflow-auto">
            <div className="flex justify-start text-red-600 text-xl font-bold border-l-red-600 border-l-[12px] pl-4">Today's</div>

            <div className="flex justify-start w-full  gap-60 mt-8 items-center  text-2xl">
                <div className="w-80">Flash Sales</div>
                <div className="flex gap-2">
                    <p className="flex flex-col text-xs">Days <span className="text-2xl font-bold">03</span></p>
                    <p className="flex items-end mb-[2px]">:</p>
                    <p className="flex flex-col text-xs">Hours <span className="text-2xl font-bold">03</span></p>
                    <p className="flex items-end mb-[2px]">:</p>

                    <p className="flex flex-col text-xs">Minutes <span className="text-2xl font-bold">03</span></p>
                    <p className="flex items-end mb-[2px]">:</p>

                    <p className="flex flex-col text-xs">Seconds <span className="text-2xl font-bold">03</span></p>
                </div>
                <div className="flex justify-end w-full gap-2">
                    <button className="bg-[#F5F5F5] p-2 rounded-full" onClick={handleLeft}><HiOutlineArrowLeft className="h-5 w-5" /></button>
                    <button className="bg-[#F5F5F5] p-2 rounded-full" onClick={handleRight}><HiOutlineArrowRight className="h-5 w-5" /></button>
                </div>
            </div>
            <div className="flex justify-around gap-20 mt-16">
                {result.slice(currentIndex, currentIndex + 5).map((product, idx) => (
                    <div key={idx} className="flex flex-col justify-start items-center space-y-2">
                        <div className="relative rounded-md bg-[#F5F5F5] p-5">
                            <CiHeart className="absolute bg-white rounded-full h-6 w-6 -mt-4 right-2" />
                            <MdOutlineRemoveRedEye className="absolute bg-white rounded-full h-6 w-6 top-8 right-2" />
                            <img className=" w-44 h-44" src={product.image} alt={product.title} /></div>
                        <div className="w-full flex justify-start">{(product.title).substring(0, 20)}</div>
                        <div className="w-full flex justify-start">{product.price}</div>
                        <div className="w-full text-sm flex justify-start">{product.rating.rate} ({product.rating.count})</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sale;