import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function Store({
}) {
    const news = [
        {
            name: '2foods-Gâteau Chocolate, 16oz',
            src: '/assets/food/8TrackFoods-OrganicWhiteCannelliniBeans_15oz_200x200.avif'
        },
        {
            name: '8 Track Foods - Organic White Cannellini Beans, 15 oz',
            src: '/assets/food/57AB2533-640B-48F4-A09C-FB60800D7CC2_200x200.avif'
        },
        {
            name: 'Abbot`s Butcher - Plant-Based Meats, 10oz | Multiple',
            src: '/assets/food/Abbot_sButcher-Plant-BasedMeats_10ozGroundBeef_200x200.avif'
        },
        {
            name: 'Ancient Harvest - Traditional Quinoa, 27oz',
            src: '/assets/food/Abbot_sButcher-Plant-BasedMeats_10ozGroundBeef_200x200.avif'
        },
        {
            name: 'Anima Mundi - Blue Lotus Tea: Flower of Intuition, 1oz',
            src: '/assets/food/AncientHarvest-TraditionalQuinoa_27oz_200x200.avif'
        },
        {
            name: 'Dưa leo',
            src: '/assets/food/AnimaMundi-BlueLotusTeaFlowerofIntuition_1oz_200x200.avif'
        },
        {
            name: 'Dưa leo',
            src: '/assets/food/AncientHarvest-TraditionalQuinoa_27oz_200x200.avif'
        },
    ]
    return (
        <>
            <div className="m-10 grid gap-5 grid-cols-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-5 lg:grid-cols-6">
                {news.map((item, index) => (
                    <div key={index}
                        className="overflow-hidden bg-gray-100 transition-all hover:scale-105 group cursor-pointer gap-10 md:grid-cols-2 mt-10 rounded-xl shadow-md hover:shadow-black w-full h-full">
                        <div
                            className="dark:bg-gray-800">
                            <Link
                                className="relative block   aspect-video"
                                href="">
                                <Image
                                    src={item.src}
                                    alt={"Thumbnail"}
                                    priority={true}
                                    className="object-cover transition-all"
                                    width={500}
                                    height={500}
                                />
                            </Link>
                        </div>

                        <div className="flex items-center w-full p-2  justify-center">
                            <div>
                                <div className="flex gap-3 ">
                                    <Link
                                        href={`/category/`}
                                    >
                                        <span
                                            className=" content-center"
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                </div>
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
