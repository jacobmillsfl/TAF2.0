// Taken from About.tsx
import ShadowBox from "../../Components/Controls/ShadowBox";
// import { Album, AlbumComponent } from "../../Components/Content/Albums";
import AlbumComponent from "../../Components/Content/Albums"
import { Album } from "../../Components/Content/Albums";

export default function Promo() 
{
  const albums = new Array<Album>(
    {
      name: "Soul on Fire - Coming Soon!",
      imgUrl: "/img/soulonfire.png",
      description: "Soul on Fire is the second studio length album by The Ambient Funk. Titled after a featured track, this album represents a self transformation, burning past internal barriers and rising from the ashes. In this release, The Ambient Funk is pushing boundaries in the realm of ambient, progressive, rock, funk, and electronica music. This album also features multiple guest artists."
    },
    {
      name: "TAF",
      imgUrl: "/img/TafAlbumCover.png",
      description: "TAF is the first album by The Ambient Funk. It started as an electronica project and evolved into a sound that can best be described as 'Ambient Funk.' This album lays the roots for The Ambient Funk's style, from mesmerizing synthesizers to screaming guitars, you'll be taken on a journey through the TAF universe."
    },
    {
      name: "The Vault",
      imgUrl: "/img/the_vault.jpg",
      description: "Brigand text goes here."
    },
  )

//   return (
//     <div style={PromoOuterStyle}>
//         <ShadowBox mode="top">
//             {/* <div style={AboutBodyStyle}> */}
//                 {/* <h2>
//                     About Us
//                 </h2>
//                 <p style={AboutContentStyle}>
//                     text "about us"
//                 </p> */}
//             {/* </div> */}
//             <AlbumComponent albums={albums} />
//         </ShadowBox>

//     </div>
    
// );
// }





    return (
        <div style={PromoOuterStyle}>
            <div style={PromoInnerStyle}>
                <ShadowBox mode="top">
                <AlbumComponent albums={albums} />
                </ShadowBox>
            </div>
        </div>
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

const AlbumTwoStyle = {
    "color":"white", 
    "margin": "1em"
}