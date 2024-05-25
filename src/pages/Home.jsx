import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FeaturedItem from "../components/FeaturedItem";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet> 
                <title>Bistro Boss|Home</title>
            </Helmet>
             <Banner></Banner>
             <Category></Category>
             <PopularMenu></PopularMenu>
             <FeaturedItem></FeaturedItem>
             <Testimonials></Testimonials>
        </div>
    );
};

export default Home;