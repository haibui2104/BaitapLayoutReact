import React, { Component } from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Card1 from './Card1'
import Footer from './Footer'

export default class  extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Welcome/>
          <Card1/>
          <Footer/>
      </div>
    )
  }
}
