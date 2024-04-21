import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Công ty",
        link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
    },
    {
        id: 2,
        section: "Hỗ trợ khách hàng",
        link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
    }
]

const footer = () => {
    return (
        <div className="bg-transparent mt-10" id="first-section">
            {/* <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8"> */}
            <hr className="border-t-2 border-green-500" />
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12">
                <div className='col-span-5'>
                    <div className="flex space-x-5 self-center justify-center">
                        <Image width={150} height={150} src="/assets/logo/logo.svg" alt="intuition"></Image>
                        <div className="self-center">
                            <h1 className='logo-footer font-medium dark:text-white'>Vườn chay an nhiên</h1>
                            <ul>
                                <li>ĐC: Tổ 4, Sông Xoài, TX. Phú Mỹ, BRVT</li>
                                <li>ĐT: 037 959 4759</li>
                            </ul>

                        </div>

                    </div>


                </div>
                <div className="col-span-7 space-x-10 ">
                    <div className="px-10">
                    <p className='text-black text-lg font-light dark:text-white'> Hoan nghênh mọi hình thức góp chia sẻ rộng rãi thông tin trên trang này, nhưng vui lòng ghi rõ xuất xứ và không tùy tiện thêm bớt.
                        Sách được đăng tải trên trang này là do chúng tôi giữ bản quyền hoặc được sự ủy nhiệm hợp pháp của người giữ bản quyền.</p>
                    <div className='flex justify-center right-0 float-right'>
                        <Link href="/"><Image width={50} height={50} src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                        <Link href="/"><Image width={50} height={50} src={'/assets/footer/dribble.svg'} alt="facabook" className='footer-icons' /></Link>
                        <Link href="/"><Image width={50} height={50} src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                        <Link href="/"><Image width={50} height={50} src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons black' /></Link>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
        // </div>
    )
}

export default footer;
