import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import selectExpenses from '../../selectors/expenses-total';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should ExpensesSummary render correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expenseTotal = {400}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should ExpensesSummary render correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary  expenseCount = {23} expenseTotal = {40067}/>);
    expect(wrapper).toMatchSnapshot();
});
