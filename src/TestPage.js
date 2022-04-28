import React from 'react';
import { useDispatch } from 'react-redux';
import CategoryTransactionNumber from './budget/CategoryTransactionNumber';
import { addTransaction } from './transactions/TransactionSlice';
// import SortByData from './transactions/SortArrayObjects';

/**
 * @returns Shows a table of transactions and optionally a form for creating a transaction

@component

@example

<TransactionTable isCreating onStopCreating={() => alert('finished')} />
 */

export default function TestPage() {
  const dispatch = useDispatch();

  const category1 = {
    id: 1,
    name: 'Rent',
    target: 1500,
  };
  const category2 = {
    id: 2,
    name: 'Groceries',
    target: 400,
  };

  const addACategory1Transaction = () => {
    const transaction = {
      categoryId: 1,
    };
    dispatch(addTransaction(transaction));
  };

  return (
    <ul className="list-group">
      Testing
      <button type="button" onClick={addACategory1Transaction}>Add Category 1 Transaction</button>
      <CategoryTransactionNumber category={category1} />
      <CategoryTransactionNumber category={category2} />
      <SortByData />
    </ul>
  );
}
