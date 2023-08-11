import { useSelector, useDispatch } from "react-redux";
import FruityCart from "./FruityCart";
import { addOne, removeOne } from "../features/fruitsCart";

/* Carousel */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Fruity() {
  const fruitsList = useSelector(state => state.fruits) 
  const dispatch = useDispatch()

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
        <h1 className="text-5xl text-slate-100 font-bold text-center">Fruity</h1>
        <p className="text-md text-slate-200 mb-10 text-center">Cultivez le plaisir de vos papilles avec notre oasis virtuelle de saveurs ! </p>
        
        <ul >
          <Carousel responsive={responsive} infinite={true} className="flex gap-4 mb-4 rounded">
            {fruitsList.list.map(fruit => (
              <div key={fruit.id} className="bg-slate-100 p-4 w-full">
                <img src={fruit.url} alt="fruit" className="w-full h-[300px] object-cover mb-3"/>
                  <div className="flex justify-between mb-4 items-baseline">
                    <h2 className="text-2xl mb-2 font-semibold">{fruit.name}</h2>
                    <p className="text-lg font-semibold">Par unité : {fruit.price} €</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => dispatch(addOne(fruit))} className="w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1 rounded text-lg">Ajouter</button>
                    <button onClick={() => dispatch(removeOne(fruit.id))} className="w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded text-lg">Enlever</button>
                  </div>
              </div>
              
            ))}
          </Carousel>
        </ul>
        <FruityCart />
    </>
  )
}
export default Fruity