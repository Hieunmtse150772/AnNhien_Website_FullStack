import Image from 'next/image';
import Banner from './components/Banner/Banner';
import { CarouselDishVegetable } from './components/CarouselDishVegetable';
import { ListLatestNew } from './components/ListLatestNews';
import { ListBooks } from './components/ListBooks';
import PostList from './components/ListPost';
import Store from './components/Store';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='introduce m-10 '>
        <div className='flex justify-center'>
          <div className='max-w-5xl'>
            <h1 className='text-center text-5xl text-green font-extrabold'>Lời nói đầu</h1>
            <p className='font-extralight text-justify mt-10'>
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

              Mình hy vọng trang web nhỏ này sẽ chia sẻ được nhiều nội dung hữu ích cho cộng đồng những người ăn chay và đang tìm hiểu về Phật pháp.
              <br />

              Các kinh sách mình xin phép được sao chép từ trang web Rộng mở tâm hồn của bác Nguyễn Minh Tiến.
              <br />

              Các công thức món ăn chay mình xin sưu tầm từ trên mạng và một số công thức mình từng làm. Món chay mình chia sẻ có thể có sử dụng hành, tỏi, các cô chú, anh chị có thể thay đổi nếu không sử dụng gia vị ngũ vị tân nhé.
              <br />

              Những câu chuyện cuộc sống mình cũng sưu tầm trên mạng hoặc câu chuyện đời thực mình được biết, cả nhà cùng đọc nhé.
              <br />

              Và mình xin cảm ơn cuộc đời này đã cho mình rất nhiều điều may mắn, để hôm nay mình có cơ hội được biết đến Phật pháp, được lan tỏa những điều tích cực đến với mọi người xung quanh.

            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold'>Các món chay ngon trong tuần</h1>
          <div className='mt-5 m-10'>
            <CarouselDishVegetable/>
            <a className="mt-5 flex justify-center right-0 float-right" href="">{"-->"} xem thêm</a>

          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold'>Tủ sách An Nhiên</h1>
         <ListBooks></ListBooks>
        </div>

      </div>
      <div className='flex justify-center mt-10 mx-20'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold'>Bài viết mới nhất</h1>
         <PostList></PostList>
        </div>

      </div>
      <div className='flex justify-center mt-10 mx-20'>
        <div className='max-w-md mx-auto rounded-xl overflow-hidden md:max-w-6xl'>
          <h1 className='text-green text-center text-4xl font-extrabold '>Cửa hàng chay</h1>
         <Store></Store>
        </div>

      </div>
    </main>
  )
}
