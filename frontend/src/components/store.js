import { configureStore, createSlice } from '@reduxjs/toolkit'

let pageId = createSlice({
    name : 'pageId',
    initialState : "/e3507c68d4bd4db8860f4a4c338f8ef7" ,
    // initialState : "/93ce216e3a6f4262b67dacedf56e90e9",
    reducers: {
        setPageId: (state, action) => {
            return action.payload; // 액션의 payload 값을 상태로 설정
        }
    }
})

export default configureStore({
  reducer: {
    pageId: pageId.reducer,
   }
}) 

export let { setPageId } = pageId.actions