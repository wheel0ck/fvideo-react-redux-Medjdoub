import React from 'react'


class Form extends React.Component {
    state = {
        name:'',
        quantity: 0
    };

    render() {
        return (
            <div>
                <h3>Ajouter des articles à acheter</h3>
                <form >
                    <input type="number" placeholder="quantité"
                           value="" onChange={ (event)=>{this.setState({quantity:event.target.value})}}/>
                    <input type="text" placeholder="article"
                           value="" onChange={ (event)=>{this.setState({quantity:event.target.value})}}/>
                    <button type="submit">ajouter</button>
                </form>
            </div>
        )
    }
}

export default Form;