"use client"

import { useEffect, useRef, useState } from "react";
import { data } from '../../data/data';
const Banner = () => {
    const [randomQuotes, setRandomQuotes] = useState<string>('Mở ra cánh cửa đến lối sống thuần chay - Sức khỏe Vị ngon & Trái tim nhân ái.')
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = data.map((quotes, index) => quotes.quote)
    console.log('toRotate: ', toRotate)
    const period = 100;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    // function displayRandomQuote() {
    //     const randomIndex = Math.floor(Math.random() * data.length);
    //     const randomQuote = data[randomIndex];
    //     setRandomQuotes(randomQuote.quote);
    // }
    // useEffect(()=>{
    //     let ticker = setInterval(() => {
    //         displayRandomQuote();
    //       }, delta);

    //       return () => { clearInterval(ticker) };
    // },[randomQuotes])
    // Hiển thị trích dẫn ngẫu nhiên mỗi 5 giây
    return (
        <main className="banner mb-10 ">
            <div className="hero mx-auto pt-16 sm:pt-40 sm:pb-24">
                <video id="video1" autoPlay muted loop className="back-video ">
                    <source src="/assets/video/vegetarian-video.mp4" type="video/mp4" />
                    {/* Nếu trình duyệt không hỗ trợ video */}
                    Your browser does not support the video tag.
                </video>
                <div className="text-center w-full content-center items-center flex-wrap">
                    <span className="tagline">Chào bạn mừng đến với <span className="text-white" style={{fontStyle: 'italic'}}>Vườn chay an nhiên</span></span>
                    <form action="/search">
                        <label
                            className="mx-auto mt-8 relative bg-white max-w-3xl w-auto flex flex-col md:flex-row items-center justify-center py-2 px-2 rounded-2xl mb-10 "
                        >
                            <input id="search-bar" placeholder="Tìm kiếm thông tin" name="q"
                                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-transparent" required />
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
                    <h1 className="text-3xl text-lightpink font-light block max-w-3xl m-auto h-12" style={{fontStyle: 'italic',}}>
                        <span className="txt-rotate" data-Period="1000" ><span className="wrap">{text}</span></span>
                        {/* Mở ra cánh cửa đến lối sống thuần chay - Sức khỏe <br />Vị ngon & Trái tim nhân ái. */}
                    </h1>
                    
                 
                </div>

            </div>
        </main>
    )
}

export default Banner;
