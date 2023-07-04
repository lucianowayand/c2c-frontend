import { useEffect, useState } from "react"
import ArrowLeft from "../../components/icons/ArrowLeft"
import SendMessage from "../../components/icons/SendMessage"
import DashboardLayout from "../../components/dashboard-layout"
import { api } from "../../services/api"
import { useParams } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function Chat() {
  const { product_id, chat_id } = useParams()
  const { user } = useAuth()

  const [product, setProduct] = useState<any>()
  async function getProductInfo() {
    try {
      const res = await api.get(`/api/v1/products/${product_id}`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [messages, setMessages] = useState<any[]>([])
  async function getChatMessages() {
    try {
      const res = await api.get(`/api/v1/products/chat/${chat_id}/message`)
      setMessages(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  // Call the function every 3 seconds
  useEffect(() => {
    const interval = setInterval(getChatMessages, 500);
    // Clean up the interval when the component unmounts to avoid memory leaks.
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getProductInfo()
    getChatMessages()
  }, [])

  async function sendMessage() {
    await api.post(`/api/v1/products/user/${user?.id}/chat/${chat_id}/message`, {
      message: message,
    }) 
    setMessage("")
    getChatMessages()
  }

  type TMessage = {
    createdAt: string
    id: string
    sender_id: string
    text: string
  }
  function MessageBox({message}: {message: TMessage}) {
    const userIsMessageOwner = message.sender_id === user?.id
    return (
      <div className="flex">
          {userIsMessageOwner && <div className="flex-1" />}
          <div className={`flex flex-col ${userIsMessageOwner ? "bg-orange-200" : "border border-orange-600"} rounded-md p-4`}>
              <p>{message.text}</p>
          </div>
          {!userIsMessageOwner && <div className="flex-1" />}
      </div>
    )
  }

  const [message, setMessage] = useState<string>("")  
  return (
    <DashboardLayout ignorePadding={true}>
    <div className='h-full flex flex-1 flex-col justify-center items-center'>
        <div className="bg-white w-full p-8 flex flex-1 justify-center">
            <div className="flex flex-col w-full">
                <div className="flex items-center">
                    <a href={`/product/${product_id}`} className="flex self-start"><ArrowLeft size={48} color='black' /></a>
                    <p className="text-3xl font-bold">{product?.name} - </p>
                    <p className="text-3xl font-bold ml-2">R$ {product?.value} </p>
                </div>
                <div className="flex flex-1 flex-col mt-32 gap-4">
                    {messages?.map((message) => (
                      <MessageBox message={message} />
                    ))}
                </div>
            </div>
        </div>
        <div className="flex h-12 w-full bg-orange-600 items-center justify-center space-x-40">
            <div className="w-5/6">
                <form className="flex">
                    <input 
                        id="text-area"
                        className="border-2 rounded-md h-9 w-full p-1" 
                        type="text" 
                        maxLength={50}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>                                
            </div>
            <div onClick={sendMessage}>
                <SendMessage size={32} color='white' />
            </div>
        </div>
    </div>
    </DashboardLayout>
  )
}