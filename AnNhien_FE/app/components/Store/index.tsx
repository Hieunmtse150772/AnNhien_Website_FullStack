import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { Button } from "@mui/material";
import LogoShopee from '../../../public/assets/logo/shopee-logo3.png';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
export default function Store({
}) {
    const news = [
        {
            name: 'Sườn Non Chay, sườn chay Khô Ngon Loại 1 Làng Me, chế biến món chay ngon, không chất bảo, không biến đổi gen',
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
            name: 'Sườn non chay xá (gói 1kg)',
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
        {
            name: 'Dưa leo',
            src: '/assets/food/AncientHarvest-TraditionalQuinoa_27oz_200x200.avif'
        },
        {
            name: 'Dưa leo',
            src: '/assets/food/AncientHarvest-TraditionalQuinoa_27oz_200x200.avif'
        },
        {
            name: 'Dưa leo',
            src: '/assets/food/AncientHarvest-TraditionalQuinoa_27oz_200x200.avif'
        },
    ]
    return (
        <>
            <div className="m-10 grid gap-5 grid-cols-1 md:grid-cols-3 lg:gap-4 xl:grid-cols-5 lg:grid-cols-5">
                {news.map((item, index) => (
                         <Link
                         key={index}
                                className="overflow-hidden bg-gray-100 transition-all hover:scale-105 group cursor-pointer gap-10 md:grid-cols-2 mt-10 rounded-xl shadow-md hover:shadow-black w-full h-full md:max-h-96"
                                href="">
                        <div
                            className="dark:bg-gray-800">
                          
                                     <Image
                                    src={LogoShopee}
                                    alt={"Thumbnail"}
                                    priority={true}
                                    className="object-cover transition-all bg-transparent relative left-4"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={item.src}
                                    alt={"Thumbnail"}
                                    priority={true}
                                    className="object-cover transition-all"
                                    width={500}
                                    height={500}
                                />
                        </div>
                       
                        <div className="flex-wrap w-full content-center mx-2">
                                <div className="name h-14 max-h-14 mx-2 mt-5 mb-2">
                                        <span
                                            className="content-center text-sm w-full"
                                        >
                                            {item.name.split('',40)}{item.name.length > 40 && '...' }
                                        </span>
                                </div>
                                {/* <div className="hidden">
                                    <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                                        <Link
                                            href={"/post/"}>
                                        </Link>
                                    </p>
                                </div> */}
                                <div className="price mx-2 text-red relative bottom-0 mt-2" >
                                    <span>{Intl.NumberFormat('vi-VN', {
                                         style: 'currency',
                                         currency: 'VND',
                                         minimumFractionDigits: 0,
                                    }).format(70000)}</span>
                                </div>
                                <div className="text-lightgrey">
                                    <span className="text-sm"><FmdGoodIcon/> Hồ Chí Minh</span>
                                </div>
                        </div>
                        </Link>
                ))}
            </div>
            <Button className="mt-5 flex justify-center right-0 float-right text-black mb-10" href="">Xem thêm</Button>

        </>
    );
}
