import Image from 'next/image';
import Banner from './components/Banner/Banner';
import { CarouselDishVegetable } from './components/CarouselDishVegetable';
import { ListLatestNew } from './components/ListLatestNews';
import { ListBooks } from './components/ListBooks';
import PostList from './components/ListPost';
import Store from './components/Store';
import { useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { useAppDispatch } from './store/store';
import { getVegetarianDishList } from './features/vegetarianDishSlice';
import Introduction from './components/Introduction';
import { Button } from '@mui/material';

export default function Home() {

  return (
    <main>
      <Banner />
      <div className='flex justify-center max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl content-center'>
        <Introduction />
      </div>
      <div className="flex justify-center mt-10 container bg-fixed" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: "linear-gradient(0, rgb(0, 0, 0), rgba(255, 255, 255, 0)),url('/assets/dishvegetable/pexels-pixabay-326279.jpg')" }}>
        <div className='max-w-md mx-auto rounded-md overflow-hidden md:max-w-6xl' style={{ backgroundBlendMode: 'darken' }}>
          <h1 className='text-white text-center text-4xl font-extrabold bg-no-repeat pt-10'>Các món chay ngon trong tuần</h1>
          <div className='mt-5 m-10'>
            <CarouselDishVegetable />
            <Button className="mt-5 flex justify-center right-0 float-right text-white mb-10" href="">Xem thêm</Button>

          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold'>Tủ sách An Nhiên</h1>
          <ListBooks></ListBooks>
        </div>
      </div>
      <div className='flex justify-center mt-10 mx-20'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold'>Bài viết mới nhất</h1>
          <PostList></PostList>
        </div>

      </div>
      <div className='flex justify-center mt-10 mx-20'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold '>Cửa hàng chay</h1>
          <Store></Store>

        </div>

      </div>
    </main>
  )
}
