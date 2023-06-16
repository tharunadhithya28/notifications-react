const Notification = (props) => {
  const { content, className, img, infoimg, msgstyle } = props;
  return (
      <div className={className}>
        <img className={imgStyle} src={img} />
        <p className={msgstyle}> {content}</p>
      </div>;

  )
  
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Notifications </h1>
    <div className="not-container">
      <Notification
        content="Information Message"
        className="info"
        img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imgStyle="infoimg"
        msgstyle="msgstyle"
      />
      <Notification
        content="Success Message"
        className="success"
        img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        msgstyle="msgstyle"
        imgStyle="infoimg"
      />
      <Notification
        content="Warning Message"
        className="warning"
        img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        msgstyle="msgstyle"
        imgStyle="infoimg"
      />
      <Notification
        content="Error Message"
        className="error"
        img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        imgStyle="infoimg"
        msgstyle="msgstyle"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
