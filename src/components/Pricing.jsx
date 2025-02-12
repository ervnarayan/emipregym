import { Check } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';



const Pricing = () => {
const pricing = [
  {
    imgUrl: "/pricing.jpg",
    title: "QUARTERLY",
    price: "6,000",
    length: "3 MONTHS"
  },
  {
    imgUrl: "/pricing.jpg",
    title: "HALF YEARLY",
    price: "12,000",
    length: "6 MONTHS"
  },
  {
    imgUrl: "/pricing.jpg",
    title: "YEARLY",
    price: "15,000",
    length: "12 MONTHS"
  }
];

  return (
    <section className='pricing'>
      <h1>EMPIRE GYM PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs. {element.price}</h3>
                  <p>For : {element.length}</p>
                </div>
                <div className="description">
                  <p><Check /> Equipments</p>
                  <p><Check /> All Day Free Training</p>
                  <p><Check /> Free Reestroom</p>
                  <p><Check /> 24/7 Free Support</p>
                  <p><Check /> 20 Days Freezing Options</p>
                  <Link to={"/"}>Join Now</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing