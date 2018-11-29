/**
 *  Footer
 */

import React, { Component } from 'react'
import { StaticQuery, Link } from 'gatsby'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              site_build_date
            }
          }
        }
      `}
      render={({site:{siteMetadata:{ site_build_date}}}) => (
        <div className='footer'>

        {/* Get site build year only as copyright year */}
        <p>©{site_build_date.split(' ').slice(-1)[0]}, <Link to='/about'>Raziur Rahman</Link>. All rights reserved.</p>

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
      }
    />
  }
}

export default Footer
