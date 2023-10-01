import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          {/* <News key=""pagesize={10} apikey={this.apikey} country="in" category="science"/> */}
          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={10} apikey={this.apikey} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pagesize={10} apikey={this.apikey} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={10} apikey={this.apikey} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pagesize={10} apikey={this.apikey} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" pagesize={10} apikey={this.apikey} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pagesize={10} apikey={this.apikey} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pagesize={10} apikey={this.apikey} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={10} apikey={this.apikey} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
