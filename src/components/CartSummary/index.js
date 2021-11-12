import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.quantity * eachCartItem.price
      })

      return (
        <div className="cart-summary-container">
          <h1 className="total-heading">
            <span className="span-element">Order Total: </span>Rs
            {total}/-
          </h1>
          <p className="cart-items-length">{cartList.length} items in cart</p>
          <button type="button" className="checkout-button sm-none">
            Checkout
          </button>

          <button type="button" className="checkout-button lg-none">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
