import React from "react"
import axios from "axios"
import Card from "./card/Card"
import style from './products.module.css'

const Products =(props) =>{
    
    const onAddToCart= async (obj) =>{
        try{
            const findCartItem = props.cartItems.find((cartItem)=>cartItem.myId===obj.myId)
            
            if(findCartItem)
            {
                axios.delete(`https://63567cd6a2d1844a9775f1f2.mockapi.io/cart/${findCartItem.id}`)
                props.setCartItems(prev=>prev.filter(cartItem=>cartItem.myId!==obj.myId))
            }
            else{
                const {data} =  await axios.post('https://63567cd6a2d1844a9775f1f2.mockapi.io/cart', obj)
                props.setCartItems([...props.cartItems,data]);
            }
    }
        catch{
            alert('We could not add the item to your cart')
        }
    }

    const onAddToFavourite = async (objFavourite) =>{
      try{
        const findFavouriteItem = props.favouriteItems.find(favouriteItem =>favouriteItem.myId === objFavourite.myId)
        if (findFavouriteItem){
            axios.delete(`https://63567cd6a2d1844a9775f1f2.mockapi.io/favourites/${findFavouriteItem.id}`)
            props.setFavouriteItems(prev=>prev.filter(favouriteItem=>favouriteItem.myId!==objFavourite.myId))
        }
        else {
           const {data} = await axios.post('https://63567cd6a2d1844a9775f1f2.mockapi.io/favourites', objFavourite)
            props.setFavouriteItems([...props.favouriteItems, data]);
        }
    }
    catch{
        alert('We could not add the item to your favourites')
    }
     }

    const onSearchInput=(inputValue) =>{
        props.setSearch(inputValue.target.value)
    }
    
    return(

        <div className={style.products_section}>

        <div className={style.search}>

            <h2>{props.search ? `Searching: ` + props.search : "Shoe line-up"}</h2>
            <div className={style.search_block}>
                <img src="/img/search.png" alt="" />
                <input onChange={onSearchInput} placeholder="Item Search" />
            </div>
        </div>
        
        <div className={style.products}> 
         {
          props.items.filter((item)=> item.title.toLowerCase().includes(props.search.toLowerCase())).map( (obj, index) =>{
            return(
                <Card 
                key={index}
                {...obj}           
                        
                onFavourite={
                    (objFav)=>{
                        onAddToFavourite(objFav)
                    }
                }
                onPlus={
                    (cartObj) => {
                        onAddToCart(cartObj)
                }
            }
            />
            )
        })
        }
        </div>
        </div>
   )
    }

export default Products