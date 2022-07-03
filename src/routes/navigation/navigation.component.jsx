// import { ReactComponent as CrownLogo } from '../../assets/shopping-bag.svg'
import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { useSelector } from "react-redux"
import { selectIsCartOpen } from "../../store/cart/cart.selector"


const Navigation = () => {
  const currentUser = useSelector((state)=>state.userReducer.currentUser)

  // const { currentUser } = useContext(UserContext)
  const  isCartOpen  = useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>LOGO
          {/* LOGO <CrownLogo className='logo' /> */}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop' >SHOP</Link>
          {
            currentUser ?
              (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) : (
                <Link className="nav-link" to='/auth' >SIGN IN</Link>
              )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>

  )
}

export default Navigation