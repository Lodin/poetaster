import {HTMLProps} from 'skatejs/src/ts-typings/common';
import {AppDrawer} from 'polymer2-elements-typings/src/app-layout/app-drawer';
import {AppHeader} from 'polymer2-elements-typings/src/app-layout/app-header';
import {AppToolbar} from 'polymer2-elements-typings/src/app-layout/app-toolbar';
import {PaperButton} from 'polymer2-elements-typings/src/paper-button/paper-button';
import {PaperIconButton} from 'polymer2-elements-typings/src/paper-icon-button/paper-icon-button';
import {PaperItem} from 'polymer2-elements-typings/src/paper-item/paper-item';
import {PaperListbox} from 'polymer2-elements-typings/src/paper-listbox/paper-listbox';

declare class PaperToolbar extends Polymer.Element {
  public bottomJustify: string;
  public justify: string;
  public middleJustify: string;
}

declare global {
  interface HTMLStyleElement {
    is: string;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-drawer': HTMLProps<AppDrawer>,
      'app-header': HTMLProps<AppHeader>,
      'app-toolbar': HTMLProps<AppToolbar>,
      'paper-button': HTMLProps<PaperButton>,
      'paper-icon-button': HTMLProps<PaperIconButton>,
      'paper-item': HTMLProps<PaperItem>,
      'paper-listbox': HTMLProps<PaperListbox>
      'paper-toolbar': HTMLProps<PaperToolbar>
    }
  }
}

