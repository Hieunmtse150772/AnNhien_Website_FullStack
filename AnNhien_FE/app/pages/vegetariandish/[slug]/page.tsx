import React from 'react'
import './style.scss';
const VegetarianDishDetail = (props: any) => {
    const { params } = props;
    console.log('object: ', props)
    return (
        <div>
            <div className='image-banner-vegetariandish' />
            <div>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                        <div className="text-center">
                            <h1 className="text-4xl text-lightpink font-semibold">
                                CÔNG THỨC NẤU ĂN
                            </h1>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default VegetarianDishDetail
