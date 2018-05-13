

export default function(state={},action){
    switch(action.type){
        case 'SEARCH_WINES':
            return {...state,list:action.payload};
        case 'WINE_DETAIL':
            return {...state,detail:action.payload}
        case 'HANDLE_LIKES_ARTICLE':
            return {...state,detail:[action.payload]}   
        default:
            return state;
    }
}




