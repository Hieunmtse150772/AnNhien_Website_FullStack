import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@mui/material"
import Image from "next/image"

export function CarouselDishVegetable() {
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
      className="w-full max-w-7xl"
    >
      <CarouselContent>
        {image.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="border-orange shadow-sm hover:shadow-lightgrey">
                <CardContent className="flex aspect-square items-center justify-center p-1 flex-wrap  mx-4 mt-4">
                  <Image width={500} height={500} src={image.src} className="max-w-full max-h-48 rounded-xl" alt={""}></Image>
                  <div className="flex-wrap items-center justify-center">
                    <div className="text-center">
                      <span className="text-yellow font-bold ">{image.name}</span>
                    </div>
                    <div>
                      <Button color="info">Công thức nấu ăn</Button>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
