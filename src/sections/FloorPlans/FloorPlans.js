import React from 'react'
import Page from '../Page/Page';
import { basetheme } from '../../styles/IEXTheme'


import pic1 from '../../mock/floorplans/EG.jpg'
import pic2 from '../../mock/floorplans/First.jpg'
import pic3 from '../../mock/floorplans/Attic.jpg'
import pic4 from '../../mock/floorplans/Basement.jpg'


export default function FloorPlans({ theme }) {
    const mytheme = theme ? theme : basetheme;

    const plans = [
        { url: pic1, description: 'EG' },
        { url: pic2, description: '1.0' },
        { url: pic3, description: 'Attic' },
        { url: pic4, description: 'Keller' },
    ]

    return (
        <>
            {plans.map((plan, idx) => {
                return (
                    <Page key={plan.url} theme={theme} withMargin={true} title={idx === 0 ? "Grundrisse":undefined}>
                        <div className="plan">
                            <img src={plan.url} />
                            <div>{plan.description}</div>
                        </div>
                    </Page>
                );
            })}
        </>
    );
}