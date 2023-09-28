import master from './Product.module.css'
const Product = ({myProduct, theColor, deleteFunc}) => {
    return (
        <div className={myProduct.price >= 10? master.Product: master.ProductGold}>
            <img src={myProduct.image} alt=""/>
            <h1 style={{color:"#333",margin: "10px 5px 15px",fontSize: "20px"}}>{myProduct.title}</h1>
            <p>{myProduct.description}</p>
            <p>{myProduct.price}</p>
            <button style={{padding:"10px 30px", backgroundColor: theColor, margin:"10px auto", color:"#fff", border:"none"}}>Buy</button>
            <span className={master.deleteBtn} onClick={(event) => {
                deleteFunc(event, myProduct.id)
                // console.log(event.target)
            }}>X</span>
        </div>
    )
}

export default Product