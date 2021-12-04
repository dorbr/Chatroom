const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <div className="channel-container">
          {/* map all connected users */}
      </div>
    </div>
  );
};

const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">LOGGED ON</h5>
  </div>
);

export default ChannelBar;
