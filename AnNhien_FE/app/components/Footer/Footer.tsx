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
        <div className="bg-transparent" id="first-section">
            <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                    <h1 className='logo-footer font-medium text-center dark:text-white'>Vườn chay an nhiên</h1>
                        <h3 className='text-black text-lg font-medium leading-9 mb-4 lg:mb-20 dark:text-white'> Vượt qua ranh giới ẩm thực - Khám phá thế giới thuần chay đầy bất ngờ.</h3>
                        <div className='flex gap-4 justify-center'>
                            <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/dribble.svg'} alt="facabook" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons black' /></Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}
                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-black text-xl font-semibold mb-9 dark:text-white">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-black text-sm font-normal mb-6 space-links dark:text-white">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4'>
                        <h3 className='text-black text-xl font-semibold mb-6 dark:text-white'>Stay up to date</h3>
                        <div className="relative text-black focus-within:text-black flex flex-row-reverse">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-black bg-gray-900 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-white" placeholder="Your email address" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <img src={'/assets/footer/inputIcon.svg'} alt="inputicon" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default footer;
