import SectionTitle from "./SectionTitle";
import featuredImage from '../assets/home/featured.jpg'
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
           <SectionTitle
           subHeading="check it out" heading="Featured Item"
           ></SectionTitle>
           <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
             <div>
                <img src={featuredImage} alt="" />
             </div>
             <div className="md:ml-10">
                <p>Aug 20,2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam esse minus. Temporibus veniam consequuntur earum hic molestiae autem deleniti?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
             </div>
           </div>
        </div>
    );
};

export default FeaturedItem;