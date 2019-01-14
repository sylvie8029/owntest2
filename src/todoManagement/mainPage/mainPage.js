import React from 'react';
import { connect } from 'react-redux';
import ListPage from '../listPage/listPage';
// import { getAllTodosStart,addNewTodoStart } from '../todoAction';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      newItemName: ''
    };
  }
  // componentDidMount() {
  //   this.props.getAllTodosStart();
  // }
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
  };

  onCrossButtonClicked = () => {
    this.setState({ isAdding: false });
  };

  render() {
    return (
      <div>
        <div>
          <div>LOGO</div>
          <div hidden={!this.state.isAdding}>
            Name
            <input />
            <button onClick={this.onOkButtonClicked}>OK</button>
            <button onClick={this.onCrossButtonClicked}>X</button>
          </div>
          <button onClick={this.onAddButtonClicked}>Add New</button>
        </div>
        <div>
          <ListPage />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
