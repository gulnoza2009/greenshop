import React from "react";
import { Button, Heading3, Heading5, Logo } from "../../common";
// icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbMail } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-[23px] py-[27px] bg-grey dark:bg-slate-800">
        <div className="pr-[31px]">
          <img src="/img/gardencare.png" alt="" />{" "}
          <Heading3 styles="mt-[15px] mb-[9px]">Garden Care</Heading3>{" "}
          <Heading5>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </Heading5>
        </div>
        <div className="px-[31px] border-x">
          <img src="/img/plantrenovation.png" alt="" />
          <Heading3 styles="mt-[15px] mb-[9px]">Plant Renovation</Heading3>
          <Heading5>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </Heading5>
        </div>
        <div className="px-[31px]">
          <img src="/img/wateringgraden.png" alt="" />{" "}
          <Heading3 styles="mt-[15px] mb-[9px]">Watering Graden</Heading3>
          <Heading5>
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </Heading5>
        </div>
        <div className="pl-[31px]">
          <Heading3 styles="text-4">
            Would you like to join newsletters?
          </Heading3>
          <form className="flex my-[18px]">
            <input
              type="text"
              placeholder="Enter your email address..."
              className="w-[75%] py-[12px] px-[11px] rounded-[6px] text-black"
            />
            <Button styles="w-[25%] rounded-l-none">Join</Button>
          </form>
          <Heading5 styles="text-1">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </Heading5>
        </div>
      </div>
      <div className="flex gap-[60px] items-center px-[23px] py-[27px] bg-[#46A3581A]">
        <Logo />
        <div className="flex gap-[12px] items-center">
          <HiOutlineLocationMarker className="text-green w-[12.5px] h-[15px]" />
          <Heading5 styles="text-black">
            70 West Buckingham Ave. <br />
            Farmingdale, NY 11735
          </Heading5>
        </div>
        <div className="flex gap-[12px] items-center">
          <TbMail className="text-green w-[16px] h-[15px]" />
          <Heading5 styles="text-black">contact@greenshop.com</Heading5>
        </div>
        <div className="flex gap-[12px] items-center">
          <TbPhoneCall className="text-green w-[16px] h-[16px]" />
          <Heading5 styles="text-black">+88 01911 717 490</Heading5>
        </div>
      </div>
      <div className="flex justify-between items-center px-[23px] py-[31px] bg-grey dark:bg-slate-800 border-b">
        <div className="flex flex-col gap-[10px]">
          <Heading3>My Account</Heading3>
          <Heading5>My Account</Heading5>
          <Heading5>Our stores</Heading5>
          <Heading5> Contact us</Heading5>
          <Heading5>Career</Heading5>
          <Heading5>Specials</Heading5>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Heading3>Help & Guide</Heading3>
          <Heading5>Help Center</Heading5>
          <Heading5>How to Buy</Heading5>
          <Heading5>Shipping & Delivery</Heading5>
          <Heading5>Product Policy</Heading5>
          <Heading5>How to Return</Heading5>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Heading3>Categories</Heading3>
          <Heading5>House Plants</Heading5>
          <Heading5>Potter Plants</Heading5>
          <Heading5>Seeds</Heading5>
          <Heading5>Small Plants</Heading5>
          <Heading5>Accessories</Heading5>
        </div>
        <div className="flex flex-col gap-[22px]">
          <Heading3>Social Media</Heading3>
          <div className="flex gap-[10px]">
            <a href="https://facebook.com" target="_blank" className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]">
              <CgFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]">
              <BsInstagram />
            </a>
            <a href='https://twitter.com' target="_blank" className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]">
              <BsTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" className="flex items-center justify-center border border-[#46a35938] text-green rounded-[4px] w-[30px] h-[30px]">
              <FaLinkedinIn />
            </a>
          </div>
          <Heading3>We accept</Heading3>
          <img src="/img/collaborator.png" alt="" />
        </div>
      </div>
      <Heading5 styles='text-black py-[20px] text-center'>© 2023 GreenShop. Gulnoza</Heading5>
    </div>
  );
};
