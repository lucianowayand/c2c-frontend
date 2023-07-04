import LocalIcon from './assets/local.svg'
import DashboardLayout from "../../components/dashboard-layout"
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import CloseIcon from '../../components/icons/CloseIcon'

export default function Home() {
    const searchParams = new URLSearchParams(document.location.search)
    const productName = searchParams.get('product-name')

    const [products, setProducts] = useState([])
    const [filterModal, setFilterModal] = useState(false)
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [orderBy, setOrderBy] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
      getProducts()
      getNameParam()
    }, [])

    useEffect(() => {
      logFilters()
      getProducts()
    }, [category, city, state, orderBy, name])

    async function getProducts() {
      try {
        const res = await api.get("/api/v1/products", {params: {
          category: category,
          city: city,
          state: state,
          orderBy: orderBy,
          name: name
        }})
        setProducts(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    function getNameParam() {
      if (productName) {
        setName(productName)
      }
    }

    function logFilters() {
      console.log({
        category: category,
        city: city,
        state: state,
        orderBy: orderBy,
        name: name
      })
    }

    function filterCount() {
      return (category !== '' ? 1 : 0) + (city !== '' ? 1 : 0) + (state !== '' ? 1 : 0) + (orderBy !== '' ? 1 : 0)
    }

    return ( 
      <DashboardLayout>
        {filterModal && <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center align-middle" style={{background: "rgb(0,0,0,0.7)"}}>
          <div className="bg-white p-8 flex flex-col space-y-8" style={{opacity:"1 !important"}}>
            <div className="flex flex-row justify-between">
              <div className="text-4xl font-bold">Filtros</div>
              <div style={{ cursor: "pointer" }} onClick={() => {
                  setFilterModal(false)
                }}>
                  <CloseIcon />
                </div>
            </div>
          
          </div>
        </div>}
        <div className="bg-white p-8 flex flex-col space-y-8">
          <div className='flex flex-row w-full justify-between'>
            <div className="text-4xl font-bold">Anúncios</div>
            <div className='flex gap-4 items-center'>
              {filterCount() > 0 && 
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"0.5em"}}>
                  <div style={{ cursor: "pointer" }} onClick={() => {
                    setCategory('')
                    setCity('')
                    setState('')
                    setOrderBy('')
                  }}>
                    <CloseIcon />
                  </div>
                  <p className="underline">{filterCount()} {filterCount() > 1 ? "filtros aplicados" : "filtro aplicado"}</p>
                </div>
              }
              <div onClick={() => setFilterModal(true)} className='p-1 text-orange-600 text-xl border-2 border-orange-600 rounded-md w-72 flex justify-center place-self-center'>
                <p className='self-center'>Filtros</p>
              </div>
            </div>
          </div>
          {products?.length > 0 && (<div className="text-2xl">{products?.length} {products?.length > 1 ? "anúncios encontrados": "anúncio encontrado"}</div>)}
          <div className="grid grid-cols-3 gap-8">
            {products?.map((product: any) => (
                <a href={`/product/${product.id}`} className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
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
      </DashboardLayout>
    )
}