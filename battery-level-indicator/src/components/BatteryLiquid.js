import {useBattery} from 'react-use';

function BatteryLiquid () {

    const {level} = useBattery();
    const BatteryLiquidStyle = {height:`${parseInt(level * 100)}%`};

    return (<div style={BatteryLiquidStyle} className="battery__liquid"></div>)
}

export default BatteryLiquid;