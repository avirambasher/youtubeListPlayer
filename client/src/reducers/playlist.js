// eslint-disable-next-line import/no-anonymous-default-export
export default (playList = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'ADD_URL':
            return [...playList, action.payload];
        case 'DELETE_URL':
            return playList.filter((urlData) => urlData._id !== action.payload);
        default:
            return playList;
    }
}