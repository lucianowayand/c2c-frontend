import DashboardLayout from "../../components/dashboard-layout"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { api } from "../../services/api"

export default function MyChats() {
  const { user } = useAuth()

  useEffect(() => {
    if(user){
      getOwnerChats()
      getBuyerChats()
    }
  }, [user])

  const [ownerChats, setOwnerChats] = useState<any[]>([])
  async function getOwnerChats() {
    try {
      const res = await api.get(`/api/v1/products/chat/owner/${user?.id}`)
      console.log(res.data)
      setOwnerChats(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [buyerChats, setBuyerChats] = useState<any[]>([])
  async function getBuyerChats() {
    try {
      const res = await api.get(`/api/v1/products/chat/buyer/${user?.id}`)
      setBuyerChats(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  return(
    <DashboardLayout>
        <div className="bg-white p-6 flex flex-col space-y-8">
            <div className='flex flex-row w-full'>
                <div className="text-4xl font-bold">Minhas conversas</div>
            </div>
            <div className='flex flex-row w-full'>
                <div className="text-3xl font-semibold mt-6">Meus anúncios</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {ownerChats?.map((chat) => (
                <a key={chat.id} href={`/product/${chat?.product.id}/chat/${chat.id}`} className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                    <img src={chat.product.photos[0].photo_url} width={200} height={12} alt="" />
                    <div className="flex flex-col justify-center items-center p-16">
                        <p className="text-xl">{chat.product.name}</p>
                        <p className="text-xl">{chat.buyer.full_name}</p>                                   
                    </div>
                </a>
              ))}
                
            </div>
            <div className='flex flex-row w-full'>
                <div className="text-3xl font-semibold">Anuncios de terceiros</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {buyerChats?.map((chat) => (
                chat.product && (
                <a key={chat.id} href={`/product/${chat?.product?.id}/chat/${chat.id}`} className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                  <img src={chat.product?.photos[0].photo_url} width={200} height={12} alt="" />
                  <div className="flex flex-col justify-center items-center p-16">
                      <p className="text-xl">{chat.product?.name}</p>                                   
                      <p className="text-xl">{chat.product?.owner.full_name}</p> 
                  </div>
                </a>
              )
              ))}
            </div>
        </div>
    </DashboardLayout>
  )
}