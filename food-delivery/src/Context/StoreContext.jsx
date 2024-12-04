import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const  StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cardItems, setCardItems] = useState({});

    const addToCart = (itemId) => {
        if(!cardItems[itemId]){
            setCardItems((prev) => ({...prev,[itemId]: 1}))
        }
    }

    const contextValue = {
        food_list
    }



    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;