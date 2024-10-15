import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');       // <<<
    const [enteredAmount, setEnteredAmount] = useState('');      //  <<Method One  ---  Multi state
    const [enteredDate, setEnteredDate] = useState('');         // <<<


// State for Storing Info
    // const [userInput, setUserInput] = useState({    //  Method Two  /  Three
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })


// Handles user Input --  Takes previous input and replaces it with new input
// For title
     const titleChangeHandler= (event) => {
        setEnteredTitle(event.target.value)     //Method One

        // setUserInput({                              <<Method Two   --- Will work fine, but better not to be used when dealing with multiple states at the same time as it may use outdated inputs instead of previous input
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // setUserInput((prevState) => {              //Method Three   --- better for use when updating multiple states at the same time
        //     return {...prevState, enteredTitle: event.target.value}
        // })
     };

    //  for amount
     const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
     }

    //  for date
     const dateChangeHandler = (event)=> {
        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
     }

    //  listens to clicks on the submit button
    const submitHandler = (event) => {
        event.preventDefault();    //prevents the browser's default action of reloading the page after the submit button has been clicked

        const expenseData = {
            title : enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);    //  this saves the generated data to the onSaveExpenseData() property in NewExpense component
        setEnteredTitle('');         //  these override user input after the submit button has been clicked and clears the input field -- works with the 'value' attribute in the input element. As a two way binding
        setEnteredAmount('');
        setEnteredDate('');
    };

// Cancel button --to hide the form
    const [isVisible, setIsVisible] = useState(true);

    const hideDataHandler = () => {
        setIsVisible(false);
    }

    const showDataHandler = () => {
        setIsVisible(true);
    }
    
    return (
        <form onSubmit={submitHandler}>
            {/* to toggle between the form and the Add new Expense button */}
            {isVisible ? (<div>
                <div className='new-expense__controls'>
                
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />   
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick= {hideDataHandler}>Cancel</button>
            </div>
            </div>) :
            <button type='submit' onClick= {showDataHandler}>Add New Expense</button>}

        </form>
    )
};

export default ExpenseForm;

