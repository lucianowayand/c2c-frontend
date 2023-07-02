import chatIcon from './assets/chatIcon.svg'
import arrowLeft from './assets/arrow-left.svg'
import arrowRight from './assets/arrow-right.svg'
import { useState } from 'react'
import DashboardLayout from '../../components/dashboard-layout'
import ArrowLeft from '../../components/icons/ArrowLeft'
import ArrowRight from '../../components/icons/ArrowRight'

export default function ProductPage() {
    const mockProduct = {
        id: "7d30bd81-a84a-4348-982c-5cda7e4eb48e",
        createdAt: "2023-07-02T01:25:53.377Z",
        updatedAt: "2023-07-02T01:25:53.377Z",
        deletedAt: null,
        name: "Corsa",
        value: 5000,
        category: "BOOKS",
        description: "Vendo carro usado",
        status: true,
        photos: [
          {
            id: "89908be3-46dc-402d-a687-f1a68fe95971",
            createdAt: "2023-07-02T01:25:53.351Z",
            updatedAt: "2023-07-02T01:25:53.000Z",
            deletedAt: null,
            photo_url: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Corsa-Wind-modelo-1997-da-Chevrolet._1-C%C3%B3pia.jpg"
          },
          {
            id: "89908be3-46dc-402d-a687-f1a68fe95971",
            createdAt: "2023-07-02T01:25:53.351Z",
            updatedAt: "2023-07-02T01:25:53.000Z",
            deletedAt: null,
            photo_url: "https://www.carrosyclasicos.com/media/k2/items/cache/60468aa82473fd32700d48478784d483_XL.jpg"
          }
        ],
        owner: {
          id: "09a4d9df-d464-41d5-a9ec-7ded1ae26086",
          createdAt: "2023-06-27T16:04:31.541Z",
          updatedAt: "2023-06-27T16:04:31.541Z",
          deletedAt: null,
          full_name: "Vitoria Sabrina",
          state: "SC",
          city: "Joinville",
          email: "vitoria@email.com",
          password: "$2b$08$tWARwTylWe30DYhKVfIBdeavIO/x1tR0lieD9FwSxQa2307VyuyAu"
        }
      }
      
    const [photoIndex, setPhotoIndex] = useState(0) 

    return (
        <DashboardLayout>
          <div className="flex w-full justify-center p-8 space-x-24 mt-12">
              <div className="flex flex-col gap-6">
                <div className="text-4xl font-semibold">{mockProduct.name}</div>
                <div className="text-zinc-500">Publicado em: {mockProduct.createdAt}</div>
                <div className="flex justify-center bg-zinc-300">
                    <div className='px-2 flex items-center'>
                      <div onClick={() => {
                        if (photoIndex !== undefined && photoIndex > 0) {
                            setPhotoIndex(photoIndex - 1)
                        }
                      }}
                      >
                        <ArrowLeft size={40} color="currentColor" />
                      </div>
                    </div>
                    <img src={mockProduct.photos[photoIndex].photo_url} width={500} height={400} alt="" />
                    <div className='px-2 flex items-center'>
                      <div onClick={() => {
                        if (photoIndex !== undefined && photoIndex < mockProduct.photos.length - 1) {
                            setPhotoIndex(photoIndex + 1)
                        }
                      }}
                      >
                        <ArrowRight size={40} color="currentColor" />
                      </div>
                    </div>
                </div>
                <div className="text-3xl">R$ {mockProduct.value}</div>
                <div className="text-zinc-500 text-xl">{mockProduct.description}</div>
            </div>
            <div className="flex flex-col border-2 border-orange-600 self-center p-8 w-80 gap-8">
                <div className="flex flex-col">
                    <div className="text-3xl self-center">{mockProduct.owner.full_name}</div>
                    <div className="bg-zinc-500 w-full h-px mt-16"></div>
                </div>
                <div className="self-center font-semibold">Membro desde: {mockProduct.owner.createdAt}</div>
                <div className="self-center w-1/2 h-12 bg-orange-600 rounded-full flex items-center justify-center gap-3 mt-8">
                    <img className='' src={chatIcon} alt="" />
                    <div className="text-white text-xl">Chat</div>
                </div>
            </div>
          </div>
        </DashboardLayout>
    )
}