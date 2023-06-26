import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import myImage from './assets/shopping-bags.svg'

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
            <form className="flex flex-col gap-5 w-96 mb-44">
                <label>
                    <div className="text-orange-600 font-bold text-2xl">EMAIL</div>
                    <input className="border-2 border-orange-600 h-12 w-full p-1" type="text" name="name" />
                </label>
                <label>
                    <div className="text-orange-600 font-bold text-2xl">SENHA</div>
                    <input className="border-2 border-orange-600 h-12 w-full p-1" type="password" name="password" />
                </label>
                <input className="bg-orange-600 text-white rounded-xl w-72 h-10 self-center mt-16 text-xl hover:bg-orange-500" type="submit" value="Entrar" />
                <a className='self-center text-orange-600 font-bold' href="">Esqueci minha senha</a>
            </form>
            <div id='bolinhas' className=' absolute bg-orange-600 h-32 w-1/3 bottom-0'></div>

            </div>
            <div className="bg-zinc-100 w-1/4">
                <div className="text-orange-600 text-8xl font-black ml-12 mt-12">C2C.</div>
                <div className="text-orange-600 text-3xl font-bold ml-12">CONSUMER-2-CONSUMER</div>
            </div>
            <div className="bg-zinc-100 flex flex-1 items-center">
                <div className="flex items-center justify-center">
                    <img className="absolute mt-12" src={myImage} alt="shopping bags" />
                    <div className="h-96 w-96 rounded-full bg-orange-600 mb-32 "></div>
                </div>
            </div>
        </div>
      )
}
