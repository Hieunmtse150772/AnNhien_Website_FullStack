import * as React from "react"
import Image from "next/image"

export function ListLatestNew() {
  const news = [
    {
      name: 'Đậu hủ chiên',
      src: '/assets/dishvegetable/vegetable_1.jpeg'
    },
    {
      name: 'Ớt chuông xào',
      src: '/assets/dishvegetable/vegetable_2.jpeg'
    },
    {
      name: 'Dưa leo',
      src: '/assets/dishvegetable/vegetable_4.jpeg'
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {news.map((item, index) => (
        <div key={index} className="md:p-8 p-2 bg-white dark:bg-transparent hover:shadow-black shadow-lg rounded-sm">
          <Image width={500}
            height={500} className="rounded-lg w-full" src={item.src} alt={''} />
          <p className="text-indigo-500 font-semibold text-base mt-2">Science</p>
          <h1
            className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
          >
            the life of albert einstein
          </h1>
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
              vel soluta dolore id nesciunt eum nam ipsam, eveniet cupiditate sint
              veritatis harum odit. Iste dignissimos, ad provident nulla
              voluptatum ut.
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-20">

            <div>
              <p className="text-gray-500 font-semibold text-sm">
                Xem thêm
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}
