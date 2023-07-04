import chatIcon from './assets/chatIcon.svg'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/dashboard-layout'
import ArrowLeft from '../../components/icons/ArrowLeft'
import ArrowRight from '../../components/icons/ArrowRight'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import ChatIcon from '../../components/icons/ChatIcon'
import { useAuth } from '../../context/AuthContext'

export default function ProductPage() {
    const {product_id} = useParams()
    const {user} = useAuth()
    const [product, setProduct]= useState<any>()

    useEffect(() => {
      getProductInfo()
    }, [])

    async function getProductInfo() {
      try {
        const res = await api.get(`/api/v1/products/${product_id}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    async function createChat() {
      try{
        const res = await api.post(`/api/v1/products/${product_id}/chat/${user?.id}`)
        const chat = res.data
        if (chat) {
          window.location.href = `/product/${product_id}/chat/${chat.id}`
        }
      } catch (error) {
        console.log(error)
      }

    }

    const [photoIndex, setPhotoIndex] = useState(0) 
    const productDate = moment(product?.owner?.createdAt).format("DD/MM/YYYY");
    const publishedAt = moment(product?.createdAt).format("DD/MM/YYYY") + " às " + moment(product?.createdAt).format("HH:mm");
    return (
        <DashboardLayout>
          <div className="flex w-full justify-center p-8 space-x-24 mt-12">
              {product && 
              <>
              <div className="flex flex-col gap-6">
                <div className="text-4xl font-semibold">{product?.name}</div>
                <div className="text-zinc-500">Publicado em: {publishedAt}</div>
                <div className="flex justify-center bg-zinc-300">
                    <div className='px-2 flex items-center'>
                      <div onClick={() => {
                        if (photoIndex !== undefined && photoIndex > 0) {
                            setPhotoIndex(photoIndex - 1)
                        }
                      }}
                      >
                        <ArrowLeft size={40} color={photoIndex !== undefined && photoIndex > 0 ? "currentColor" : "grey"} />
                      </div>
                    </div>
                    <img src={product?.photos[photoIndex].photo_url} width={500} height={400} alt="" />
                    <div className='px-2 flex items-center'>
                      <div onClick={() => {
                        if (photoIndex !== undefined && photoIndex < product?.photos.length - 1) {
                            setPhotoIndex(photoIndex + 1)
                        }
                      }}
                      >
                        <ArrowRight size={40} color={photoIndex !== undefined && photoIndex < product?.photos.length - 1 ? "currentColor" : "grey"} />
                      </div>
                    </div>
                </div>
                <div className="text-3xl">R$ {product?.value}</div>
                <div className="text-zinc-500 text-xl">{product?.description}</div>
            </div>
            <div className="flex flex-col border-2 border-orange-600 self-center p-8 w-80 gap-8">
                <div className="flex flex-col">
                    <div className="text-3xl self-center">{product?.owner.full_name}</div>
                    <div className="bg-zinc-500 w-full h-px mt-16"></div>
                </div>
                <div className="self-center font-semibold">Membro desde: {productDate}</div>
                <div className="self-center w-1/2 h-12 bg-orange-600 rounded-full flex items-center justify-center gap-3 mt-8 cursor-pointer"
                  onClick={createChat}
                >
                  <ChatIcon />
                  <div className="text-white text-xl">Chat</div>
                </div>
            </div>
            </>
            }
          </div>
        </DashboardLayout>
    )
}