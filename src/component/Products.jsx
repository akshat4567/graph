import React from "react";
import Prod from "./Prod";
import Sdata from "./Sdata";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Products.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};



const Products = () => {
    return (
        <section className="pp11" id="product">
            <h1 className="heading_style">New Products</h1>
            <div className="pp22">
                <div className="pp33" style={{width:200}}>
                    <button >Mens Clothing</button>
                    <button>Accessories</button>
                    <button>Women's Clothing</button>
                    <button>Winter Wear</button>
                </div>
                <div className="pp111">
                    <Carousel responsive={responsive}>
                        {Sdata.map((item) => {
                            return (

                                <Prod
                                    key={item.id}
                                    imgsc={item.imgsc}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            )

                        })}
                    </Carousel>
                </div>
            </div>
        </section>


    )
}
export default Products;