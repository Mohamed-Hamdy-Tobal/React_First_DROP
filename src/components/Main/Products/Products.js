import React, { useEffect, Fragment, useState, useRef} from "react";
import Product from "./Product/Product";
// import products_data from '../../../Products-Data'
import master from './Products.module.css'
import Filter from "./Filter/Filter";
import Modal from "../../Modal/Modal";

function Products() {
    const [data, setData] = useState([])

    
    useEffect(() => {
        console.log("MY DATA")
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=>setData(data))
    }, [])

    const deleteHandler = (event, clickIdx) => {
        console.log(clickIdx)
        setData((prevState) => {
            return prevState.filter((ele,idx) => ele.id !== clickIdx)
        })
    }

    // -----------------------------------------------

    const inputVal = useRef(null)

    const [filter, setFilter] = useState("")

    const inputHand = (e) => {
        setFilter(e.target.value)
        console.log(e.target.value)
    }
    const nameHandler = () => {
        if (filter.length !== 0) {
            return data.filter((el) => el.title.toLowerCase().includes(filter.toLowerCase()))
        }
        return data
    }
    const filteredData = nameHandler();
    const products_LT_100 = filteredData.map(({id, price,...otherProps}) => {
        return(
            price <= 100 ? <Product myProduct={{id, price,...otherProps}} key={id}  theColor='teal' deleteFunc={deleteHandler}/> : null
        )
    })
    const products_GT_100 = filteredData.map(({image, title, description, price, id}) => {
        return(
            price > 100 ? <Product myProduct={{image, title, description, price, id}} key={id}  theColor='teal' deleteFunc={deleteHandler}/> : null
        )
    })

    const [proToggle, setToggle] = useState(true)

    // ---------------------------------------------

    const [showModel, setShow] = useState(false)

    const showFunc = () => {
        setShow(!showModel)
        console.log(showModel)
    }

    const newUser = (dataNew) => {
        setData((prevState) => {
            return [...prevState, dataNew]
        })
        console.log(dataNew)
        console.log(data.length)
    }

    return (
        <Fragment>
            <Modal show={showModel} showF={showFunc} newUser={newUser} myLen={data.length}/>
            <Filter inputRef={inputVal} inputHand={inputHand} />
            <button className={master.btnShow} onClick={() => {setToggle(!proToggle)}} style={{marginRight:"20px"}}>{proToggle? "Hide Elements":"Show Elements"}</button>
            <button className={master.btnShow} onClick={() => {setShow(!showModel)}}>New Record</button>
            <div className={proToggle? master.show:master.hide}>
                <section>
                    <h1 className="title-pro">Products That Are Less Than 100</h1>
                    <div className={master.Products}>
                        {products_LT_100}
                    </div>
                </section>
                <section>
                    <h1 className="title-pro">Products That Are Grater Than 100</h1>
                    <div className={master.Products}>
                        {products_GT_100}
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
export default Products