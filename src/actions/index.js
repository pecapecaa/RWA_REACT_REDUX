
const URL_ROOT = 'http://localhost:3005'


export function getWine(keyword){
  const request = fetch(`${URL_ROOT}/vinarija?q=${keyword}`, { method: 'GET'})
                  .then(response => response.json());
  return{
    type: 'SEARCH_WINES',
    payload:request
  }
}

export function wineDetail(id){
    const request = fetch(`${URL_ROOT}/vinarija?id=${id}`, { method: 'GET'})
                    .then(response => response.json());
    return{
      type: 'WINE_DETAIL',
      payload:request
    }
  }

  export function handleLikes(array,id){
    const request = fetch(`${URL_ROOT}/vinarija/${id}`, { 
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes:array})
    })
    .then(response => response.json());

    return{
        type: 'HANDLE_LIKES_ARTICLE',
        payload:request
    }
}
