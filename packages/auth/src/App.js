import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassname = createGenerateClassName({
    productionPrefix: 'au'
});

export default ({ history }) => {
    return (
        <div>
            <h1>Hi This is auth micro front ends</h1>
        </div>
    )
}