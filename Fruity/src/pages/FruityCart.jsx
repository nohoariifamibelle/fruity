import { useSelector, useDispatch } from "react-redux";
import fruitsCart from "../features/fruitsCart";
import { removeAll, removeFruit } from "../features/fruitsCart";

function FruityCart() {
  const fruityCart = useSelector(state => state.fruitsCart);
  const dispatch = useDispatch()
  return (
    <div className="bg-slate-100 rounded">
        <p className="text-xl p-5 border-b border-slate-300">Votre panier de fruits : </p>
        <ul>
          {fruityCart.cart.length > 0 && fruityCart.cart.map(fruit => (
            <li key={fruit.id} className="px-5 py-2 text-xl">
              {fruit.quantity > 0 && (
                <div>
                  <span className="font-semlibold mr-2">{fruit.quantity}</span>
                  <span>{fruit.name}</span>
                  <button onClick={() => dispatch(removeFruit(fruit.id))} className="bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded m-2"> X </button>
              </div>
              )}
            </li>
          ))}
        </ul>
        <p className="text-xl p-5 border-t border-slate-400">Total du panier : 
        {fruityCart.cart.length > 0 ? (<span className="font-bold ml-2">{fruityCart.cart.reduce((acc, item) => item.price * item.quantity + acc, 0)} €</span>) : <span className="font-bold ml-2">0 €</span>}</p>
        <button onClick={() => dispatch(removeAll())} className="bg-red-600 hover:bg-red-500 text-slate-100 p-2 rounded text-lg m-2">Supprimer tout le panier</button>
    </div>
  )
}
export default FruityCart