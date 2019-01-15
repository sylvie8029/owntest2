import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../todoItem/todoItem';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: props.todos };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ todoItems: newProps.todos });
  }

  render() {
    let ListPage = this.state.todoItems.filter(
      todo => todo.status === this.props.type
    );
    return (
      <div>
        11111
        {ListPage.map(todo => {
          return <TodoItem key={todo.id} todoItem={todo} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(`store`, store);
  return {
    todos: store.todoItems.todos
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
