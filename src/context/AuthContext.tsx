import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
    id: number;
    full_name: string;
    email: string;
}

interface AuthContextValues {
    user: User | null | undefined;
    setUser: (user: User | null) => void;
    logOut: () => void;
    logIn: (email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextValues>({
    user: undefined,
    setUser: () => { },
    logOut: () => { },
    logIn: () => { }
})

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        refreshSession()
    }, [])

    // Printing user for debugging purposes
    useEffect(() => {
        console.log(user)
    }, [user])

    function refreshSession(jwt?: string) {
        let token = "" 
        if(!jwt) {
            token = localStorage.getItem('session') || ""
        }
        if (jwt) {
            token = jwt
        }
        if(token && token !== ""){
            const payload = token.split(".")[1];
            const user = JSON.parse(atob(payload))
            setUser({
                id: user.sub,
                full_name: user.full_name,
                email: user.email
            })
        }
    }

    async function logIn(email: string, password: string) {
        try {
            const res = await api.post('api/v1/users/login', { email, password })
            if (res.data) {
                localStorage.setItem('session', res.data)
                refreshSession(res.data)
            }

        } catch (error) {
            alert(error)
        }
    }
    
    function logOut() {
        setUser(null);
        localStorage.removeItem('session')
        window.location.href = '/'
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logOut, logIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { useAuth, AuthProvider };