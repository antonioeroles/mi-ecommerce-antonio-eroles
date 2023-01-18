
import { useState,useEffect } from "react"
import ItemDetail from "../../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";


const vinoteca = [
  {id: 1, title:"Alma Mora", description:"Malbec", price: "$889", image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/almamora_mg_74021-8ec8432669ff3218ba16008696332959-640-0.webp", category:"vinos"},
  {id: 2, title: "Smirnoff", description:"Vodka 700 cc", price: "$ 1200", image:"https://labebidadetusfiestas.com.ar/42114/vodka-smirnoff-700cc.jpg", category:"Cocktails"},
  {id:3, title:"Mumm", description:"Champagne", price:" $ 1350", image:"https://florerialarosa.com.ar/wp-content/uploads/2020/07/Mumm-grande-2.jpg", category:"Champagne"}
];
const ItemsDetailsContainer = () => {
    const [singleProduct, setSingleProduct] = useState ({});
    const {id} = useParams();
    console.log (id)
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve ({id})
        }, 2000);
    })
    useEffect(() =>{
        getProduct
        .then ((response) =>{
           setSingleProduct(response);
        })
        .catch ((error) =>{
           console.log(error);})
      },[]
      );
  return (
    <div>
      <ItemDetail product={singleProduct} />
    </div>
  )
}

export default ItemsDetailsContainer