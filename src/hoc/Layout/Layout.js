import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <div>
                <Toolbar page={this.props.page}/>
                    <div style={{marginTop: '150px'}}>
                        {this.props.children}
                    </div>
            </div>
        )
    }
}

export default Layout;