const productReducer = (state, action) => {
    switch (action.type) { 
        case "ADD_PRODUCT":
            return [...state, {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price,
                buy: false
            }]
        
        case "REMOVE_PRODUCT":
            return state.filter(product => product.id !== action.payload.id)
        
        case "BUY_PRODUCT":
            return state.map(product => product.id === action.payload.id ? {...product, buy: !product.buy} : product)
        
        default:
            return state
    }
 }

export default productReducer
