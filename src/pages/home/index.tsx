import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import LocalIcon from './assets/local.svg'

export default function Home() {
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

    return (
        <> 
            {!isLoading && user && (
            <div className="flex flex-col items-center bg-zinc-200">
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
                      <div className="absolute text-white font-black text-5xl right-0 mr-12 mt-5">C2C.</div>
                  </div>
                  <div className="bg-white h-screen w-3/4 p-8 flex flex-col space-y-8">
                      <div className='flex flex-row w-full'>
                        <div className="text-4xl font-bold">Anúncios</div>
                        <div className='absolute right-72 flex gap-4 items-center'>
                          <p>2 filtros aplicados</p>
                          <a href="" className=' p-1 text-orange-600 text-xl border-2 border-orange-600 rounded-md w-72 flex justify-center place-self-center'>
                            <p className='self-center'>Filtros</p>
                          </a>
                        </div>
                      </div>
                      <div className="text-2xl">X anúncios encontrados</div>
                      <div className="grid grid-cols-3 gap-8">
                        {mockProducts?.map((product) => (
                            <a href="" className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                                <img src={product.photos[0].photo_url} width={200} height={150} alt="" />
                                <div className="flex flex-col p-2">
                                  <p className="text-xl">{product.name}</p>
                                  <p className="text-xl font-bold">R$ {product.value}</p>
                                  <div className='flex mt-8 gap-2'>
                                    <img className='' src={LocalIcon} alt="icon" width={24} height={24}/>
                                    <p>{product.owner.city},</p>
                                    <p>{product.owner.state}</p>
                                  </div>
                                </div>
                            </a>
                        ))}
                      </div>
                  </div>
              </div>
            )}
        </>
    )
}