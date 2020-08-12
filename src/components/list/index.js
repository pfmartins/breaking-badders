import React from 'react';
import Loader from 'react-loader-spinner'
import './list.css';
import Card from '../card'

class List extends React.Component {
  constructor(props){
		super(props)

		this.state = {
      charList: [],
      loading: false
    }
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    this.setState({loading: true});

    const _apiFilters = 'characters?category=Breaking+Bad';
    fetch(`https://www.breakingbadapi.com/api/${_apiFilters}`)
    .then(result => result.json())
    .then(charList => this.updateList(charList))
		.catch(error => console.error(error))
  }

  updateList(charList) {
    this.setState({charList, loading: false});
  }

  render() {
    const { charList, loading } = this.state;
    const cardList = charList.map((char, idx) => <Card key={idx} character={char}/>);

    return (
      <div className="list" data-testid="list">
          {loading ? <div data-testid="loader"><Loader type="TailSpin" color="#79b473" height={80} width={80} /></div> 
                  : <div data-testid="listContent" className="list-content">{cardList}</div>
          }
      </div>
    )
  }
}

export default List;
