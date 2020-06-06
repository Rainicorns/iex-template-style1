import React from 'react'
import './FactSheet.scss';
import Header from '../Header/Header';
import Page from '../Page/Page';
import { basetheme } from '../../styles/IEXTheme'
import { css } from 'emotion';
import Fact from './Fact';

export default function FactSheet({ theme, title, children }) {
    const mytheme = theme ? theme : basetheme;
    return (
        <Page className="factSheet" theme={theme} title={title} withMargin={true}>
            <div className="dataTable">
                {children}
            </div>
        </Page>
    );
}