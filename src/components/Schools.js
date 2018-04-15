import React, { Component } from 'react'
import PropTypes from 'prop-types'
import School from './School'

class Schools extends Component {

  componentDidMount(){
    const {dispatch,actions} = this.props
    dispatch(actions.fetchSchools())
    this.seachSchools = this.seachSchools.bind(this)
  }

  seachSchools(event, data){
      console.log('Enter called calling functions................,.', event.target.value)
    
  }

  render() {
    
    const {schools} = this.props
    return (
        <div>
            {
              schools.map(function(school,index){
                return <School  school={school} key={school.schoolId}/>
              })
            }
        </div>
    )
  }
}

Schools.propTypes = {
  schools: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
}

export default Schools;
