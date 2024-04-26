import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function Store({
}) {
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
        {
            name: 'Dưa leo',
            src: '/assets/dishvegetable/vegetable_4.jpeg'
        },
        {
            name: 'Dưa leo',
            src: '/assets/dishvegetable/vegetable_4.jpeg'
        },
        {
            name: 'Dưa leo',
            src: '/assets/dishvegetable/vegetable_4.jpeg'
        },
        {
            name: 'Dưa leo',
            src: '/assets/dishvegetable/vegetable_4.jpeg'
        },
    ]
    return (
        <>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-5">
                {news.map((item, index) => (
                    <div key={index}
                        className="group cursor-pointer gap-10 md:grid-cols-2 mt-10"            >
                        <div
                            className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"                >
                            <Link
                                className="relative block   aspect-video"

                                href="">
                                <Image
                                    src="/assets/banner/background.png"
                                    alt={"Thumbnail"}
                                    priority={true}
                                    className="object-cover transition-all"
                                    fill
                                    sizes="(max-width: 768px) 30vw, 33vw"
                                />
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <div>
                                <div className="flex gap-3">
                                    <Link
                                        href={`/category/`}
                                    >
                                        <span
                                            className="inline-block text-xs font-medium tracking-wider uppercase mt-5"
                                        >
                                            {'Loại bài viết'}
                                        </span>
                                    </Link>
                                </div>
                                <h2
                                    className="text-3xl line-clamp-2 font-medium  tracking-normal text-black"
                                >
                                    <Link
                                        href={""}>
                                        <span
                                            className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                                           bg-no-repeat
                                           transition-[background-size]
                                           duration-500
                                           hover:bg-[length:100%_3px]
                                           group-hover:bg-[length:100%_10px]
                                           ark:from-purple-800 dark:to-purple-900">
                                            {"Tiêu đề"}
                                        </span>
                                    </Link>
                                </h2>

                                <div className="hidden">
                                    <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                                        <Link
                                            href={"/post/"}>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div >
                ))}
            </div>

        </>
    );
}
