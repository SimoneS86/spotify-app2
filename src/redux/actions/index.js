export const ADD_ALBUM = "ADD_ALBUM";

export const findAlbumsAction = (query) => {
  return async (dispatch) => {
    const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query;
    try {
      const resp = await fetch(endpoint);
      if (resp.ok) {
        const { data } = await resp.json();
        dispatch({ type: ADD_ALBUM, payload: data });
      } else {
        alert("Errore qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
