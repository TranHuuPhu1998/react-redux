import React, { Component } from 'react';
import './TodosList.css';
import { connect } from 'react-redux';
import { actAddTodo } from '../../action/index';

class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemtodo: ''
        }
    }


    onAddTask = (e) => {
        e.preventDefault();
        if (this.state.itemtodo) {
            this.props.AddTask(this.state);
        }
    }

    onChange = e => {
        e.preventDefault();
        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        });
    };

    render() {
        let { listTask } = this.props;
        let { itemtodo } = this.state;
        return (
            <div className="todoslist">
                <div className="modal" id="modaladd">
                    <div className="modal__overlay"></div>
                    <div className="modal__body">
                        <div className="body">
                            <span className="span">
                                What needs to be done?
                        </span> <br /> <hr />
                            <form onSubmit={e => this.onAddTask(e)}>
                                <input onChange={e => this.onChange(e)} name="itemtodo" type="type" value={itemtodo || ""} /><br /> <hr />
                            </form>
                            {listTask.map((item, index) => (
                                <form key={index} onSubmit={this.onAddTask}>
                                    <input name="itemtodo" type="type" value={item.itemtodo || ""} />
                                </form>
                            ))}
                            <div className="bootom">
                                <span className="span">iteam left</span>

                                <button className="btn">All</button>
                                <button className="btn">Active</button>
                                <button className="btn">Completed</button>
                                <button className="btn">Clear completed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    listTask: state.addTask
})

const mapDispatchToProps = (dispatch, props) => ({
    AddTask: (data) => {
        dispatch(actAddTodo(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList)

