import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../todoItem/todoItem';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: props.todoItems };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ todoItems: newProps.todoItems });
  }

  render() {
    let ListPage = this.state.todoItems.filter(
      todo => todo.status === this.props.type
    );
    return (
      <div>
        11111
        {ListPage.map(aaa => {
          return <TodoItem key={aaa.id} todoItem={aaa} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(`store`, store);
  return {
    todoItems: store.todoItems.todoItems
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
