import React , { useState} from "react"
import style from './card.module.css'
import { AppContext } from "../../../App"

const Card =(props) =>{

  const context = React.useContext(AppContext)

  let id = props.id;
  let myId = props.myId;

  const onClickPlus = () =>{

    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({id,myId,title,description,price,img});
  }

  const onClickFavourite = () =>{
    const isAdded = context.itemFavourite({id,myId});
    if(isAdded){
      let id = props.id
    let myId = props.myId
    props.onFavourite({id,myId});
    }
    else{

    let key = props.key;
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onFavourite({id,myId,title,description,price,img});
    }
  }

    return(
        <div className={style.product_item}> 
          {context.itemFavourite({id,myId}) === true ? <button onClick={onClickFavourite} className={style.favourite_btnNew} >Remove from Favourites</button> 
           : <button className={style.favourite_btn} onClick={onClickFavourite}>Add to Favourites</button>
           }
            <img className={style.product_img} src={props.img} alt={props.title}></img>
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Price</p>

            <div className={style.product_price}> 
              <span>${props.price}</span>
              <button className={context.itemAdded({id, myId}) ? style.check_btn : style.addCart} onClick={onClickPlus}>
              <img src={context.itemAdded({id, myId}) ? '/img/check.png' : '/img/plus.png'}/>
              </button>
              </div>
       
          </div>  
    ) 
}
export default Card