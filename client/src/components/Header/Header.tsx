import React from 'react';

import './Header.scss'


const Header: React.FunctionComponent<{ title: string }>  = (props) => {
    const { title } = props;
    return <nav className="tasks-header">
      <h1  className="tasks-header__title"> { title }</h1>
    </nav>;
}

export default Header;

