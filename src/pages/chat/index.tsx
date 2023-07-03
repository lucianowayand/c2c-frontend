import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import ArrowLeft from "../../components/icons/ArrowLeft"
import SendMessage from "../../components/icons/SendMessage"

export default function Chat() {

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

    const { user, isLoading } = useAuth()
    useEffect(() => {
        if(isLoading) return
        if(!user) {
            window.location.href = '/'
        }
        console.log(user)
    }, [user, isLoading])

    function submitForm(e:any) {
        e.preventDefault();
        console.log({
            message
        })
    }

    const [message, setMessage] = useState<string>("")  

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
                <div className='w-screen flex flex-1 flex-col justify-center items-center'>
                    <div className="bg-white w-3/4 p-8 flex flex-1 justify-center">
                        <div className="flex flex-col w-full">
                            <div className="flex items-center">
                                <a href="" className="flex self-start"><ArrowLeft size={48} color='black' /></a>
                                <p className="text-3xl font-bold">{mockProducts[0].name} - </p>
                                <p className="text-3xl font-bold ml-2">R$ {mockProducts[0].value} </p>
                            </div>
                            <div className="flex flex-1 flex-col mt-32 gap-4">
                                <div className="flex">
                                    <div className="flex flex-col border border-orange-600 rounded-md p-4">
                                        <p>Fulando de tal!</p>
                                        <p>Gostei! É meu!</p>
                                    </div>
                                    <div className="flex-1"></div>
                                </div>
                                <div className="flex">
                                    <div className="flex-1"></div>
                                    <div className="flex flex-col bg-orange-200 rounded-md p-4 ">
                                        <p>Meu nome!</p>
                                        <p>Gostei! É meu!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-12 w-3/4 bg-orange-600 items-center justify-center space-x-40">
                        <div className="w-5/6">
                            <form className="flex">
                                <input 
                                    id="text-area"
                                    className="border-2 rounded-md h-9 w-full p-1" 
                                    type="text" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </form>                                
                        </div>
                        <div onClick={submitForm}>
                            <SendMessage size={32} color='white' />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}