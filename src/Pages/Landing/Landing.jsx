import React from 'react'
import Header from '../../Components/Header/Header';
import Intro from '../../Components/Intro/Intro'
import PapularWatch from '../../Components/PapularWatch/PapularWatch';
import ImgSection from '../../Components/ImgSection/ImgSection';
import WatchModels from '../../Components/WatchModels/WatchModels';
import AboutWatch from '../../Components/AboutWatch/AboutWatch'
import Footer from '../../Components/Footer/Footer';
import SwiperCards from '../../Components/SwiperCards/SwiperCards';
import Comments from '../../Components/Comments/Comments';
import SmartWatch from '../../Components/SmartWatch/SmartWatch';
import Blogs from '../../Components/Blogs/Blogs';
import OfferSection from '../../Components/OfferSection/OfferSection';
import NewAllProducts from '../AllProducts/NewAllProducts';
import TheBestProducts from '../../Components/TheBestProducts/TheBestProducts';
import OffWatch from '../../Components/OffWatch/OffWatch';

function Landing() {
    return (
        <>
            <Header />
            <Intro />
            <WatchModels />
            <PapularWatch title='محبوب ترین' model='رولکس' modelColor='طلایی' ImgSrc='./images/Watch/png-transparent-rolex-daytona-rolex-datejust-watch-movement-rolex-watch-accessory-diamond-rolex-removebg-preview-min.png'  />
            <ImgSection />
            <Comments />
            <TheBestProducts />
            <PapularWatch title='جدید ترین' model='رولکس' modelColor='پلاتینیومی' ImgSrc='./images/Watch/png-transparent-rolex-daytona-rolex-datejust-watch-rolex-oyster-rolex-watch-accessory-gold-steel-removebg-preview-min.png' />
            <OfferSection />
            <SwiperCards />
            <Blogs />
            <SmartWatch />
            <OffWatch />
            <AboutWatch />
            <Footer />
        </>
    )
}

export default Landing