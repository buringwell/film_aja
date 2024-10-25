export const NOWPLAY = "NOWPLAY"
export const  POPULAR = "POPULAR"
export const TOPRATE = "TOPRATE"
export const  UPCOOMING = "UPCOMING"

export const LIST = "LIST"
export const REKOMEN = "REKOMEN"

export const SEARCH = "SEARCH"
export const FILTER = "FILTER"
export const DETAIL = "DETAIL"
export const RATING = "RATING"

export const VIDEO = "VIDEO"
export const IMAGE = "IMAGE"
export const GENRE = "GENRE"


export const setNowplay = (data) => ({
	type: NOWPLAY,
	payload: data,
});

export const setPopular = (data) => ({
    type: POPULAR,
    payload: data,
});

export const setTopRate = (data) => ({
    type: TOPRATE,
    payload: data,
});

export const setUpcoming = (data) => ({
    type: UPCOOMING,
    payload: data,
});

export const setList = (data) => ({
    type: LIST,
    payload: data,
});

export const setRekomen = (data) => ({
    type: REKOMEN,
    payload: data,
});

export const setSearch = (data) => ({
    type: SEARCH,
    payload: data,
});

export const setFILter = (data) => ({
    type: FILTER,
    payload: data,
});

export const setDETAIL = (data) => ({
    type: DETAIL,
    payload: data,
});

export const setVideo = (data) => ({
    type: VIDEO,
    payload: data,
});

export const setImage = (data) => ({
    type: IMAGE,
    payload: data,
});

export const setGenre = (data) => ({
    type: GENRE,
    payload: data,
});

export const setrating = (data) => ({
    type: RATING,
    payload: data,
});

