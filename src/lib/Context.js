import React, { useState, useEffect, useContext } from 'react';
import jp from 'jsonpath';


const ContextStore = React.createContext({});
const Context = ({ children }) => {
    const [iex, setIEX] = useState({});
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);
    const [config, setConfig] = useState(false);

    const jsonify = res => res.json();
    const reportError = error => { setError("" + error) };
    const fetchContext = () => {
        fetch('assets/context/context.json', { headers: {} })
            .then(jsonify)
            .then(result => {
                setIEX(result);
                setError(null);
                fetch('assets/context/config.json', { headers: {} })
                    .then(jsonify)
                    .then(result => {
                        setConfig(result)
                        setReady(true);
                    }, reportError)
            }, reportError);
    }

    useEffect(fetchContext, []);
    const { currentStage } = iex;
    if (!ready) {
        return <></>
    }
    return <ContextStore.Provider value={{ iex, config, ready, error }}>{children}</ContextStore.Provider>
}

const Stage = ({ level, children }) => {
    const { iex, ready } = useContext(ContextStore);
    const { currentStage } = iex;
    if (!ready) return <></>
    if ("" + currentStage !== level) return <></>
    return <>{children}</>;
}


const ffmap = (strings, ...values) => {
    console.log(ContextStore._currentValue);
    const iex = ContextStore._currentValue.iex;
    try {
        const jpath = `$.${strings[0]}.values`;
        const answer = jp.query(iex.context, jpath);
        // undue the weird everything is a value array in FF
        if (Array.isArray(answer) && answer.length === 1) {
            return answer[0];
        }
        return answer;
    } catch (e) {
        console.log(`Error trying to deference ${strings}`, e);
        return 'ERROR';
    }
}


export { Context, ContextStore, Stage, ffmap };