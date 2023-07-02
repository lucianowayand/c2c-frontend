import { useState } from 'react'
import DashboardLayout from '../../components/dashboard-layout'
import './style.css'
import CloseIcon from '../../components/icons/CloseIcon';
import axios from 'axios';

export default function PublishProductPage() {
    function submitForm(e:any) {
        console.log("here")
        e.preventDefault();

        console.log({
            name,
            price,
            description,
            category,
            images
        })
    }

    async function uploadImages(e: any, index: number) {
        e.preventDefault();
        const fileInput = e.target;
        if (fileInput && fileInput.files) {
            const imageFile = fileInput.files[0];
            if (imageFile) {
                const url = 'https://corsproxy.io/?' + encodeURIComponent('https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5&action=upload');
                const res = await axios.post(url, {source: imageFile}, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(res.data)
                if(res.data.image.display_url){
                    setImages((prevImages) => {
                        const newImages = [...prevImages];
                        newImages[index] = res.data.image.display_url;
                        return newImages;
                    });   
                }             
            }
        }
    }

    function removeImage(index: number) {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    }

    function ImageSelector({index}: {index:number}) {
        return <>
        {!images[index] ? <label className='border-4 h-28 w-28 border-orange-600 flex justify-center rounded-xl' id="image-input">
                    <div className='absolute h-16 w-1 self-center bg-orange-600'></div>
                    <div className='h-1 w-16 self-center bg-orange-600'></div>
                    <input 
                        className=" h-12 w-full p-1 outline-0 " 
                        type="file" 
                        onChange={(e) => uploadImages(e,index)}
                        accept="image/png, image/jpeg"
                        content="Escolha"
                    />
                </label> : 
                <div>
                    <div className="bg-white p-1 rounded-full cursor-pointer" style={{position:"relative", width:"min-content", top:30, left:85}} onClick={() => removeImage(index)}>
                        <CloseIcon/>
                    </div>
                    <img className='border-4 h-28 w-28 border-orange-600 rounded-xl' src={images[index]} alt=""/>
                </div>
                }
        </>
    }

    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [images, setImages] = useState<string[]>([])

    return (
        <DashboardLayout>
            <form className="flex flex-col gap-5 w-96" onSubmit={submitForm}>
                <label>
                    <div className="text-orange-600 font-bold text-2xl mb-2">Título</div>
                    <input 
                        required 
                        className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
                <label>
                    <div className="text-orange-600 font-bold text-2xl mb-2">Preço</div>
                    <input 
                        required 
                        className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </label>
                <label>
                    <div className="text-orange-600 font-bold text-2xl mb-2">Descrição</div>
                    <input 
                        required 
                        className="border-2 rounded border-orange-600 h-12 w-full p-1" 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </label>
                <div className="text-orange-600 font-bold text-2xl">Imagens</div>
                <div className="flex flex-row gap-2 align-middle justify-center">
                    <ImageSelector index={0}/>
                    <ImageSelector index={1}/>
                    <ImageSelector index={2}/>
                </div>
                <input 
                    className="bg-orange-600 text-white rounded-xl w-72 h-10 self-center mt-16 text-xl hover:bg-orange-500" 
                    type="submit" 
                    value="Entrar" 
                />
            </form>
            
        </DashboardLayout>
    )
}



