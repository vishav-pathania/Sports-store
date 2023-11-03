import { Product } from '../../models/Product'
import { mongooseConnect } from '../../lib/mongoose'
import Navbar from '../../components/navbar';


export default function ProductPage({ product }) {
  return (
    <div className='bg-slate-300 min-h-screen'>
      <Navbar />
      <div className='max-w-screen-md mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5/6 md:grid-cols-3/5 gap-10 my-10'>
          <div className='bg-white rounded-lg p-8'>
            <img src={product.images?.[0]} alt={product.title} className='max-w-full' />
          </div>
          <div>
            <h1 className='text-2xl font-semibold ml-8 mt-8'>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}





export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}