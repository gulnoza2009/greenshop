import { useSelector } from "react-redux"

const currentItem = (id)=>{
    const {plants} = useSelector(state=>state.data)
    const flower=plants.find(plant=>plant.id==id)
    return flower?flower:plants[0]
}

export default currentItem