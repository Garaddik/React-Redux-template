import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class School extends Component{
    render(){
        const {school} = this.props
        return (
              <div>
                    {school.name}
              </div> 
        )
    }
}
School.propTypes = {
    schools: PropTypes.array,
}