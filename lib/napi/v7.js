'use strict'

const types = require('./types')

module.exports = [
    {
        name: 'napi_detach_arraybuffer',
        type: types.FUNCTION,
        arguments: [
            {
                type: 'napi_env',
                name: 'env'
            },
            {
                type: 'napi_value',
                name: 'arraybuffer'
            }
        ],
        value: {
            type: 'napi_status'
        }
        
    },
    {
        name: 'napi_is_detached_arraybuffer',
        type: types.FUNCTION,
        arguments: [
            {
                type: 'napi_env',
                name: 'env'
            },
            {
                type: 'napi_value',
                name: 'array_buffer'
            },
            {
                type: 'bool*',
                name: 'result'
            }
        ],
        value: {
            type: 'napi_status'
        }   
    }
]