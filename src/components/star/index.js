import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledStar } from './star.style';
import starActive from '../../images/icons/starActive.svg';
import starInactive from '../../images/icons/starInactive.svg';

export default class Star extends Component{

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.props.onClick(!this.props.active);
    }

    render(){
        const {active}=this.props;
        const srcImage=active?starActive:starInactive;
        
        return (<StyledStar src={srcImage} 
                            alt="Add to favorites" 
                           onClick={this.onClick}/>
                );
  }
}

Star.propTypes={
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

Star.defaultProps = {
   active: false
 }

