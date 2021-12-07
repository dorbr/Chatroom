const ChannelBar = (props) => {
  return (
    <div className="channel-bar shadow-lg">
      {console.log(props)}
      <ChannelBlock />
      <div className="channel-container">
      {console.log(props)}
        {/* {console.log(props.messages.connections)} */}
        {props.messages.connections ? props.messages.connections.map(connection => <li>{connection}</li>) : <></>}
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
