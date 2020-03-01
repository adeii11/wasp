{{={= =}=}}
import * as types from './actionTypes'
import {=entityClassName=} from './{=entityClassName=}'
import { selectors } from './state'


/**
 * @param {{= entity.name =}} {= entityLowerName =}
 */
export const add = ({=_entity=}) => ({
  type: types.ADD,
  data: {=_entity=}.toData()
})

/**
 * @param {{=entityClassName=}[]} {=_entities=}
 */
export const set = ({=_entities=}) => ({
    type: types.SET,
    {=_entities=}: {=_entities=}.map({=_e=} => {=_e=}.toData())
})

/**
 * @param {String} id
 * @param {Object} data - Partial data that will be merged with existing {= entityLowerName =}.
 */
export const update = (id, data) => ({
  type: types.UPDATE,
  id,
  data
})

/**
 * @param {String} id
 */
export const remove = (id) => ({
  type: types.REMOVE,
  id
})

{=# entityActions =}
export const {=name=} = () => (dispatch, getState) => {
    const {=_entities=} = selectors.all(getState())
    const updateFn = {=&updateFn=}
    const new{=_Entities=} = updateFn({=_entities=}.map({=_e=} => {=_e=}.toData())).map({=_e=} => new {=entityClassName=}({=_e=}))
    dispatch(set(new{=_Entities=}))
}

{=/ entityActions =}
