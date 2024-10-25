
import {
IMAGE,
LIST,
NOWPLAY,
POPULAR,
REKOMEN,
SEARCH,
FILTER,
DETAIL,
TOPRATE,
UPCOOMING,
VIDEO,
GENRE,
RATING,
} from "../action/alldataAction"

const filmstate ={
    image:[],
    list:[],
    nowplay:[],
    popular:[],
    rekomen:[],
    search:[],
	Detail:[],
    toprate:[],
    upcooming:[],
    video:[],
	rating:[],
}

const filmredus = (state = filmstate, action) => {
	switch (action.type) {
		case NOWPLAY:
			return {
				...state,
				nowplay: action.payload,
			};
		case POPULAR:
			return {
				...state,
				popular: action.payload,
			};
		case TOPRATE:
			return {
				...state,
			toprate: action.payload,
			};
		case UPCOOMING:
			return {
				...state,
			upcooming: action.payload,
			};
		case LIST:
			return {
				...state,
				list: action.payload,
			};
		case REKOMEN:
			return {
				...state,
			rekomen: action.payload,
			};
		case SEARCH:
			return {
				...state,
				search: action.payload,
			};
		case FILTER:
			return {
				...state,
				search: action.payload,
			};
		case DETAIL:
			return {
				...state,
				search: action.payload,
			};
		case VIDEO:
			return {
				...state,
			video: action.payload,
			};
		case IMAGE:
			return {
				...state,
				image: action.payload,
			};
		case GENRE:
			return {
				...state,
				image: action.payload,
			};
		case RATING:
			return {
				...state,
				rating: action.payload,
			};
		default:
			return state;
	}
};

export default filmredus;


