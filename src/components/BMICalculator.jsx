import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");


  const calculateBMI = (e)=>{
    e.preventDefault();

    if(!height || !weight || !gender){
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightMtr = height / 100;
    const bmiValue = weight / (heightMtr * heightMtr).toFixed(2);
    setBmi(bmiValue);

    if(bmiValue < 18.5){
      toast.warning("Hey!! You are Underweight. You need consult with healthcare provider.");
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
      toast.success("Hey!! You are Healthy");
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9){
      toast.warning("Hey!! You are Overweight. You need consult with healthcare provider.");
    }
    else{
      toast.error("Hey!! You are Obese. Must consult with healthcare provider.");
    }
  }


  return (
    <section className='bmi'>
      <h1>Calculate Your BMI</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
              <div>
                <label>Height (cm) </label>
                <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} required/>
              </div>
              <div>
                <label>Weight (cm) </label>
                <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
              </div> 
              <div>
                <label>Gender </label>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <button type="submit">Calculate BMI</button>
              </div>                  
          </form>
        </div>
        <div className="wrapper">
          <img src='bmi.jpg' alt='BMI Image' />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator