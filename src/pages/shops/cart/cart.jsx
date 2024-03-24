import { useSelector } from "react-redux";
import { Button, Heading3, Heading4, Input } from "../../../components/common";
import { CartItem } from "../../../components/pages/shop/cartItem/cartItem";

export const Cart = () => {
  const items = useSelector(state => state.flowers.items)
  return (
    <div className="flex justify-between gap-[85px]"> 
      <div className='basis-[65%]'>
        <div className="flex  py-[11px] border-b">
        <Heading3>Products</Heading3>
        <Heading3 styles='ml-[215px] mr-[65px]'>Price</Heading3>
        <Heading3>Quantity</Heading3>
        <Heading3 styles='ml-[100px]'>Total</Heading3>
        </div>
        <div>
          {items.length?items.map(item => <CartItem key={item.id} plant={item}/>):<Heading3 styles='text-center text-grey-2 text-9 mt-[20%]'>Cart is empty</Heading3>}
          {}
        </div>
      </div>
      <div className="basis-[35%]">
        <Heading3 styles="py-[11px] border-b">Cart Totals</Heading3>

        <Heading3 styles="font-normal text-2 my-[11px]">Coupon Apply</Heading3>
        <form className="flex border rounded-[7px] border-green mb-[30px]">
          <Input
            styles="rounded-r-[0px] border-none"
            placeholder="Enter coupon code here..."
          />
          <Button styles="rounded-l-[0px] px-[35px]">Apply</Button>
        </form>
        <div className="flex justify-between mb-[15px]">
          <Heading3 styles="text-3 font-normal">Subtotal</Heading3>
          <Heading3>$2,683.00</Heading3>
        </div>
        <div className="flex justify-between  mb-[15px]">
          <Heading3 styles="text-3 font-normal">Coupon Discount</Heading3>
          <Heading3>(-) 00.00</Heading3>
        </div>
        <div className="flex justify-between  mb-[15px]">
          <Heading3 styles="text-3 font-normal">Shiping</Heading3>
          <Heading3>$16.00</Heading3>
        </div>
        <Heading4 styles="text-1 font-normal text-right">
          View shipping charge
        </Heading4>
        <div className="flex justify-between my-[25px]">
          <Heading3>Total</Heading3>
          <Heading4>$2,699.00</Heading4>
        </div>
        <Button styles="w-full py-[12px]">Proceed To Checkout</Button>
        <Heading4 styles="font-normal text-3 text-center mt-[15px]">
          Continue Shopping
        </Heading4>
      </div>
    </div>
  );
};
