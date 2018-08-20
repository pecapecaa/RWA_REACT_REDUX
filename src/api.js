const URL_ROOT = 'http://localhost:3005/vinarija'

export const addLikeJSON=async (array,id)=> {
    try{
            const response= await fetch(`${URL_ROOT}/${id}`, {
            method: 'PATCH',
            headers: {
                
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           
            body: JSON.stringify({
                likes:array
            })
        })
    }
    catch(e){
        console.log("Greska pri dodavanju,API",e);
    }
}

export const fetchOne= async (id) => {
    try{
        const response=await fetch (`${URL_ROOT}/${id}`);
        const data=await response.json();
    return data;
    }
    catch(e){
        console.log("greska fatchOne,API",e);
    }
}