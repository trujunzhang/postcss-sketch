import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import styles from './menu.css';

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical className={"menuContainer " + styles.menuContainer}>
        <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick} />
        <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick} />
        <Dropdown item text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='mental' active={activeItem === 'mental'} onClick={this.handleItemClick} />
        <Menu.Item name='awesome' active={activeItem === 'awesome'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}