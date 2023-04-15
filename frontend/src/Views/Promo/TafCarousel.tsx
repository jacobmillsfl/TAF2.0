import React from 'react'
import ShadowBox from "../../Components/Controls/ShadowBox"

import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

export default function Promo() {

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    // State for Animation
    const [animating, setAnimating] = React.useState(false);
  
    // Sample items for Carousel
    const items = [
        {
            caption: 'Welcome to TAFers.net!',
            src: process.env.PUBLIC_URL + "/img/StableProductionStudios.png",
            altText: 'Welcome to TAFers DOT net',
            paragraph: "Home of The Ambient Funk and friends, this website includes a portfolio of content from Stable Production Studios",
            heading: "Welcome to TAFers.net!"
        },
        {
            caption: 'Soul on Fire',
            src: process.env.PUBLIC_URL + "/img/soulonfire2.png",
            altText: 'Soul on Fire Album coming soon',
            paragraph: "The Ambient Funk is releasing a new album later this year! Stay tuned for a release date.",
            heading: "New album coming soon!"
        },
        {
            caption: 'Merch!',
            src: process.env.PUBLIC_URL + "/img/taf_shirt.png",
            altText: 'We have merchandise',
            paragraph: "We are now selling merch through eBay. Order your The Ambient Funk tshirt today!",
            link : "https://www.ebay.com/itm/155450892009",
            heading: "TAF merch is now available!"
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
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <div className="row" style={CarouselRowStyle}>
                    <div className="col-lg-2 col-sm-hidden"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={item.src} alt={item.altText} style={ImageStyle} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" style={ContentStyle}>
                        <p style={{"fontSize": "20pt"}}>{item.heading}</p>
                        <p>{item.paragraph}</p>
                        {item.link && <a href={item.link} style={LinkStyle} target="_blank">{item.link}</a>}
                    </div>
                    <div className="col-lg-2 col-sm-hidden"></div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <ShadowBox mode="top">
            <div style={ShadowTopStyle}>
                <Carousel previous={previousButton} next={nextButton}
                    activeIndex={activeIndex} style={CarouselStyle}>
                    
                    <CarouselIndicators items={items}
                        activeIndex={activeIndex}
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIndex(newIndex);
                        }} />
                    {carouselItemData}
                    <CarouselControl directionText="Prev"
                        direction="prev" onClickHandler={previousButton} />
                    <CarouselControl directionText="Next"
                        direction="next" onClickHandler={nextButton} />
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
    "padding":"3em", 
    "color":"white", 
    "fontFamily":"Audiowide", 
    "textAlign":"center" as const
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