import * as React from "react"
import Image from "next/image"
import Link from "next/link"

export function ListBooks() {
  const news = [
    {
      name: 'Đậu hủ chiên',
      src: '/assets/books/Book_1.svg'
    },
    {
      name: 'Ớt chuông xào',
      src: '/assets/books/Book_2.svg'
    },
    {
      name: 'Dưa leo',
      src: '/assets/books/Book_3.svg'
    },
    {
      name: 'Đậu hủ chiên',
      src: '/assets/books/Book_1.svg'
    },
  ]
  return (
    <div className="mt-10 ">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 lg:gap-5 xl:grid-cols-4 gap-5">
          {news.map((item, index) => (
            <Link
              key={index}
              className="relative aspect-video w-64 flex content-center"
              href="">
              <Image fill className="dark:bg-transparent bg-white rounded-xl shadow-md hover:shadow-black w-32" src={item.src} alt={''} />
            </Link>
          ))}
        </div>
      </div>
      <a className="mt-5 flex justify-center right-0 float-right" href="">{"-->"} xem thêm</a>
    </div>

  )
}