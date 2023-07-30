import React from 'react'

const AddProductsPage = ({ addProducts }) => {
    const [ipputvalues, setIputvalues] = useState();
    const onHandleChange = (event) => {
        setIputvalues({ "name": event.target.value })
        setIputvalues({ "price": event.target.value })
    }
    const onHandleSubmit = (event) => {
        event.preventDefault();
        addProducts(ipputvalues)
    }
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" placeholder="name" onChange={onHandleChange} />
                <input type="text" placeholder="price" onChange={onHandleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProductsPage