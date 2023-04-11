import {Line} from "react-chartjs-2";
import { Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement } from "chart.js";
import "./Content.css"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const Content = () => {
    const data1={
        labels : ["Week 1","Week2","Week3","Week 4"],
        datasets :[{
            label: 'Line 1',
            data:[101,208,304,104],
            backgroundcolor:"transparent",
            borderColor:"Black",
            tension:0.5
        },
        {
            label: 'Line 2',
            data:[105,200,340,150],
            backgroundcolor:"transparent",
            borderColor:"Blue",
            tension:0.5
        }]

    }
    
  return (
    <div className='Container'>
      <div className="left">
        <h1>Board.</h1>
        <p>Dashboards</p>
        <p>Transactions</p>
        <p>Schedules</p>
        <p>Users</p>
        <p>Settings</p>
        <div className='left-footer'>
            <p>Help</p>
            <p>Contact Us</p>
        </div>
      </div>
      <div className='right'>
      <div className='right-head'>
          <h1>Dashboard</h1>
      </div>
      <div className='right-top'>
      <div class="box">Div 1</div>
  <div class="box">Div 2</div>
  <div class="box">Div 3</div>
  <div class="box">Div 4</div>
      </div>
       
      <div className="graph">
        <Line data={data1}></Line>
      </div>

      </div>

      
    </div>
  )
}

export default Content
