import { Releted } from "../../../components/pages/shop"
import {Outlet} from 'react-router-dom'

export const Shop = () => {
  return (
    <>
      <Outlet/>
      <Releted/>
    </>
  )
}
