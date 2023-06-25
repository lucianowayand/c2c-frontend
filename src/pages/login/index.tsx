import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import {Form} from '../ ../components/Form'

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

    return (
        <div className="h-screen flex">
            <div className="w-1/3 flex flex-col justify-center items-center overflow-hidden">
                <Form />
                <div id='bolinhas' className=' absolute bg-orange-700 h-32 w-1/3 bottom-0'></div>
            </div>
            <div className="bg-zinc-200 flex-1"></div>
        </div>
    )
}
