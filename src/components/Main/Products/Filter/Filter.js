import './Filter.css'

const Filter = ({inputRef, inputHand}) => {
    return(
        <input type='email' placeholder="Filter By Title Of Product" ref={inputRef} onChange={(e)=> {inputHand(e)}} />
    )
}
export default Filter