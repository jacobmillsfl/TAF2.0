import React from "react"
import CardComponent from "../../Components/Controls/CardComponent"

export type Merch = {
  name: string,
  imgUrl: string,
  storeUrl: string
}

export const MerchComponent: React.FC = () => {

  let merchandise = new Array<Merch>(
    {
      name: "TAF Hat",
      imgUrl: process.env.PUBLIC_URL + "img/taf_hat.png",
      storeUrl: "https://www.ebay.com/itm/155534593613"
    },
    {
      name: "TAF Shirt",
      imgUrl: process.env.PUBLIC_URL + "img/taf_shirt.png",
      storeUrl: "https://www.ebay.com/itm/155450892009"
    },
    {
      name: "BRIGAND Shirt",
      imgUrl: process.env.PUBLIC_URL + "img/brigand_shirt.png",
      storeUrl: "https://www.ebay.com/itm/155450926544"
    },
  )

  return (
    <div style={MerchFrameStyle}>
      <CardComponent cardInfo={merchandise} />
    </div>
  )
}


const MerchFrameStyle = {
  "maxWidth": "6000px",
  "textAlign": "center" as const,
  "margin": "auto",
  paddingBottom: "8em"
}