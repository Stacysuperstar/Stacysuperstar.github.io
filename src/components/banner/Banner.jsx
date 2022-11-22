import style from './banner.module.css'

const Banner =() =>{
    return(
    <div className={style.banner_section}>
      <div className={style.banner}>
        <p className={style.text_banner}>
            Best prices 
            <br />
            <span>for all dance shoes</span>
            <br />
            <button className={style.banner_btn}>Buy a pair of shoes</button>
        </p>
      </div>
    </div>
    )
}
export default Banner