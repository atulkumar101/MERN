/*
const PaginationWithSubscription = withPaginator(
    Pagination,
    (data, props) => ''
);
*/
import React from 'react';
import withPaginator from './withPaginator';

function Test(props) {
    return (
        <div>
            {props.data}
        </div>
    )
};

const EnhancedComponent = withPaginator(Test);

export default EnhancedComponent;