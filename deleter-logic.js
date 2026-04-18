return {
  email_id: $json.callback_query.data.replace('DELETE_', ''),
  message_id: $json.callback_query.message.message_id,
  chat_id: $json.callback_query.message.chat.id
};
