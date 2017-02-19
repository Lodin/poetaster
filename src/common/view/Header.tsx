import {define, h, Component, emit} from 'skatejs/src';
import styles from './Header.css';

type HeaderProps = null;

class Header extends Component<HeaderProps> {
  public static get is() {
    return 'pr-header';
  }

  public renderCallback() {
    return [
      <style>{styles}</style>,
      <app-header reveals>
        <paper-toolbar>
          <div main-title class="title">Poetaster</div>
        </paper-toolbar>
      </app-header>
    ];
  }
}

define(Header);

export {HeaderProps};
export default Header;
