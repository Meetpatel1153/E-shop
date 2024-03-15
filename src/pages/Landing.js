import { Link } from "react-router-dom"
import Hero from "./Hero"

const Landing = () => {
  return (
    <div className='bg-[#ffffff] font-lora'>
      <div className='container px-4 grid md:grid-cols-2 py-8 mx-auto'>
        <div className='flex items-center'>
          <div className='max-w-[450px] space-y-4'>
            <p className='text-black'>
              Starting At <span className='font-bold'>$22</span>
            </p>
            <h2 className='text-black font-bold text-4xl md:text-5xl'>
              The best collection 2024
            </h2>
            <h3 className='text-2xl'>
              Exclusive offer <span className='text-red-600'>-10%</span> off
              this week
            </h3>
            <Link
              to='/home'
              data-test='hero-btn'
              className='inline-block bg-blue-500 rounded-md px-6 py-3 hover:bg-blue-200 hover:text-white'
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <img
            src='https://img.freepik.com/premium-vector/cute-shopping-girl-cartoon-illustration_274619-1042.jpg'
            alt='hero'
            className='ml-auto lg:w-96 md:w-auto'
          />
        </div>
      </div>
      <Hero />
    </div>
  )
}

export default Landing
