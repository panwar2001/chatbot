import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useSelector, useDispatch } from 'react-redux'
import {updateAge,updateName} from '../store/infoSlice'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const age = useSelector((state) => state.info.age);
  const name= useSelector((state)=> state.info.name);
  const dispatch = useDispatch();
  const handleGotIt = () => {
    const message = createClientMessage('Got It!');
    const botMessage = createChatBotMessage("Enter your Name",{
        widget:'Name'
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message,botMessage],
    }));
  };
  const handleName = (name) => {
    dispatch(updateName(name))
    const message = createClientMessage(name);
    const botMessage = createChatBotMessage("Enter your age",{
        widget:'Age'
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message,botMessage],
    }));
  };
  const handleAge = (age) => {
    dispatch(updateAge(age));
    const message = createClientMessage(age);
    const botMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit",{
      widget:'Exit'
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message,botMessage],
    }));
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleName,
            handleAge
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;