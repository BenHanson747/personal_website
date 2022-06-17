import { useBattery } from "react-use";

function NotSupported() {
  const { isSupported } = useBattery();

  if (!isSupported) {
    return (
      <div>
        The Battery Level Indicator is not currently supported in this browser.
      </div>
    );
  }
}

export default NotSupported;
