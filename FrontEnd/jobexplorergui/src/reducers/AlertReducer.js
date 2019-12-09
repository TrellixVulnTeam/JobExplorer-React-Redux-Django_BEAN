import * as constants from '../constants'

const AlertReducer = (state = {}, action) => {

    switch (action.type) {

        case constants.SET_LIKE_JOB_ALERT:
        case constants.SET_ALREADY_LIKED_JOB_ALERT:
        case constants.SET_DISLIKE_JOB_ALERT:
        case constants.SET_ALREADY_DISLIKED_JOB_ALERT:
        case constants.SET_BOOKMARK_JOB_ALERT:
        case constants.SET_ALREADY_BOOKMARKED_JOB_ALERT:
        case constants.SET_CANNOT_BOOKMARK_JOB_ALERT:
        case constants.SET_UNBOOKMARK_JOB_ALERT:
        case constants.SET_CANNOT_REMOVE_BOOKMARKED_JOB_ALERT:
        case constants.SET_CANNOT_REMOVE_LIKED_JOB_ALERT:
        case constants.SET_CANNOT_REMOVE_DISLIKED_JOB_ALERT:
        case constants.REMOVED_LIKED_JOB_FROM_LIST_ALERT:
        case constants.REMOVED_BOOKMARKED_JOB_FROM_LIST_ALERT:
        case constants.REMOVED_DISLIKED_JOB_FROM_LIST_ALERT:
            alert(action.message);
            return state;
        default:
            return state;
    }
};

export default AlertReducer;