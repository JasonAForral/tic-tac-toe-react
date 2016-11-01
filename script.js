const { Component, PropTypes } = React

class MyComponent extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

class DialogBox extends Component {
  render() {
    return (
      <div className="dialogBox">
        words
      </div>
    )
  }
}

class Square extends Component {

  getOccupier(data) {
    switch (data){
      case 1:
        return 'X'
      case 2:
        return 'O'
      default:
        return ''
    }
  }

  render() {
    const { data } = this.props
    return (
      <div className="square">
        {this.getOccupier(data)}
      </div>
    )
  }
}


class Board extends Component {
  render() {
    const { data, size } = this.props
    const slice = Array.from(data)
    return (
      <div className="board" style={{width: size*100+9, height: size*100+9}}>
        { slice.map((square, i) => (
          <Square key={i} data={square} />
        )) }
      </div>
    )
  }
}



class App extends Component {
  constructor(props) {
    super(props)
    const size = 4,
          data = new Int8Array(size * size)
    this.state = {
      data,
      size,
    }
  }
  componentDidMount(){
    console.log('pass')
    this.setState({
      ...this.state,
    })
  }
  render() {
    const { data, size } = this.state
    return (
      <div>
        <Board 
        data={data}
        size={size}
         />
        <DialogBox />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
)
