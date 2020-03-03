import { createAction } from "redux-actions";

export const setLoading = createAction("SET_LOADING");

export const updateConversation = createAction("UPDATE_CONVERSATION");

export const fetchConversations = createAction("FETCH_CONVERSATION");
export const fetchConversationsResponse = createAction(
  "FETCH_CONVERSATION_RESPONSE"
);
export const fetchConversationsError = createAction("FETCH_CONVERSATION_ERROR");

export const createConversation = createAction("CREATE_CONVERSATION");
export const createConversationResponse = createAction(
  "CREATE_CONVERSATION_RESPONSE"
);
export const createConversationError = createAction(
  "CREATE_CONVERSATION_ERROR"
);

export const clearUsers = createAction("CLEAR_USERS");
