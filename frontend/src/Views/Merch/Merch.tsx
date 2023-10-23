import React from "react"
import CardComponent from "../../Components/Controls/CardComponent"
import { ContentContainer } from "../ContentContainer/ContentContainer"

export type Merch = {
  name: string,
  imgUrl: string,
  storeUrl: string
}

export const MerchComponent: React.FC = () => {

  let merchandise = new Array<Merch>(
    {
      name: "Soul On Fire Shirt",
      imgUrl: process.env.PUBLIC_URL + "img/sof_shirt.png",
      storeUrl: "https://www.ebay.com/itm/155736237137"
    },
    {
      name: "The Ambient Funk TAF Hat",
      imgUrl: process.env.PUBLIC_URL + "img/taf_hat.png",
      storeUrl: "https://www.ebay.com/itm/155656999594"
    },
    {
      name: "The Ambient Funk TAF Unisex Shirt",
      imgUrl: process.env.PUBLIC_URL + "img/taf_shirt.png",
      storeUrl: "https://www.ebay.com/itm/155450892009"
    },
    {
      name: "Brigand Unisex T-Shirt",
      imgUrl: process.env.PUBLIC_URL + "img/brigand_shirt.png",
      storeUrl: "https://www.ebay.com/itm/155450926544"
    },
  )

  return (
    <ContentContainer>
      <div style={MerchFrameStyle}>
        <CardComponent cardInfo={merchandise} />
      </div>
    </ContentContainer>
  )
}


const MerchFrameStyle = {
  "maxWidth": "80vw",
  "textAlign": "center" as const,
  "margin": "auto",
}