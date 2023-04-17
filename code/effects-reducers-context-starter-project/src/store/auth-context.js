import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    inLogin: (login, pass) => {},
    onLogout: () => {},
})
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    useEffect(()=>{
        const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn');
        if (isLoggedInLocalStorage === "1"){
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            setIsLoggedIn,
            inLogin: loginHandler,
            onLogout: logoutHandler,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext