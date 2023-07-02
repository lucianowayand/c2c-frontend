import { useState } from 'react'
import './style.css'
import DashboardLayout from '../../components/dashboard-layout'

export default function PublishProductPage() {
    function submitForm() {
        return
    }

    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>()
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<string>("")

    return (
        <DashboardLayout>
            <form className="flex flex-col gap-5 w-96" onSubmit={submitForm}>
                <label>
                    <div className="text-orange-600 font-bold text-2xl mb-2">Título</div>
                    <input 
                        required 
                        className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
                <label>
                    <div className="text-orange-600 font-bold text-2xl mb-2">Preço</div>
                    <input 
                        required 
                        className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                        type="text" 
                        name="price" 
                        value={price} 
                        onChange={(e) => setPrice(parseInt(e.target.value))} 
                    />
                </label>
                <label>
                    <div className="text-orange-600 font-bold text-2xl mb-2">Descrição</div>
                    <input 
                        required 
                        className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                        type="text" 
                        name="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
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
        </DashboardLayout>
    )
}



