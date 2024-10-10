import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const clients = [
  { name: 'EPS', logo: './Clients/clients2.png', alt: 'EPS logo' },
  { name: 'Active Sine', logo: './Clients/clients1.png', alt: 'Active Sine logo' },
 
  {  logo: '../Clients/clients4.png', alt: 'Himtaj Jewelry logo' },
  {  logo: '../Clients/clients5.png', alt: 'Glucks Finance logo' },
  { logo: '../Clients/clients6.png', alt: 'Glucks Finance logo' },
  { logo: '../Clients/clients3.png', alt: 'Glucks Wealth logo' },
  {  logo: '../Clients/clients7.png', alt: 'Himtaj Jewelry logo' },
  {  logo: '../Clients/clients8.png', alt: 'Glucks Finance logo' },
  {  logo: '../Clients/clients9.png', alt: 'Glucks Finance logo' },
  { logo: '../Clients/clients10.png', alt: 'Glucks Wealth logo' },
  {  logo: '../Clients/clients12.png', alt: 'Glucks Finance logo' },
  { logo: '../Clients/clients11.png', alt: 'Glucks Wealth logo' },
];

const Client = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-[4rem] w-full text-center  ">
        <h4 className='text-4xl mb-7 font-semibold'>Our Clients</h4>
    <Slider {...settings}>
      {clients.map((client, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-full w-fit relative mb-5 sm:mb-0"
        >
        <img
  src={client.logo}
  alt={client.alt}
  className="w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-40 lg:h-40 mx-auto relative object-contain"
/>

        </div>
      ))}
    </Slider>
  </section>
  );
};

export default Client;
