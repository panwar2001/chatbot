import { createChatBotMessage } from 'react-chatbot-kit';
import GotIt from './widgets/GotIt';
import Name from './widgets/Name';
import Age from './widgets/Age';
import Exit from './widgets/Exit';
const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,{
    widget:'GotIt',
    delay:300
  })],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },widgets:[
    {
        widgetName:'GotIt',
        widgetFunc: (props)=><GotIt {...props}/>
    },
    {
        widgetName:'Name',
        widgetFunc: (props)=><Name {...props}/>
    },{
        widgetName:'Age',
        widgetFunc: (props)=><Age {...props}/>
    },{
      widgetName:'Exit',
      widgetFunc: ()=><Exit />
    },
   ]
};

export default config;