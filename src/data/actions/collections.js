import wrapFunc from '../utils/wrapFunc'
import {
	COLLECTIONS_LOAD_REQ,
	COLLECTIONS_REFRESH_REQ,
	COLLECTIONS_REORDER,
	COLLECTION_CREATE_REQ, COLLECTION_UPDATE_REQ, COLLECTION_REMOVE_REQ,
	COLLECTION_DRAFT_LOAD_REQ, COLLECTION_DRAFT_CHANGE, COLLECTION_DRAFT_COMMIT,
	SHARING_LOAD_REQ, SHARING_UPDATE_USER_REQ, SHARING_REMOVE_USER_REQ, SHARING_UNSHARE_REQ, SHARING_SEND_INVITES_REQ,
	COLLECTION_ADD_BLANK, COLLECTION_CREATE_FROM_BLANK, COLLECTION_REMOVE_BLANK,
	COLLECTION_TOGGLE, COLLECTION_REORDER, COLLECTION_CHANGE_VIEW, COLLECTION_EMPTY_TRASH,
	COLLECTIONS_DEFAULTS_CHANGE, COLLECTIONS_EXPAND_TO, COLLECTIONS_COLLAPSE_ALL,
	GROUP_CREATE, GROUP_TOGGLE, GROUP_REORDER, GROUP_REMOVE, GROUP_RENAME
} from '../constants/collections'

//All
export const load = ()=>({
	type: COLLECTIONS_LOAD_REQ
})

export const refresh = ()=>({
	type: COLLECTIONS_REFRESH_REQ
})

//High level API
export const oneCreate = (obj={}, onSuccess, onFail)=>({
	type: COLLECTION_CREATE_REQ,
	obj,
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})

export const addBlank = (siblingId, asChild)=>({
	type: COLLECTION_ADD_BLANK,
	siblingId,
	asChild
})

export const createFromBlank = (obj, onSuccess, onFail)=>({
	type: COLLECTION_CREATE_FROM_BLANK,
	obj,
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})

export const removeBlank = ()=>({
	type: COLLECTION_REMOVE_BLANK
})

export const oneRemove = (_id, onSuccess, onFail)=>({
	type: COLLECTION_REMOVE_REQ,
	_id: parseInt(_id),
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})

export const oneToggle = (_id)=>({
	type: COLLECTION_TOGGLE,
	_id: parseInt(_id)
})

export const oneReorder = (_id, {after, before, to})=>({
	type: COLLECTION_REORDER,
	_id: parseInt(_id),
	after, before, to
})

export const oneChangeView = (_id, view)=>({
	type: COLLECTION_CHANGE_VIEW,
	_id: parseInt(_id),
	view
})

export const oneEmptyTrash = ()=>({
	type: COLLECTION_REMOVE_REQ,
	_id: -99
})

//Drafts
export const draftLoad = (_id)=>({
	type: COLLECTION_DRAFT_LOAD_REQ,
	_id: parseInt(_id)
})

export const draftChange = (_id, changed)=>({
	type: COLLECTION_DRAFT_CHANGE,
	_id: parseInt(_id),
	changed
})

export const draftCommit = (_id)=>({
	type: COLLECTION_DRAFT_COMMIT,
	_id: parseInt(_id)
})

//Sharing
export const sharingLoad = (collectionId)=>({
	type: SHARING_LOAD_REQ,
	collectionId
})

export const sharingUpdateUser = (collectionId, userId, set={})=>({
	type: SHARING_UPDATE_USER_REQ,
	collectionId,
	userId,
	set //{role}
})

export const sharingRemoveUser = (collectionId, userId)=>({
	type: SHARING_REMOVE_USER_REQ,
	collectionId,
	userId
})

export const sharingUnshare = (collectionId)=>({
	type: SHARING_UNSHARE_REQ,
	collectionId
})

export const sharingSendInvites = (collectionId, emails=[], role)=>({
	type: SHARING_SEND_INVITES_REQ,
	collectionId,
	emails,
	role
})

//Groups
export const groupCreate = (title='', onSuccess, onFail)=>({
	type: GROUP_CREATE,
	title,
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})

export const groupRename = (_id, newTitle, onSuccess, onFail)=>({
	type: GROUP_RENAME,
	_id,
	newTitle,
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})

export const groupToggle = (_id)=>({
	type: GROUP_TOGGLE,
	_id
})

export const groupReorder = (_id, {after, before})=>({
	type: GROUP_REORDER,
	_id,
	after, before
})

export const groupRemove = (_id, onSuccess, onFail)=>({
	type: GROUP_REMOVE,
	_id,
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})

//Defaults
export const changeDefaults = ({items, groupTitle})=>({
	type: COLLECTIONS_DEFAULTS_CHANGE,
	items, groupTitle
})

export const reorder = (method)=>({
	type: COLLECTIONS_REORDER,
	method
})

//Expand all parents to specific id
export const expandTo = (_id, self)=>({
	type: COLLECTIONS_EXPAND_TO,
	_id,
	self
})

export const toggleAll = ()=>({
	type: COLLECTIONS_COLLAPSE_ALL
})

//Low level API
export const oneUpdate = (_id, set={}, onSuccess, onFail)=>({
	type: COLLECTION_UPDATE_REQ,
	_id: parseInt(_id),
	set,
	onSuccess: wrapFunc(onSuccess),
	onFail: wrapFunc(onFail)
})