export default (state,action) => {
    switch(action.type) {
        case 'ADD_RIDE':
            return action.payload;
        case 'ADD_USER':  
                return{
                    ...state,
                    rdetails:[action.payload,...state.rdetails]
                }
        
        case 'ADD-RIDE':
                return{
                    ...state,
                    rideDetails:[action.payload,...state.rideDetails]
                }

        default:
        return state;
    }
}