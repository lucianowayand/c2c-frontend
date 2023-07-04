import { useEffect, useState } from "react"
import DashboardLayout from "../../components/dashboard-layout"
import EditIcon from '../../components/icons/EditIcon'
import moment from 'moment'
import { useAuth } from "../../context/AuthContext"
import { api } from "../../services/api"

export default function MyProducts() {
  const {user} = useAuth()

  const [products, setProducts] = useState([])
  async function getMyProducts() {
    try {
      const response = await api.get(`/api/v1/products/owner/${user?.id}`)
      setProducts(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user){
      getMyProducts()
    }
  }, [user])

  async function deleteProduct(id: string){
    try {
      await api.delete(`/api/v1/products/${id}/owner/${user?.id}`)
      getMyProducts()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DashboardLayout>
      <div className="bg-white p-6 flex flex-col space-y-8 w-full">
        <div className='flex flex-row w-full justify-between'>
          <div className="text-4xl font-bold">Meus anúncios</div>
          <a className="p-2 bg-orange-600 text-white text-xl rounded-xl" href="/publish-product">Adicionar produto</a>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {products?.map((product: any) => (
            <div className="flex border-2 border-zinc-300 rounded-xl overflow-hidden">
                <img src={product.photos[0].photo_url} width={200} height={12} alt="" />
                <div className="flex flex-col p-2 w-full">
                  <div className="flex justify-between pr-2">
                    <a href={`/product/${product.id}`} className="text-xl">{product.name}</a>
                      <button onClick={() => deleteProduct(product.id)} className="border-2 p-1 rounded-3xl border-orange-600 text-orange-600 font-bold">Marcar como vendido</button>
                  </div>
                  <p className="text-xl font-bold">R$ {product.value}</p>
                  <div className='flex mt-8 gap-2'>
                    <p>Publicado em: {moment(product.createdAt).format("DD/MM/YYYY") + " às " + moment(product.createdAt).format("HH:mm")}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}