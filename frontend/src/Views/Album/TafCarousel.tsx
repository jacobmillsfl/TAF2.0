import React from 'react'
import ShadowBox from "../../Components/Controls/ShadowBox"
import Carousel from 'react-bootstrap/Carousel';

export default function Promo() {

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);

    // State for Animation
    const [animating, setAnimating] = React.useState(false);

    // Sample items for Carousel
    const items = [
        {
            caption: 'Soul On Fire',
            src: process.env.PUBLIC_URL + "/img/soultransparent.png",
            altText: 'Soul On Fire',
            paragraph: "The second release from The Ambient Funk is out now! Check it out on your favorite streaming service.",
            link: "https://distrokid.com/hyperfollow/theambientfunk/soul-on-fire",
            heading: "Soul On Fire"
        },
        {
            caption: 'Merch!',
            src: process.env.PUBLIC_URL + "/img/taf_merch.png",
            altText: 'We have merchandise',
            paragraph: "We are now selling merch through eBay. Order your The Ambient Funk tshirt today!",
            link: "https://www.ebay.com/usr/theambientfunk",
            heading: "TAF merch is now available!"
        },
        {
            caption: 'Welcome to TAFers.net!',
            src: process.env.PUBLIC_URL + "/img/StableProductionStudios.png",
            altText: 'Welcome to TAFers DOT net',
            paragraph: "Home of The Ambient Funk and friends, this website includes a portfolio of content from Stable Production Studios",
            heading: "Welcome to TAFers.net!"
        },
    ];

    // Items array length
    const itemLength = items.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <Carousel.Item>
                <div className="row" style={CarouselRowStyle}>
                    <div className="col-lg-2 col-sm-hidden"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={item.src} alt={item.altText} style={ImageStyle} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" style={ContentStyle}>
                        <p style={{ "fontSize": "20pt" }}>{item.heading}</p>
                        <p>{item.paragraph}</p>
                        {item.link && <a href={item.link} style={LinkStyle} target="_blank" rel="noopener">{item.link}</a>}
                    </div>
                    <div className="col-lg-2 col-sm-hidden"></div>
                </div>
            </Carousel.Item>
        );
    });

    return (
        <ShadowBox mode="top">
            <div style={ShadowTopStyle}>
                <Carousel>
                    {carouselItemData}
                </Carousel>
            </div >
        </ShadowBox>
    );
}

const PromoOuterStyle = {
    "paddingBottom": "10vh"
}
const PromoInnerStyle = {
    /*"margin": "10% 20px 10px 20px",*/
    "display": "contents",
    /*"display": "flex",*/
    "justifyContent": "center",
    "lineHeight": "1.5rem",
}
const LinkStyle = {
    "wordWrap": "break-word" as const
}
const ContentStyle = {
    "padding": "3em",
    "color": "white",
    "fontFamily": "Audiowide",
    "textAlign": "center" as const
}
const ImageStyle = {
    "maxWidth": "50vw",
    "maxHeight": "30vh",
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto"
}
const CarouselStyle = {
    // "paddingLeft":"10vw", 
    // "paddingRight":"10vw"
    // commenting out because it makes the paragraph contents too thin on mobile.
}
const ShadowTopStyle = {
    display: 'inlineBlock',
    width: "100%"
}

const CarouselRowStyle = {
    "minHeight": "350px"
}