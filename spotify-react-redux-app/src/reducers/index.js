const initialState = {
    selectedSong: {
        song: {},
        isSelected: false
    },
    favorites: {
        songs: []
    }
}

const MainReducer = (state = initialState, action) => {
    switch(action.type){

        case 'SHOW_IN_PLAYER':
            return {
                ...state,
                selectedSong: {
                    ...state.selectedSong,
                    song: action.payload,
                    isSelected:true
                } 
            }
        
        case 'ADD_TO_FAVORITES':
            return {
                ...state, 
                favorites:{
                    songs: [...state.favorites.songs, action.payload]
                }
            }

        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: {
                    songs: state.favorites.songs.filter(el => el !== action.payload)
                }
            }

        default: return state
    }
}

export default MainReducer;