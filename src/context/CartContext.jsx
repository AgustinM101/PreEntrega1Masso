import {createContext} from 'react'


export const CartContext = createContext()


const CartContextProvider = () => {
    const [cart,setCart] = useState([])
    const agregarAlCarrito = () => {}
    const eliminarDelCarrito = () => {}
    const vaciarCarrito = () => {}

  return (
  <CartContext.Provider value={{
    cart:cart,
  }}> 
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider