import {define, h, Component} from 'skatejs/src';
import Header from './Header';

type AppProps = null;

class App extends Component<AppProps> {
  public static get is() {
    return 'pr-app';
  }

  public renderCallback() {
    return [
      <Header />
    ];
  }
}

define(App);

export {AppProps};
export default App;
