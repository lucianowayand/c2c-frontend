import './style.css'

function submitForm() {
    return
}

export default function PublishProductPage() {
    return (
        <div className="flex flex-col h-screen">
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
            <div className="flex h-screen items-center justify-center">
                <form className="flex flex-col gap-5 w-96 mb-44" onSubmit={submitForm}>
                    <label>
                        <div className="text-orange-600 font-bold text-2xl mb-2">Título</div>
                        <input 
                            required 
                            className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                            type="text" 
                            name="name" 
                            // value={email} 
                            // onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                    <label>
                        <div className="text-orange-600 font-bold text-2xl mb-2">Preço</div>
                        <input 
                            required 
                            className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                            type="text" 
                            name="name" 
                            // value={email} 
                            // onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                    <label>
                        <div className="text-orange-600 font-bold text-2xl mb-2">Descrição</div>
                        <input 
                            required 
                            className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                            type="text" 
                            name="name" 
                            // value={email} 
                            // onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>

                    <div className="text-orange-600 font-bold text-2xl">Imagem</div>
                    <div className='flex gap-3 justify-center'>
                        <label className='border-4 h-28 w-28 border-orange-600 flex justify-center rounded-xl' id="image-input">
                            <div className='absolute h-16 w-1 self-center bg-orange-600'></div>
                            <div className='h-1 w-16 self-center bg-orange-600'></div>
                            <input 
                                required 
                                className=" h-12 w-full p-1 outline-0 " 
                                type="file" 
                                name="name" 
                                accept="image/png, image/jpeg"
                                content="Escolha"
                                // value={email} 
                                // onChange={(e) => setEmail(e.target.value)} 
                            />
                        </label>
                        <label className='border-4 h-28 w-28 border-orange-600 flex justify-center rounded-xl' id="image-input">
                            <div className='absolute h-16 w-1 self-center bg-orange-600'></div>
                            <div className='h-1 w-16 self-center bg-orange-600'></div>
                            <input 
                                required 
                                className=" h-12 w-full p-1 outline-0 " 
                                type="file" 
                                name="name" 
                                accept="image/png, image/jpeg"
                                content="Escolha"
                                // value={email} 
                                // onChange={(e) => setEmail(e.target.value)} 
                            />
                        </label>
                        <label className='border-4 h-28 w-28 border-orange-600 flex justify-center rounded-xl' id="image-input">
                            <div className='absolute h-16 w-1 self-center bg-orange-600'></div>
                            <div className='h-1 w-16 self-center bg-orange-600'></div>
                            <input 
                                required 
                                className=" h-12 w-full p-1 outline-0 " 
                                type="file" 
                                name="name" 
                                accept="image/png, image/jpeg"
                                content="Escolha"
                                // value={email} 
                                // onChange={(e) => setEmail(e.target.value)} 
                            />
                        </label>
                    </div>
                    <input className="bg-orange-600 text-white rounded-xl w-72 h-10 self-center mt-16 text-xl hover:bg-orange-500" type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    )
}


