import React from "react";
import { Heading3, Heading4, Heading5, IncDecBtns } from "../../../common";
import { AiOutlineDelete } from "react-icons/ai";
import { priceFormatter } from "../../../../constants/priceFormatter";
import { useDispatch } from "react-redux";
import { flowersActions } from "../../../../store/flowers-slice";

export const CartItem = ({ plant }) => {
  const dispatch = useDispatch();

  const getCount = (countLit) => {
    dispatch(flowersActions.addFlower({ plant, countLit, directly: true }));
  };
  return (
    <div className="bg-grey dark:bg-slate-800 p-[10px] flex items-center justify-between mt-[11px]">
      <div className="flex items-center w-[40%] gap-[15px]">
        <img
          src={plant.imgUrl}
          alt={plant.name}
          className="w-[70px] h-[70px]"
        />
        <div>
          <Heading3 styles="text">{plant.name}</Heading3>
          <Heading5>SKU: <span className="text-[10px] text-black">{plant.id}</span></Heading5>
        </div>
      </div>

      <Heading4 styles='w-[15%]'>
        {
          priceFormatter(plant.price, plant.currency, plant.discount)
            .priceWithDiscount
        }
      </Heading4>
      <div className="flex items-center gap-[15px] w-[25%]">
        <IncDecBtns initial={plant.count} getCount={getCount} />
      </div>
      <Heading4 styles='w-[20%]'>
        {
          priceFormatter(
            plant.price * plant.count,
            plant.currency,
            plant.discount
          ).priceWithDiscount
        }
      </Heading4>
      <AiOutlineDelete className="text-grey-1" />
    </div>
  );
};
