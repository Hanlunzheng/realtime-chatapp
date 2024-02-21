const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-matheus-bertelli-3792581.jpg&fm=jpg"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is up</div>
    </div>
  );
};

export default Message;
