"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Categories = () => {
    const [result, setResults] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const fetchData = async () => {
        const resp = await axios.get("https://fakestoreapi.com/products/categories");
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
        <div className="flex flex-col py-10 mx-40 justify-center mt-20 overflow-auto">
            <div className="flex justify-start text-red-600 text-xl font-bold border-l-red-600 border-l-[12px] pl-4">Categories</div>

            <div className="flex justify-start w-full  gap-60 mt-8 items-center  text-2xl">
                <div className="w-full">Browse By Category</div>
              
                <div className="flex justify-end w-full gap-2">
                    <button className="bg-[#F5F5F5] p-2 rounded-full" onClick={handleLeft}><HiOutlineArrowLeft className="h-5 w-5" /></button>
                    <button className="bg-[#F5F5F5] p-2 rounded-full" onClick={handleRight}><HiOutlineArrowRight className="h-5 w-5" /></button>
                </div>
            </div>
            <div className="flex justify-around gap-20 mt-16">
                {result.map((product, idx) => (
                    <div key={idx} className="flex flex-col justify-start items-center space-y-2">
                        
                        <div className="w-full rounded-lg border-black hover:border-white hover:text-white hover:bg-[#DB4444] py-6 px-4 border-[1px] flex justify-start">{(product)}</div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;