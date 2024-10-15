import BelowHero from "./BelowHero/BelowHero"
import Happy from "./Happy/Happy"
import HeroSection from "./Hero/Hero"
import ProductRange from "./ProductRange/ProductRange"
import ReviewsSection from "./Review/Review"
import VideoSection from "./Video/Video"


const Home = () => {
  return (
 <>
 <HeroSection/>
   <BelowHero/>
   <ProductRange/>
   <VideoSection/>
   <ReviewsSection/>
<Happy/>

  </>

  )
}

export default Home