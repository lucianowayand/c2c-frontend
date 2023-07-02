import chatIcon from './assets/chatIcon.svg'
import arrowLeft from './assets/arrow-left.svg'
import arrowRight from './assets/arrow-right.svg'

export default function ProductPage() {

    const mockProducts = [
        {
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
      ]

    return (
        <div>
            <div className="flex flex-col items-center bg-white">
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
                  <div className="flex w-full justify-center p-8 space-x-24 mt-12">
                    <div className="flex flex-col gap-6">
                        <div className="text-4xl font-semibold">{mockProducts[0].name}</div>
                        <div className="text-zinc-500">Publicado em: {mockProducts[0].createdAt}</div>
                        <div className="flex justify-center bg-zinc-300">
                            <div className='px-2 flex items-center'><img className='' width={40} src={arrowLeft} alt="" /></div>
                            <img src={mockProducts[0].photos[0].photo_url} width={500} height={400} alt="" />
                            <div className='px-2 flex items-center'><img width={40} src={arrowRight} alt="" /></div>
                        </div>
                        <div className="text-3xl">R$ {mockProducts[0].value}</div>
                        <div className="text-zinc-500 text-xl">{mockProducts[0].description}</div>
                    </div>
                    <div className="flex flex-col border-2 border-orange-600 self-center p-8 w-80 gap-8">
                        <div className="flex flex-col">
                            <div className="text-3xl self-center">{mockProducts[0].owner.full_name}</div>
                            <div className="bg-zinc-500 w-full h-px mt-16"></div>
                        </div>
                        <div className="self-center font-semibold">Membro desde: {mockProducts[0].owner.createdAt}</div>
                        <div className="self-center w-1/2 h-12 bg-orange-600 rounded-full flex items-center justify-center gap-3 mt-8">
                            <img className='' src={chatIcon} alt="" />
                            <div className="text-white text-xl">Chat</div>
                        </div>
                    </div>
                  </div>
              </div>
        </div>
    )
}