import React, { Component} from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{
    display: 'inline-block',
    marginRight: '1rem'
  }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class NavBar extends Component {
  render() {
    return (
      <header className='navbar' style={{
        marginBottom: '1.5rem',
        padding: '1rem'
      }}>
        <Link to='/'>
          <h3 style={{display: 'inline'}}>instrumaniak</h3>
        </Link>
        <ul style={{
          listStyle: 'none',
          float: 'right'
        }}>
          <ListLink to='/music'>Music</ListLink>
          <ListLink to='/about'>About</ListLink>
        </ul>
      </header>
    )
  }
}

export default NavBar
