import react, {Component} from "react";


class Expenses extends Component{

    constructor(props){
        super(props)
    }
    render(){
       return (<div>

           <h1>Expenses</h1>

            <table className="table table-striped">
                <thead className="table-dark">
                    <th>Product</th>
                    <th>Expense</th>
                </thead>
            {
                this.props.expenseList.map( expense =>
                    <tr>
                        <td>{expense.product}</td>
                        <td>{expense.amount}</td>
                    </tr>
                    )
            }
            </table>

        </div>)
    }
}


export default Expenses