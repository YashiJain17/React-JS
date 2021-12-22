import { put, takeEvery } from 'redux-saga/effects'

function* getUserInputSaga(action) {
    console.log(action);
    if (action.payload < 0 || action.payload === '' || isNaN(action.payload) === true) {
        yield put({ type: "USERINPUT", value: 1 })
    } else {
        yield put({ type: "USERINPUT", value: action.payload })
    
}

export function* watchUserInput() {
    yield takeEvery("GETUSERINPUT", getUserInputSaga)
}