import React from 'react';
import { connect } from 'react-redux';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoItem: props.todoItem
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.props.todo.status === 'todo' ? (
            <button>111</button>
          ) : (
            <button>222</button>
          )}
        </div>
        <button>111</button>
        <div>todo2</div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    // TodoItem: store.todos.TodoItem
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
