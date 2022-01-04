

import react, { Component } from "react";

class NewExpense extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Create New Expense</h3>
                <div className="card">
                    <div className="card-body">
                        <input type="text" placeHolder="Product Details" value={this.props.product} 
                        onChange={this.props.productHandler} /> <br /><br />
                        
                        <input type="number" placeholder="Enter amount" value={this.props.amount} 
                        onChange={this.props.amountHandler} /> <br /><br />

                        <button onClick={this.props.onSubmit} className="btn btn-primary"> Add </button> <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewExpense