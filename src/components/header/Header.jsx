import {Link} from 'react-router-dom'
import style from './header.module.css'

const Header =(props)=>{
    return( 
        <header>
            <Link to='/'>
                <h1 className={style.logo}>IDANCE</h1>
            </Link>
          
            <nav>
                <Link to='/favourites'> 
                    <button className={style.nav_item}>FAVOURITES</button>
                </Link>
                <div className={style.cart_btn}>
                <button className={style.nav_item} onClick={props.openCart}>CART</button>
                <span className={style.count_cart_items}>{props.cartItems.length}</span>
                </div>
            </nav>
        </header>
    )
}

export default Header