import React from 'react';
import PropTypes from 'prop-types';

const style = {
    form: { margin: "15px", display: 'flex', width: '90%', height: '40px', justifyContent: 'flex-end' },
    input: { flex: 12 },
    button: { flex: 1 }
}

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { video: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({ video: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.search(this.state.video);
        this.setState({ video: '' });
    }

    render() {
        return (
            <form style={style.form} onSubmit={this.handleSubmit}>
                <input style={style.input} value={this.state.video} onChange={this.handleChange} placeholder="Qual vídeo?" />
                <button style={style.button} type="submit" className="btn btn-primary">Pesquisar</button>
            </form> 
        )
    }
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired
}