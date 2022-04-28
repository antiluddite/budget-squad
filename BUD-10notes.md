Add props to the TransactionTable component that allow filtering in various ways, including:
By start date (inclusive)
By end date (inclusive)
By category
By payee

There should only be one props for filtering, an object that can have any combination of the filtering methods.
{
    startDate: null,
    endDate: null,
    categoryId: null,
    payee: null
}
The filtering prop is optional, it may not be set at all, in which case the table should show everything.
It should be able to be expanded with new filtering methods without significant difficulty. 
Properties may be missing or set to null, and those should be ignored. 

For example:
<TransactionTable filters={
    { 
      startDate: new Date('2021-09-27'), 
      categoryId: 'Gas', 
      payee: null }
    } 
/>

(other props on TransactionTable not included in the example)

This TransactionTable should show all transactions with the category Gas that are on or after 2021-09-27.
*************************************
from natalie simplified instructions:
All you need to do is just change the selecting of data from redux so that now it only pulls data that matches the filters it is given through props.
***********************************
Message from Natalie on Slack:
So now @maureen o'flynn you're handling the TransactionTable part.
The TransactionTable should take in a prop (maybe called "filters") that is an object with any filtering the table should be filtered by.
One of the big parts you'll be changing is this line in TransactionTable:
<script>
const transactionList = useSelector((state) => state.transactions.entities);
</script>
Right now it's selecting all the transactions from Redux, but we need to account for all the potential filtering.


https://react-redux.js.org/api/hooks
<script>
const result: any = useSelector(selector: Function, equalityFn?: Function)
</script>


sandbox sorting filtering data (fancy)
https://codesandbox.io/s/9sfhx?file=/src/App.js:1436-1447


useSelector()​
https://react-redux.js.org/api/hooks
<script>
const result: any = useSelector(selector: Function, equalityFn?: Function)
</script>
Allows you to extract data from the Redux store state, using a selector function.

INFO
The selector function should be pure since it is potentially executed multiple times and at arbitrary points in time.

The selector is approximately equivalent to the mapStateToProps argument to connect conceptually. The selector will be called with the entire Redux store state as its only argument. The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

However, there are some differences between the selectors passed to useSelector() and a mapState function:

The selector may return any value as a result, not just an object. The return value of the selector will be used as the return value of the useSelector() hook.
When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. If they are the same, the component will not re-render.
The selector function does not receive an ownProps argument. However, props can be used through closure (see the examples below) or by using a curried selector.
Extra care must be taken when using memoizing selectors (see examples below for more details).
useSelector() uses strict === reference equality checks by default, not shallow equality (see the following section for more details).
INFO
There are potential edge cases with using props in selectors that may cause issues. See the Usage Warnings section of this page for further details.

You may call useSelector() multiple times within a single function component. Each call to useSelector() creates an individual subscription to the Redux store. Because of the React update batching behavior used in React Redux v7, a dispatched action that causes multiple useSelector()s in the same component to return new values should only result in a single re-render.


*******

Basic Selector Concepts​
https://redux.js.org/usage/deriving-data-selectors
A "selector function" is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state.

Selectors don't have to be written using a special library, and it doesn't matter whether you write them as arrow functions or the function keyword. For example, all of these are valid selector functions:
<script>
// Arrow function, direct lookup
const selectEntities = state => state.entities

// Function declaration, mapping over an array to derive values
function selectItemIds(state) {
  return state.items.map(item => item.id)
}

// Function declaration, encapsulating a deep lookup
function selectSomeSpecificField(state) {
  return state.some.deeply.nested.field
}

// Arrow function, deriving values from an array
const selectItemsWhoseNamesStartWith = (items, namePrefix) =>
  items.filter(item => item.name.startsWith(namePrefix))

</script>
A selector function can have any name you want. However, we recommend prefixing selector function names with the word select combined with a description of the value being selected. Typical examples of this would look like selectTodoById, selectFilteredTodos, and selectVisibleTodos.

If you've used the useSelector hook from React-Redux, you're probably already familiar with the basic idea of a selector function - the functions that we pass to useSelector must be selectors:

<script>
function TodoList() {
  // This anonymous arrow function is a selector!
  const todos = useSelector(state => state.todos)
}
</script>
Selector functions are typically defined in two different parts of a Redux application:

In slice files, alongside the reducer logic
In component files, either outside the component, or inline in useSelector calls
A selector function can be used anywhere you have access to the entire Redux root state value. This includes the useSelector hook, the mapState function for connect, middleware, thunks, and sagas. For example, thunks and middleware have access to the getState argument, so you can call a selector there:


<script>
function addTodosIfAllowed(todoText) {
  return (dispatch, getState) => {
    const state = getState()
    const canAddTodos = selectCanAddTodos(state)

    if (canAddTodos) {
      dispatch(todoAdded(todoText))
    }
  }
}

</script>
It's not typically possible to use selectors inside of reducers, because a slice reducer only has access to its own slice of the Redux state, and most selectors expect to be given the entire Redux root state as an argument.


************
ReactCasts #8 - Selectors in Redux
https://www.youtube.com/watch?v=frT3to2ACCw


**********************************
sort transactions by categoryId


*********************
All my attempts at 
  // const transactionFilter = (category) => {
  //   const {
  //     startDate, endDate, categoryId, payee,
  //   } = category;

  //   (state) => state.categories.entities.find(
  //     startDate === startDate,
  //     endDate === endDate,
  //     (category) => category.payee === payee,
  //     (category) => category.categoryId === categoryId,
  //   );

  // const transactionFilter = useSelector(
  //   (state) => state.transactions.entities.filter(
  //     ({ categoryId }) => Id === categoryId,
  //   )[0].Name,
  // );

  // const transactionFilter = useSelector((state, id) => state.transactions.entities.filter(
  //   console.log(id)
  //   ({ categoryId }) => categoryId === id,
  // )[0].Name);

  // const transactionFilter = (id) => (state) => state.transaction.entities.filter(
  //   ({ categoryId }) => categoryId === id,
  // )[0].Name;

  //   transactionFilter.propTypes = {
  //   /** category to display the startDate, endDate, categoryId, or payee */
  //     category: PropTypes.exact({
  //       startDate: PropTypes.instanceOf(Date),
  //       endDate: PropTypes.instanceOf(Date),
  //       categoryId: PropTypes.number.isRequired,
  //       payee: PropTypes.string.isRequired,
  //     }).isRequired,
  //   };
  // };