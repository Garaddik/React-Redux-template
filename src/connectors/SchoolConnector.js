import {connect} from 'react-redux'
import Schools from '../components/Schools'
import {fetchSchools} from '../actions/actions'

function mapStateToProps(state){
  return{
    schools: state.schools,
    actions:{
      fetchSchools: fetchSchools
    }
  } 
}

export default connect(mapStateToProps)(Schools)
