'use strict'

const types = require('./types')

module.exports = [
    {
        name: 'napi_get_instance_data',
        type: types.FUNCTION,
        arguments: [
            {
                type: 'napi_env',
                name: 'env'
            },
            {
                type: 'void**',
                name: 'data'
            }
        ],
        value: {
            type: 'napi_status'
        }
        
    },
    {
        name: 'napi_set_instance_data',
        type: types.FUNCTION,
        arguments: [
            {
                type: 'napi_env',
                name: 'env'
            },
            {
                type: 'void**',
                name: 'data'
            },
            {
                type: 'napi_finalize',
                name: 'finalize_cb'
            },
            {
                type: 'void*',
                name: 'finalize_hint'
            }
        ],
        value: {
            type: 'napi_status'
        }   
    }
]