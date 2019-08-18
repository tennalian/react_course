import React, { Component } from 'react'
import Select from 'react-select';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import ArticleList from './components/article-list';
import ArticlesChart from './components/articles-chart';
import UserForm from './components/user-form';
import './app.scss'

import {normalizedArticles} from './fixtures';

// react.rocks

class App extends Component {
  state = {
    openItem: null,
    selectedDay: null
  }

  render() {
    return (
      <div className="main">
        <div className="main__filters">
          <UserForm />
          <DayPicker onDayClick={this.handleDayClick}/>
          <Select options = {this.options}
                  value= {this.state.openItem}
                  onChange = {this.handleSelect}/>
        </div>
        <div className="main__content">
          <ArticleList articles = {normalizedArticles} />
          <ArticlesChart articles = {normalizedArticles} />
        </div>
      </div>
    )
  }

  handleSelect = (openItem) => this.setState({ openItem });

  handleDayClick = (selectedDay) => this.setState({ selectedDay })

  get options() {
    return normalizedArticles.map(article => ({
      value: article.id,
      label: article.title
    }));
  }
}

export default App;
