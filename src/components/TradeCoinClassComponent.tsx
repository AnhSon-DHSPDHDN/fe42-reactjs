import { Component, ReactNode } from "react";

type TProps = any;
type TState = {
  btcPrice: number;
};

class TradeCoinClassComponent extends Component<TProps, TState> {
  timer: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      btcPrice: 90000, // USD
    };
  }

  componentDidMount(): void {
    console.log("componentDidMount run");
    // Fake call api
    this.timer = setInterval(() => {
      console.log("Watch btc Price");
      const newBtcPrice = 80000 + Math.floor(Math.random() * 20000);
      this.setState({
        btcPrice: newBtcPrice,
      });
    }, 2000);
  }

  componentDidUpdate(): void {
    if (this.state.btcPrice < 85000) {
      // Buy BTC
      console.log(`BUY BTC AT ${this.state.btcPrice}`);
    }
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount Run");
    clearInterval(this.timer);
  }

  render(): ReactNode {
    return (
      <div>
        <h3>BTC Price: {this.state.btcPrice}</h3>
      </div>
    );
  }
}

export default TradeCoinClassComponent;
