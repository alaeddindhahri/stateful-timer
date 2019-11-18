import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Stateful Time Component'

export default class AppTitle extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )
  }
}