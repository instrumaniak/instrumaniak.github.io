import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'


export default () => (
  <div className='footer'>
  <p>© $YEAR, <Link to='/about'>Raziur Rahman</Link>. All rights reserved.</p>
  <div className='social'>
    <a href='https://twitter.com/instrumaniak' target='_blank' rel='noopener noreferrer'>
      <Fa icon={['fab', 'twitter' ]} />
    </a>
    <a href='https://github.com/instrumaniak' target='_blank' rel='noopener noreferrer'>
      <Fa icon={['fab', 'github-alt']} />
    </a>
    <a href='https://codepen.io/instrumaniak/' target='_blank' rel='noopener noreferrer'>
      <Fa icon={['fab', 'codepen']} />
    </a>
    <a href='https://www.deviantart.com/instrumaniak' target='_blank' rel='noopener noreferrer'>
      <Fa icon={['fab', 'deviantart']} />
    </a>
    <a href='https://www.linkedin.com/in/raziur/' target='_blank' rel='noopener noreferrer'>
      <Fa icon={['fab', 'linkedin']} />
    </a>
    <a href='/feed.xml' target='_blank' rel='noopener noreferrer'>
      <Fa icon='rss' />
    </a>
  </div>
</div>
)
