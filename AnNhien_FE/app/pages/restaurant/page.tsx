import React from 'react'

function RestaurantPage() {
  return (
    <div>
         <main className='banner-image'>
            <video autoPlay loop muted playsInline className="back-video">
                <source src="/assets/video/vegetarian-video.mp4" type="video/mp4" />
                {/* Nếu trình duyệt không hỗ trợ video */}
                Your browser does not support the video tag.
            </video>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">
                        <h1 className="text-4xl text-lightpink font-semibold">
                        Mở ra cánh cửa đến lối sống thuần chay - Sức khỏe <br/>Vị ngon & Trái tim nhân ái.
                        </h1>
                        <form action="/search">
            <label
                className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl"
                >
                <input id="search-bar" placeholder="Tìm kiếm thông tin" name="q"
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-transparent" required/>
                <button type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-green  text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </div>
                </button>
            </label>
        </form>  
                    </div>

                </div>
            </div>
        </main>
    </div>
  )
}

export default RestaurantPage
