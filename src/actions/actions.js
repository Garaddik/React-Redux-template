
import fetch from 'isomorphic-fetch'
import {SCHOOLS_LIST} from './actionType'

function recieveSchools(json){
    return {
        type: SCHOOLS_LIST,
        schools: json
    }
}

let headers = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'multipart/form-data',
    mode: 'cors',
    'content-type': 'application/json' 

})

function client_fetchSchools(){
    return dispatch => {
        return fetch(`http://localhost:8080/schools`,
        {
            headers: headers
        }
        )
        .then(response => {
          return response.json()
        })
        .then(json => dispatch(recieveSchools(json)))
    }
}

export function fetchSchools(){
    return dispatch =>{
        return dispatch(client_fetchSchools())
    }
}