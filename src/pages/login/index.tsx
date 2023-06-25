import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import './style.css'

export default function Login() {
    const { logIn, user } = useAuth()
    const { width } = useWindowDimensions()

    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    useEffect(() => {
        if (user) window.location.href = '/dashboard'
    }, [user])

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        logIn(email, password)
    }

    return <div className="bg-blue-400">
        <h1>Teste</h1>
        </div>
}