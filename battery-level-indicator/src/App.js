// import {useBattery} from 'react-use';
import NotSupported from './components/NotSupported';
import FetchingData from './components/FetchingData';
import BatteryLiquid from './components/BatteryLiquid';
import BatteryPercentage from './components/BatteryPercentage';
import BatteryStatus from './components/BatteryStatus';


function App() {

  return (
    <>
    <NotSupported />
    <FetchingData />
     <section className="battery"> 
            <div className="battery__card"> 
                <div className="battery__data">
                    <p className="battery__text">Battery</p>
                        <BatteryPercentage />
                            <BatteryStatus />
                </div>

                <div className="battery__pill">
                    <div className="battery__level">
                       <BatteryLiquid />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default App;

// import {useBattery} from 'react-use';

// const App = () => {
//   const batteryState = useBattery();

//   if (!batteryState.isSupported) {
//     return (
//       <div>
//         <strong>Battery sensor</strong>: <span>not supported</span>
//       </div>
//     );
//   }

//   if (!batteryState.fetched) {
//     return (
//       <div>
//         <strong>Battery sensor</strong>: <span>supported</span> <br />
//         <strong>Battery state</strong>: <span>fetching</span>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <strong>Battery sensor</strong> <span>supported</span> <br />
//       <strong>Battery state</strong>: <span>fetched</span> <br />
//       <strong>Charge level</strong>:&nbsp;&nbsp; <span>{ (batteryState.level * 100).toFixed(0) }%</span> <br />
//       <strong>Charging</strong>:&nbsp;&nbsp; <span>{ batteryState.charging ? 'yes' : 'no' }</span> <br />
//       <strong>Charging time</strong>:&nbsp;&nbsp;
//       <span>{ batteryState.chargingTime ? batteryState.chargingTime : 'finished' }</span> <br />
//       <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{ batteryState.dischargingTime }</span>
//     </div>
//   );
// };

// export default App;