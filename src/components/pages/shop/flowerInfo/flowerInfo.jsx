import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

// components
import {
  Button,
  Heading3,
  Heading4,
  Heading5,
  IncDecBtns,
} from "../../../common";
import { Description } from "./description";
// icon
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
// **********
import currentItem from "../../../../constants/currentItem.js";
import { priceFormatter } from "../../../../constants/priceFormatter";
import { flowersActions } from "../../../../store/flowers-slice";
import { toast } from "react-toastify";

export const FlowerInfo = ({plant,countLit,getCount}) => {
  const dispatch = useDispatch();

  const notify = () =>
    toast("Added to cart", {
      autoClose: 1000,
      theme: "light",
      className: "shadow-none border w-full",
    });
  const addToCartHandler=()=>{
    dispatch(flowersActions.addFlower({plant, countLit,directly:false}));
    notify();
  }
  return (
    <div className="mb-[100px]">
      <div className="flex gap-[50px]  my-[50px]">
        <div className="basis-1/2 p-[15px] shadow-md dark:bg-slate-800 flex flex-col items-end rounded-md">
          <img src={plant.imgUrl} alt={plant.name} className="w-full" />
        </div>
        <div className="basis-1/2">
          <Heading3 styles="text-8">{plant.name}</Heading3>
          <div className="flex items-center mt-[21px] mb-[15px] border-b">
            <Heading4 styles="text-7 basis-1/2">
              {
                priceFormatter(plant.price, plant.currency, plant.discount)
                  .priceWithDiscount
              }
            </Heading4>
            <div className="flex gap-[3px]">
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#FFAC0C" size={15} />
              <TiStarFullOutline color="#C4C4C4" size={15} />
            </div>
            <Heading3 styles="text-3 font-normal ml-[11px]">
              19 Customer Review
            </Heading3>
          </div>
          <Heading3 styles="text-3 font-medium my-[12.5px]">
            Short Description
          </Heading3>
          <Heading5>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </Heading5>
          <Heading3 styles="text-3 font-medium my-[12.5px]">Size:</Heading3>
          <div className="text-grey-1 text font-bold">
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              S
            </span>
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              M
            </span>
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              L
            </span>
            <span className="border w-[28px] mr-[10px] h-[28px] rounded-full inline-block text-center focus:text-green focus:border-green">
              XL
            </span>
          </div>
          <div className="flex items-center justify-between  my-[25px]">
            <IncDecBtns getCount={getCount} initial={countLit}/>
            <Button styles="py-[10px] px-[32px]">BUY NOW</Button>
            <button
              onClick={addToCartHandler}
              className="py-[10px] border rounded-[6px] border-green text-green   px-[32px]"
            >
              ADD TO CART
            </button>
            <button className="text-green border border-green p-[10px] rounded-[6px]">
              {plant.liked ? (
                <IoHeart className="fill-green" />
              ) : (
                <FaRegHeart size={20} />
              )}
            </button>
          </div>
          <Heading5 styles="mb-[10px]">
            <span className="text-grey-2">SKU:</span>1995751877966
          </Heading5>
          <Heading5 styles="mb-[10px]">
            <span className="text-grey-2">Categories:</span>Potter Plants
          </Heading5>
          <Heading5 styles="mb-[10px]">
            <span className="text-grey-2">Tags:</span>Home, Garden, Plants
          </Heading5>
          <div className="flex gap-[20px]">
            <Heading3 styles="text-3">Share this products:</Heading3>
            <a href="https://facebook.com" target="_blank">
              <CgFacebook className="dark:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <BsTwitter className="dark:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="dark:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <BsInstagram className="dark:text-white" />
            </a>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
};
