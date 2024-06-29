import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};
export default Conversations;
