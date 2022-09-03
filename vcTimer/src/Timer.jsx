import { subscribe, unsubscribe } from "@cumcord/modules/common/FluxDispatcher"
import { findByProps, findByDisplayName } from "@cumcord/modules/webpack"

const text = findByProps("h5");
const FormDivider = findByDisplayName("FormDivider");

const formatTime = (time) => {
    return (time / 3600).toFixed(0).padStart(2,"0") + ":" + (new Date(time * 1000).toISOString().slice(14, 19))
}

export default class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      elapsedTime: 0,
    };
  }

  onChannelChange  = (e) => {
    if (e?.state == 'RTC_CONNECTED' && e?.context != "stream") {
      this.setState({ elapsedTime: 0});
    }
  }

  componentDidMount () {
    subscribe('RTC_CONNECTION_STATE', this.onChannelChange);

    this.timerUpdate = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount () {
    unsubscribe('RTC_CONNECTION_STATE', this.onChannelChange);
    clearInterval(this.timerUpdate);
  }

  render () {
    return (
      <div>
        <FormDivider style={{"margin-top": "6px", "margin-bottom": "4px"}}/>
          Time elapsed: <span className={`${text.h5} ${text.defaultColor}`}>
            {formatTime(this.state.elapsedTime)}
          </span>
      </div>
    );
  }
};
