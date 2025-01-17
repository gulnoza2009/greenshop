import { v4 as uuidv4 } from "uuid";

export const plants = [
  {
    id: uuidv4(),
    type: "House Plants",
    name: "Barberton Daisy",
    price: 119,
    currency: "USD",
    imgUrl: "https://i.ibb.co/GR6BT8M/image-1.png",
    discount: 0,
    size: "small",
    date: new Date().toLocaleString(),
    liked: true,
  },
  {
    id: uuidv4(),
    type: "Potter Plants",
    name: "Angel Wing Begonia",
    price: 169,
    currency: "USD",
    imgUrl: "https://i.ibb.co/gS7sWT9/product-21-320x320-1.png",
    discount: 0,
    size: "medium",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "seeds",
    name: "African Violet",
    price: 229,
    currency: "USD",
    imgUrl: "https://i.ibb.co/Msq64Zb/image-2.png",
    discount: 13,
    size: "large",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "Small Plants",
    name: "Beach Spider Lily",
    price: 129,
    currency: "USD",
    imgUrl: "https://i.ibb.co/GMtSkw0/01-3.png",
    discount: 0,
    size: "large",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "Succulents",
    name: "Blushing Bromeliad",
    price: 139,
    currency: "USD",
    imgUrl: "https://i.ibb.co/Y3BMNXm/image-7.png",
    discount: 0,
    size: "medium",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "Trerrariums",
    name: "Aluminum Plant",
    price: 179,
    currency: "USD",
    imgUrl:
      "https://i.ibb.co/FqvGNT5/144753-purple-pot-flower-free-clipart-hd.png",
    discount: 0,
    size: "medium",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "Gardening",
    name: "Bird's Nest Fern",
    price: 99,
    currency: "USD",
    imgUrl: "https://i.ibb.co/KXsmYW3/image-9.png",
    discount: 0,
    size: "medium",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "Gardening",
    name: "Broadleaf Lady Palm",
    price: 59,
    currency: "USD",
    imgUrl: "https://i.ibb.co/9GGfXX7/product-20-320x320-1.png",
    discount: 0,
    size: "medium",
    date: new Date().toLocaleString(),
    liked: false,
  },
  {
    id: uuidv4(),
    type: "Accesories",
    name: "Chinese Evergreen",
    price: 39,
    currency: "USD",
    imgUrl: "https://i.ibb.co/vHt9Lrk/image-10.png",
    discount: 0,
    size: "medium",
    date: new Date().toLocaleString(),
    liked: false,
  },
];
