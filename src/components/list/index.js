import React from 'react';
import Loader from 'react-loader-spinner'
import './list.css';
import Card from '../card'

class List extends React.Component {
  constructor(props){
		super(props)

		this.state = {
      charList: [],
      loading: false,
      offset: 0,
      perPage: 6
    }

    this.hasNext = true;
  }

  componentDidMount() {
    this.getCharacters(this.state.offset);
  }

  getCharacters(offset) {
    this.setState({loading: true});

    const categoryFilter = `characters?category=Breaking+Bad`;
    const itemsPerPageFilter = `&limit=${this.state.perPage}`;
    const offsetFilter = `&offset=${offset}`;

    fetch(`https://www.breakingbadapi.com/api/${categoryFilter}${itemsPerPageFilter}${offsetFilter}`)
    .then(result => result.json())
    .then(charList => this.updateList(charList))
		.catch(error => console.error(error))
  }

  updateList(charList) {
    charList.length < this.state.perPage ? this.hasNext = false : this.hasNext = true;
    this.setState({charList, loading: false});
  }

  paginate = (isNext) => {
    let newOffset;
    if (isNext) {
      newOffset = this.state.offset + this.state.perPage;      
    } else {
      newOffset = this.state.offset - this.state.perPage;      
    }

    this.setState({offset: newOffset});
    this.getCharacters(newOffset);
  }

  render() {
    const { charList, loading, offset } = this.state;
    const cardList = charList.map((char, idx) => <Card key={idx} character={char}/>);

    return (
      <>
        <div className="list" data-testid="list">
            {loading ? <div data-testid="loader"><Loader type="TailSpin" color="#79b473" height={80} width={80} /></div> 
                    : <div data-testid="listContent" className="list-content">{cardList}</div>
            }
        </div>
        <div className="list__pagination">
          <div className="list__previous-page" onClick={evt => this.paginate(false, evt)}>
            {offset > 0 ? '<< Previous' : ''}
          </div>
          <div className="list__next-page" onClick={evt => this.paginate(true, evt)}>
            { this.hasNext ? ' Next >>' : ''}
          </div>
        </div>
      </>
      )
  }
}

export default List;
