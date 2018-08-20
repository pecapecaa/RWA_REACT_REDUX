import {call,put,takeLatest} from 'redux-saga/effects';
import {ADD_LIKE_REQUEST,ChangedWine} from '../actions';
import {addLikeJSON,fetchOne} from '../api';


function* ChangeLikes(action){
    try{
        yield call(addLikeJSON,action.array,action.id);
        const vino=yield call(fetchOne,action.id);
        const niz=[];niz.push(vino);
        yield put(ChangedWine(niz))
    }
    catch(e){
        console.log('Greska u ChangeLikes,SAGA');
    }

}


export default function* mySaga(){
    yield takeLatest('ADD_LIKE_REQUEST',ChangeLikes);
}