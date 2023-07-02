import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

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
          }
    ]

    return (
        <> 
            {!isLoading && user && (
            <div className="flex flex-col items-center bg-zinc-200">
                <div className="bg-orange-600 h-52 w-screen flex flex-col items-center">
                    <div className="absolute text-white font-black text-4xl left-0 ml-2 mt-2">C2C.</div>
                    <div className="w-1/3 flex justify-center">
                        <input className="w-96 h-12 mt-6 flex-none" type="text" />
                        <a className="h-12 w-12 bg-white mt-6 ml-2 flex-none" href=""></a>
                    </div>
                    <div className="mt-12 flex space-x-7">
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                        <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    </div>
                </div>
                <div className="bg-white h-screen w-3/4">
                    {mockProducts?.map((product) => (
                        <div>
                            <p>{product.name}</p>
                            <img src={product.photos[0].photo_url} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}