import React, { Component } from 'react';
import Button, { ButtonStyle as BtnStyle } from '../Core/Component/Button';
import Emojis from '../Core/Emoji/emojis';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
      <div className="header">
        <div className="inline-style float-left">
          <img src={logo} width={64} height={64} />
        </div>
        <div className="inline-style float-left web-title">Logo</div>
        <div className="inline-style float-right header-button">
          <Button className={BtnStyle.secondary}>{Emojis.arrow_double_down.char+'  导出'}</Button>
        </div>
        <div className="inline-style float-right header-button">
          <Button className={BtnStyle.secondary}>{Emojis.floppy_disk.char+'  保存'}</Button>
        </div>
      </div>
        );
    }
}

export default Header;