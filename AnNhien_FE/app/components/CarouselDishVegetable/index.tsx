
'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { useAppDispatch } from "@/app/store/store"
import { useAppSelector } from "@/app/store/hooks"
import { getVegetarianDishList } from "@/app/features/vegetarianDishSlice"
import { useEffect } from "react"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BarChartIcon from '@mui/icons-material/BarChart';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

export function CarouselDishVegetable() {
  const dispatch = useAppDispatch();
  const vegetarianList = useAppSelector(state => state.vegetarianDish.vegetarianList.data)
  const fetchVegetarianList = async () => {
    console.log('gọi api')
    await dispatch(getVegetarianDishList())
  }
  useEffect(() => {
    fetchVegetarianList();
  }, [])
  const image = [
    {
      name: 'Đậu hủ chiên',
      src: '/assets/dishvegetable/vegetable_1.jpeg'
    },
    {
      name: 'Ớt chuông xào',
      src: '/assets/dishvegetable/vegetable_2.jpeg'
    },
    {
      name: 'Cải ngọt nấu canh',
      src: '/assets/dishvegetable/vegetable_3.jpeg'
    },
    {
      name: 'Dưa leo',
      src: '/assets/dishvegetable/vegetable_4.jpeg'
    },
    {
      name: 'Canh khoai môn',
      src: '/assets/dishvegetable/vegetable_1.jpeg'
    }
  ]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-8xl"
    >
      <CarouselContent>
        {vegetarianList && vegetarianList?.VegetarianDishes.map((items, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="border-none ">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Link href={''}>
                    <div className="flex-wrap items-center justify-center content-center ">
                      <Image
                        src={items.vegetarianDishImages[0].url}
                        alt={"Thumbnail"}
                        priority={true}
                        className="object-cover transition-all max-w-full max-h-48 rounded-xl hover:scale-105"
                        width={500}
                        height={500}
                        style={{ display: 'block', height: '200px', width: '200px' }}
                      />
                      <div className="pt-5 text-center">
                        <span className="text-white font-bold ">{items.dishName}</span>
                        <br />
                        <div className="text-white gap-5 mt-2 justify-center font-light" style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="gap-1 flex">
                            <AccessAlarmIcon />30 phút
                          </span>
                          <span className="gap-1 flex">
                            <RestaurantIcon /> 5 người
                          </span>
                        </div>
                        <div className="text-white gap-11 mt-2 justify-center font-light" style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="gap-1 flex">
                            <BarChartIcon /> Khó
                          </span>
                          <span className="gap-1 flex">
                            <OutdoorGrillIcon /> 30 phút
                          </span>
                        </div>

                      </div>
                    </div></Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
