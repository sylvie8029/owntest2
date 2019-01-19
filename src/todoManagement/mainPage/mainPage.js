import React from 'react';
import { connect } from 'react-redux';
import ListPage from '../listPage/listPage';
import { getAllTodoStart, addNewTodoStart } from '../todoAction';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      newItemName: ''
    };
  }
  componentDidMount() {
    this.props.getAllTodoStart();
  }
  componentWillReceiveProps(newProps) {
    this.setState({ TodoItems: newProps.todos });
  }
  onNewNameInputChanged = event => {
    this.setState({ newItemName: event.target.value });
  };

  onAddButtonClicked = () => {
    this.setState({
      isAdding: true
    });
  };
  onOkButtonClicked = () => {
    this.props.addNewTodoStart({
      name: this.state.newItemName,
      status: 'todo'
    });
    this.setState({ isAdding: false });
  };

  render() {
    return (
      <div>
        <div>
          <div>LOGO</div>
          <div hidden={!this.state.isAdding}>
            Name
            <input
              value={this.state.newItemName}
              onChange={this.onNewNameInputChanged}
            />
            <button onClick={this.onOkButtonClicked}>OK</button>
          </div>
          <button onClick={this.onAddButtonClicked}>Add New</button>
        </div>
        <div>
          <ListPage type="todo" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  getAllTodoStart,
  addNewTodoStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
