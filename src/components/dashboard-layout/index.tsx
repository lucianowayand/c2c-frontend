import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

export default function DashboardLayout({ children }: any) {
    const { user, isLoading } = useAuth()
    
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
                    <a href="" className=' absolute left-6 mt-6 flex flex-col gap-2 w-12 h-12'>
                        <div className='w-full h-2 bg-white'></div>
                        <div className='w-full h-2 bg-white'></div>
                        <div className='w-full h-2 bg-white'></div>
                    </a>
                    <div className="w-1/3 flex justify-center">
                        <input className="w-96 h-12 mt-6 flex-none" type="text" />
                        <a className="h-12 w-12 bg-white mt-6 ml-2 flex-none" href=""></a>
                    </div>
                    <a href="/home" className="absolute text-white font-black text-5xl right-0 mr-12 mt-5">C2C.</a>
                </div>
                <div className='w-screen flex justify-center h-screen'>
                    <div className="bg-white w-3/4 p-8 flex justify-center">
                        {children}
                    </div>
                </div>
            </div>
        )}
        </>
)}