import Banner from './banner/Banner';
import Products from './products/Products';
import About from './about/About';
import SliderAbout from './slider/Slider.jsx';


const Home = (props) => {
    return(
        <>
          <SliderAbout />
          
          <About />

          <Products 
          items={props.items} 
          cartItems={props.cartItems} 
          setCartItems={props.setCartItems}
          search={props.search}
          setSearch={props.setSearch}
          favouriteItems={props.favouriteItems}
          setFavouriteItems={props.setFavouriteItems}
          />
        </>
    )

}

export default Home