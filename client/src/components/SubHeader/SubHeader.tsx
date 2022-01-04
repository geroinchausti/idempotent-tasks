import React from 'react';

import './SubHeader.scss'

const SubHeader: React.FunctionComponent<{}> = (props) => {
    const { children } = props;
    return <div className="sub-header">
         { children }
    </div>;
}

export default SubHeader;

