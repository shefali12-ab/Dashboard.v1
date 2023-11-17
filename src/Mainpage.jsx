import React from 'react'
import './Mainpage.css'
import Logo from './hamburger.png'
import Contact from './contact.png'
import  data from'../data (1).json'
import homeicon from './homeicon.png'
import  attendance from './attendance.png'
import book from './book.png'
import analytics from './analytics.png'
import { useState } from 'react'
import Cross from './remove.png'


console.log(data)
console.log(data[" ATTENDANCE"].tuesday.date)
function Mainpage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};
  return (
    <>
    <div className='container'>
        <header className='header'> 
           {/* <img  className='logo' src={Logo}></img> */}
          <button className='sidebarbtn'  onClick={toggleSidebar} > 
           <img  className='logo' src={Logo}></img>
           </button>
           <h1 className='mainheading'>HELLO , {data[" NAME "]}</h1>
           <img className='contactlogo'src={Contact}></img>
        </header>

       { sidebarOpen && (<section className='sidebar'>
        <div className='listdiv'>
        <img className='home'src={homeicon}></img>
                <p>Summary Dashboard</p>
        </div>
        <div className='listdiv'>
        <img className='home'src={attendance}></img>
                <p>Attendance Tracking</p>
        </div>
        <div className='listdiv'>
        <img className='home'src={analytics}></img>

                <p>Behavioural Analytics</p>
        </div>
        <div className='listdiv'>
        <img className='home'src={book}></img>

                <p>Academic Performance </p>
                
        </div>
        {/* <ul>
            
            <li>
               
                <img className='home'src={homeicon}></img>
                <p>Summary Dashboard</p>
                
            </li>
            <img className='home' src={attendance}></img>
            <li>Attendance Tracking</li>
            <img className='home' src={analytics}></img>
            <li>Behavioural Analytics</li>
            <img className='home' src={book}></img>
            <li>Academic Performance Tracking</li>
        </ul> */}

        </section>)}
        <main className='mainsec'>
             <h1 className='mainsecheading'> ATTENDANCE</h1>
             <div className='card1'>
              <div className='firstdiv'>
                 <h1 className='absent'>FN</h1>
                  <h1 className='present'>AN</h1>
              </div>
             <div >
                  <h2 className='mainhead2'>Monday</h2>
                  <p className='mainhead2'>{data[" ATTENDANCE"][" monday"].date}</p>
                  <div className='green'></div>
                  <div className='red'></div>
              </div>
              <div>
                  <h2  className='mainhead2'>Tuesday</h2>
                  <p  className='mainhead2'>{data[" ATTENDANCE"].tuesday.date}</p>
                  <div className='green'></div>
                  <div className='red'></div>
              </div>
              <div>
                  <h2  className='mainhead2'>Wednesday</h2>
                  <p  className='mainhead2'>{data[" ATTENDANCE"].wednesday.date}</p>
                  <div className='green'></div>
                  <div className='red'></div>
              </div>
              <div>
                  <h2  className='mainhead2'>Thrusday</h2>
                  <p  className='mainhead2'>{data[" ATTENDANCE"].thursday.date}</p>
                  <div className='green'></div>
                  <div className='red'></div>
              </div>
              <div>
                  <h2  className='mainhead2'>Friday</h2>
                  <p  className='mainhead2'>{data[" ATTENDANCE"].friday.date}</p>
                  <div className='green'></div>
                  <div className='red'></div>
              </div>
             </div>
             <div className='card2'>
                <h1>Homeworks</h1>
               <div >
               <ul>
                    <li>ENGLISH</li>
                    <li>SCIENCE</li>
                    <li>MATHS</li>
                    <li>SOCIAL </li>
                    <li>TAMIL</li>
                </ul>
               </div>
             </div>
             <div className='card3'>
                <h1>Behavioral Analytics</h1>
               <div className='card3-pie'>
               <div className='piechart'></div>
               <div className='green1'></div>
                {/* <p>{data["Behavioral Analytics"][0]}</p> */}
                <div className='red1'></div>
                {/* <p>{data["Behavioral Analytics"][1]}</p> */}
               </div>
              
             </div>
          
          

        </main>
       
    </div>
    
    </>
  )
}

export default Mainpage