import React from 'react'
import Page from '../Page/Page';
import './AgentDetail.scss';

export default function AgentDetail({theme}) {
    return (
        <Page theme={theme}>
            <div className="withMargin agentDetail">
                <div className="lhs"></div>
                <div className="rhs">
                    <h1>Ihr Ansprechpartner</h1>
                    <h3>Herr Muster McMusterFace</h3>
                </div>
                <div className="span">

                </div>
            </div>
        </Page>
    );
}