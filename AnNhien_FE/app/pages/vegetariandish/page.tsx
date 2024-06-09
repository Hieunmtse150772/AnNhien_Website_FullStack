'use client'
import Banner from '@/app/components/Banner/Banner'
import { getVegetarianDishList } from '@/app/features/vegetarianDishSlice'
import { useAppSelector } from '@/app/store/hooks'
import { useAppDispatch } from '@/app/store/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BarChartIcon from '@mui/icons-material/BarChart';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { Button, Pagination } from '@mui/material'
import './style.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';


const VegetarianDish = () => {
  const dishPatch = useAppDispatch();
  const vegetarianDishes = useAppSelector(state => state.vegetarianDish.vegetarianList);
  const fetchVegetarianDishes = async () => {
    console.log('fetch 3: ')
    const result = await dishPatch(getVegetarianDishList()).catch((error) => { console.error(error) }).finally(() => {
      return null
    })
  }
  useEffect(() => {
    let fetched = false;
    const fetchVegetarianDishes = async () => {
      console.log('fetch 3: ')
      if (fetched === false) {
        const result = await dishPatch(getVegetarianDishList()).catch((error) => { console.error(error) }).finally(() => {
          fetched = true;
        })
      }
    }
    fetchVegetarianDishes();
  }, [])
  return (
    <div className='vegetarian-dish'>
      <div className='banner-vegetarian-dish relative block'>
        <div className='image-banner-vegetarian-dish' />
        <div className="flex text-center h-full content-center items-center relative px-6 lg:px-8">
          <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
            <h1 className="text-4xl self-center text-lightpink font-semibold">
              CÔNG THỨC NẤU ĂN
            </h1>
          </div>
        </div>
      </div>
      <div className='container '>
        <div className='flex flex-col lg:flex-row mt-10 lg:mt-10 gap-3 justify-between relative md:ml-20 ml-5'>
          <ul className='tabs flex gap-5'>
            <li className='tab tab-active'>
              <a href="#" aria-current="page" title="Tất cả công thức">Tất cả công thức</a>
            </li>
            <li className='tab'>
              <a href="#" title="Món ngon gợi ý">Món ngon gợi ý</a>
            </li>
            <li className='tab'>
              <a href="#" title="Món ngon gợi ý">Món bạn đã thích</a>

            </li>
          </ul>
          <div className='tabs lg:justify-end'>

          </div>
        </div>
        {vegetarianDishes &&
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 mt-10'>
            {vegetarianDishes.data.VegetarianDishes.map((items, index) => (
              <Link key={index} href={''} className='card-vegetarian w-full'>
                <div className="flex-wrap items-center justify-center content-center relative">
                  <div className='icon-heart-container flex rounded-full
                    border-slate-50	 w-10 h-10 content-center justify-center 
                    items-center bg-grey500 hover:bg-stone-200 hover:border-red hover:text-red
                    absolute right-3 top-3 z-10'
                  >
                    <FavoriteIcon className='' />
                  </div>
                  <Image
                    src={items.vegetarianDishImages[0].url}
                    alt={"Thumbnail"}
                    priority={true}
                    className="image object-cover transition-all max-w-full max-h-48 rounded-xl hover:scale-105"
                    width={500}
                    height={500}
                    style={{ display: 'block', height: '350px', width: '100%' }}
                  />
                  <div className="pt-5 text-black dark:text-white">
                    <span className="font-medium text-2xl">{items.dishName}</span>
                    <br />
                    <div className=" gap-5 mt-2 font-light" style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="gap-1 flex">
                        <AccessAlarmIcon />30 phút
                      </span>
                      <span className="gap-1 flex">
                        <RestaurantIcon /> 5 người
                      </span>
                    </div>
                    <div className="gap-11 mt-2 font-light" style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="gap-1 flex">
                        <BarChartIcon /> Khó
                      </span>
                      <span className="gap-1 flex">
                        <OutdoorGrillIcon /> 30 phút
                      </span>
                    </div>
                    <div>
                      <Button className='mt-5 text-white bg-green shadow-sm hover:shadow-lg hover:bg-orange'>Xem chi tiết {'>'}</Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>}
      </div>
      <div className='flex justify-end mr-10' >
        <Pagination count={10} variant="outlined" shape="rounded" color='secondary' />

      </div>

    </div>
  )
}

export default VegetarianDish
