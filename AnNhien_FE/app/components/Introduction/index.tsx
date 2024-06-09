import Image from 'next/image'
import React from 'react'

const Introduction = () => {
    return (
        <div className='introduce flex flex-wrap gap-10 mt-10'>
          
            <div className='flex-1 md:w-4/12 px-12 md:px-4 ml-auto mr-auto'>
                <h1 className='text-center text-5xl text-green font-extrabold'>Lời nói đầu</h1>
                <p className='font-extralight text-justify mt-10 '>
                    Một trong những nhân duyên lớn may mắn nhất trong cuộc đời là minh được sinh ra trong một gia đình có truyền thống Phật giáo.
                    <br />
                    Tuy nhiên, mình không được tiếp xúc với việc ăn chay từ lúc bé, mình nghe Ba Má kể rằng đầy tháng của mình còn có cả đầu heo, trong mâm cỗ có đủ các loại món ăn làm từ thịt.
                    <br />

                    Theo thời gian mình lớn lên như bao nhiêu người khác, nhưng đến năm mình được 23 tuổi, gia đình của mình đã gặp rất nhiều chuyện buồn. Cả hai bên nội và ngoại cứ vài tháng lại có người ra đi, người già cũng có, người trẻ cũng có, người mất vì bệnh tật cũng có, và người ra đi đột ngột khi đang khỏe mạnh cũng có. Lúc đó hai mình dần hiểu được ý nghĩa của hai từ “Vô Thường”.
                    <br />

                    Chúng ta không ai biết được cuộc sống này sẽ kéo dài đến bao giờ, người thân bên cạnh chúng ta ngày hôm nay đang nói cười, nào biết được ngày mai còn bên cạnh ta nữa hay không?
                    <br />

                    Sau 1 năm rất nhiều người thân đã liên tiếp ra đi, và cũng đến ngày bà Nội mình cũng ra đi mãi mãi. Từ ngày bà mất, Ba mình và mình đã quyết định ăn chay.
                    <br />

                    Dù sau này mình đi làm nhiều nơi, điều kiện làm việc và chỗ ở không như mình mong muốn, mình đã không thể ăn chay trường liên tục. Mãi đến khi lập gia đình, mình đã may mắn gặp được người bạn đời cùng lý tưởng sống. Anh ấy đã ủng hộ việc mình ăn chay, và bây giờ là các con của mình cũng được ăn chay từ trong bụng mẹ.
                    <br />

                    Ăn chay, thật sự không phải là điều gì đó quá cao siêu hay khác biệt, theo mình cảm nhận việc ăn chay chỉ đơn giản là một lựa chọn của bản thân.
                    <br />

                    Lúc đầu mình ăn chay theo Ba mình thì đôi khi vẫn cảm thấy thèm thịt, nhưng lâu dần khi mình có tình thương thật sự với các sự sống trên thế gian này. Mình cảm nhận được nỗi đau của các bạn động vật khi bị tra tấn, giết hại hoặc làm thú vui tiêu khiển cho con người. Mình thấy thương lắm! Chỉ đơn giản thế thôi mà mình đã có thể từ bỏ được thói quen ăn thịt được hình thành từ lúc sinh ra cho đến hơn 20 tuổi.
                    <br />
                </p>
            </div>
            <Image src="/assets/dishvegetable/chay-thuan-chay.jpg"
                className='flex-1 rounded-lg shadow-xl w-1/2 md:w-6/12 mr-4'
                alt={"Thumbnail"}
                priority={true}
                width={1000}
                height={1000}
            />
        </div>
    )
}

export default Introduction
