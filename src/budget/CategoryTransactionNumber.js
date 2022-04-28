import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
/**
 * shows a category name and the number of transactions in that category
 * Expects to go inside a <ul> with the class "list-group"
 * @component
 * @example
 * PUT and example here
 * const category2 = {
 *   id: 2,
 *   name: 'Groceries',
 *   target: 400,
 * };
 * <ul className="list-group"
 * <CategoryTransactionNumber <category={category} />
 * </ul>
 */
// this is the child component to the test page
// Name of Category and #... will show up everytime CategoryTransactionNumber is called on TestPage
function CategoryTransactionNumber({ category }) {
  // const transactionList = useSelector((state) => state.transactions.entities);
  const numberOfTransactions = useSelector((state) => {
    const allTransactions = state.transactions.entities;
    const filteredTransactions = allTransactions.filter(
      (transaction) => transaction.categoryId === category.id,
    );
    const countOfFilteredTransactions = filteredTransactions.length;
    return countOfFilteredTransactions;
  });
  // filter

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      { category.name }
      <span className="badge bg-primary rounded-pill">{ numberOfTransactions }</span>
    </li>
  );
}

CategoryTransactionNumber.propTypes = {
/**
     * The category to display the name and number of the transaction of
     */
  category: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.number.isRequired,
  }).isRequired,
};

export default CategoryTransactionNumber;
