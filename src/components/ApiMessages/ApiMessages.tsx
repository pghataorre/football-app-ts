type TApiMessage = {
  showMessage: boolean,  
  cssClass: string, 
  message: string;
}

const ApiMessage = ({
  showMessage,
  cssClass = 'success', 
  message = '',
} : TApiMessage) => {
  const stateMessage = showMessage ? (<h3 className={cssClass}>{ message }</h3>) : (<></>)
  return stateMessage;
}

export default ApiMessage;
