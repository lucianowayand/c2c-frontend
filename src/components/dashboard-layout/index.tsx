import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"

export default function DashboardLayout({ children, ignorePadding }: any) {
    const { user, isLoading, logOut } = useAuth()
    const [productName, setProductName] = useState('')
    const [dropdownMenu, setDropdownMenu] = useState(false)

    useEffect(() => {
        if(isLoading) return
        if(!user) {
            window.location.href = '/'
        }
        console.log(user)
    }, [user, isLoading])
    
    return (
        <>
        {!isLoading && user && (
            <div className=" flex flex-col h-screen bg-gray-300">
                <div className="bg-orange-600 h-24 w-screen flex flex-col items-center">
                    <div className=' absolute left-6 mt-6 flex flex-col gap-2 w-12 h-12' onClick={() => setDropdownMenu(!dropdownMenu)}>
                        <div className='w-full h-2 bg-white'></div>
                        <div className='w-full h-2 bg-white'></div>
                        <div className='w-full h-2 bg-white'></div>
                    </div>
                    {dropdownMenu && <div className="absolute flex flex-col bg-zinc-200 w-40 left-0 ml-20 mt-20 space-y-px">
                        <a href='' className="bg-zinc-100 p-1">Meus anúncios</a>    
                        <a href='' className="bg-zinc-100 p-1">Chat</a>  
                        <a onClick={logOut} className="bg-zinc-100 p-1 cursor-pointer">Logout</a>  
                    </div>}
                    <div className="w-1/3 flex justify-center">
                        <input className="w-96 h-12 mt-6 flex-none" type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                        <a className="h-12 w-12 bg-white mt-6 ml-2 flex-none" href={`/home?product-name=${productName}`}></a>
                    </div>
                    <a href="/home" className="absolute text-white font-black text-5xl right-0 mr-12 mt-5">C2C.</a>
                </div>
                <div className='w-screen flex flex-1 justify-center'>
                    <div className={`bg-white w-3/4 ${ignorePadding ? "" : "p-8"} flex justify-center`}>
                        {children}
                    </div>
                </div>
            </div>
        )}
        </>
)}