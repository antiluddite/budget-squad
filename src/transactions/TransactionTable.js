import React from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import TransactionRow from './TransactionRow';
import TransactionForm from './TransactionForm';
/**
 * Shows a table of transactions and optionally a form for creating a transaction
*Added props to the TransactionTable component that allows filtering by:
start date (inclusive),end date (inclusive), category, payee (name).

 * @component
 * @example
 * Can filter with all, combination, or ("" or null) of these "filters" properites
 * {
    startDate: null,
    endDate: null,
    categoryId: null,
    payee: null
}
 */

// added filters
function TransactionTable({ isCreating = false, onStopCreating, filters }) {
  // "filters" prop added.
  const transactionList = useSelector((state) => state.transactions.entities.filter(
    (t) => (t.categoryId === filters.categoryId
    || filters.categoryId === null
    || filters.categoryId === undefined)
    && (t.payee === filters.payee
    || filters.payee === null
    || filters.payee === undefined)
    && (t.date >= filters.startDate
    || filters.startDate === null
    || filters.startDate === undefined)
    && (t.date <= filters.endDate
    || filters.endDate === null
    || filters.endDate === undefined),
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Category</th>
          <th>Notes</th>
          <th>Amount</th>
          <th aria-label="Actions" />
        </tr>
      </thead>
      <tbody>
        {(isCreating) ? <TransactionForm onStopCreating={onStopCreating} key={uuid()} /> : null}
        {transactionList.map(
          (transaction) => <TransactionRow transaction={transaction} key={transaction.id} />,
        )}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  filters: PropTypes.exact({
    categoryId: PropTypes.string,
    payee: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }),
  // date: new Date(formData.date)
  /**
   * Is a transaction currently being created - shows the creating form
   */
  isCreating: PropTypes.bool,
  /**
   * A function to call when creating is finished
   */
  onStopCreating: PropTypes.func.isRequired,
};

TransactionTable.defaultProps = {
  isCreating: false,
};

export default TransactionTable;
