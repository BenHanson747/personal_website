import {useBattery} from 'react-use';

function FetchingData() {

    const {fetched} = useBattery();

    if (!fetched) {

    return(    
        <div>
             One moment... we are fetching the data we need.
       </div>
       )
    };
};

export default FetchingData;