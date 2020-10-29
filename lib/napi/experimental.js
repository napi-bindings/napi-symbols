'use strict'

const types = require('./types')

module.exports = [
    {
        name: 'napi_object_freeze',
        type: types.FUNCTION,
        arguments: [
            {
                type: 'napi_env',
                name: 'env'
            },
            {
                type: 'napi_value',
                name: 'object'
            }
        ],
        value: {
            type: 'napi_status'
        }
        
    },
    {
        name: 'napi_object_seal',
        type: types.FUNCTION,
        arguments: [
            {
                type: 'napi_env',
                name: 'env'
            },
            {
                type: 'napi_value',
                name: 'object'
            }
        ],
        value: {
            type: 'napi_status'
        }   
    }
]