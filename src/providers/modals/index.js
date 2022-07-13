import { createContext, useState } from "react";

export const ModalContext = createContext([]);

export const ModalProvider = ({children}) =>{
    const [playAdd, setAdd] = useState(false);
    const [playEdit, setEdit] = useState(false);
    const [postId, setPostId] = useState("");


    return(
        <ModalContext.Provider value={{postId, setPostId, playAdd, setAdd, playEdit, setEdit }}>
            {children}
        </ModalContext.Provider>
    )
}