var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },

    handleEdit() {
        if(this.state.editable) {
            var description = this.refs.description.value;
            var id = this.props.item.id;
            var due = this.refs.due.value;
            var person = this.refs.person.value;
            var item = {id: id , description: description , due: due , person: person};
            this.props.handleUpdate(item);
        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var description = this.state.editable ? <input type='type' ref='description' defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
        var due = this.state.editable ? <input type='type' ref='description' defaultValue={this.props.item.due} /> : <p>{this.props.item.due}</p>;
        var person = this.state.editable ? <input type='type' ref='description' defaultValue={this.props.item.person} /> : <p>{this.props.item.person}</p>;
        return (
            <div>
                {description}
                {due}
                {person}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div>
        )
    }
});