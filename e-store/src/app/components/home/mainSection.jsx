"use client";
import React, { useState, useEffect } from 'react';
import { Component } from './Carousel';
export function MainSection() {
    return (
        <div className='flex justify-center mt-10 gap-8'>
            <div className='border-r-2 pr-16'>
                <ul className='flex flex-col gap-5'>
                    <li>Women's Fashion</li>
                    <li>Men's Fashion</li>
                    <li>Electronics</li>

                    <li>Home & Lifestyle</li>

                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby's & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>
           <div className=''>
           <Component />
           </div>
        </div>
    );
}

export default MainSection;