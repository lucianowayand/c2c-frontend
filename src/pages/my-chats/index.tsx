import DashboardLayout from "../../components/dashboard-layout"
import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

export default function MyChats() {
    const { user, isLoading } = useAuth()
    
    useEffect(() => {
        if(isLoading) return
        if(!user) {
            window.location.href = '/'
        }
        console.log(user)
    }, [user, isLoading])

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
    return(
        <>
            {!isLoading && user && (
                <DashboardLayout>
                    <div className="bg-white p-6 flex flex-col space-y-8">
                        <div className='flex flex-row w-full'>
                            <div className="text-4xl font-bold">Minhas conversas</div>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className="text-3xl font-semibold mt-6">Meus anúncios</div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {mockProducts?.map((product) => (
                                <a href={`/product/${product.id}`} className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                                    <img src={product.photos[0].photo_url} width={200} height={12} alt="" />
                                    <div className="flex justify-center items-center p-16">
                                        <p className="text-xl">{product.owner.full_name}</p>                                   
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className="text-3xl font-semibold">Anuncios de terceiros</div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {mockProducts?.map((product) => (
                                <a href={`/product/${product.id}`} className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                                    <img src={product.photos[0].photo_url} width={200} height={12} alt="" />
                                    <div className="flex justify-center items-center p-16">
                                        <p className="text-xl">{product.name}</p>                                   
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