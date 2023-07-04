import DashboardLayout from "../../components/dashboard-layout"
import EditIcon from '../../components/icons/EditIcon'
import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import moment from 'moment'

export default function MyProducts() {
  const { user, isLoading } = useAuth()

  const mockProducts = [
    {
      id: "7d30bd81-a84a-4348-982c-5cda7e4eb48e",
      createdAt: "2023-07-02T01:25:53.377Z",
      updatedAt: "2023-07-02T01:25:53.377Z",
      deletedAt: null,
      name: "Corsa",
      value: 5000,
      category: "BOOKS",
      description: "",
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
    },
    {
      id: "7d30bd81-a84a-4348-982c-5cda7e4eb48e",
      createdAt: "2023-07-02T01:25:53.377Z",
      updatedAt: "2023-07-02T01:25:53.377Z",
      deletedAt: null,
      name: "Astra",
      value: 5000,
      category: "BOOKS",
      description: "",
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
    },
    {
      id: "7d30bd81-a84a-4348-982c-5cda7e4eb48e",
      createdAt: "2023-07-02T01:25:53.377Z",
      updatedAt: "2023-07-02T01:25:53.377Z",
      deletedAt: null,
      name: "Astra",
      value: 5000,
      category: "BOOKS",
      description: "",
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
    },
    {
      id: "7d30bd81-a84a-4348-982c-5cda7e4eb48e",
      createdAt: "2023-07-02T01:25:53.377Z",
      updatedAt: "2023-07-02T01:25:53.377Z",
      deletedAt: null,
      name: "Corsa",
      value: 5000,
      category: "BOOKS",
      description: "",
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
    },
    {
      id: "7d30bd81-a84a-4348-982c-5cda7e4eb48e",
      createdAt: "2023-07-02T01:25:53.377Z",
      updatedAt: "2023-07-02T01:25:53.377Z",
      deletedAt: null,
      name: "Astra",
      value: 5000,
      category: "BOOKS",
      description: "",
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
  ]

  useEffect(() => {
      if(isLoading) return
      if(!user) {
          window.location.href = '/'
      }
      console.log(user)
  }, [user, isLoading])

    return (
      <>
        {!isLoading && user &&(
          <DashboardLayout>
          <div className="bg-white p-6 flex flex-col space-y-8">
            <div className='flex flex-row w-full justify-between'>
              <div className="text-4xl font-bold">Meus anúncios</div>
              <a className="p-2 bg-orange-600 text-white text-xl rounded-xl" href="/publish-product">Adicionar produto</a>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {mockProducts?.map((product) => (
                  <a href={`/product/${product.id}`} className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                      <img src={product.photos[0].photo_url} width={200} height={12} alt="" />
                      <div className="flex flex-col p-2">
                        <div className="flex space-x-24">
                          <p className="text-xl">{product.name}</p>
                          <div className="flex gap-4">
                              <button className="border-2 p-1 rounded-3xl border-orange-600 text-orange-600 font-bold">Marcar como vendido</button>
                              <EditIcon size={32} color="grey"/>
                          </div>
                        </div>
                        <p className="text-xl font-bold">R$ {product.value}</p>
                        <div className='flex mt-8 gap-2'>
                          <p>Publicado em: {moment(product.createdAt).format("DD/MM/YYYY") + " às " + moment(product.createdAt).format("HH:mm")}</p>
                        </div>
                      </div>
                  </a>
              ))}
            </div>
          </div>
        </DashboardLayout>
      )}
      </>
    )
}