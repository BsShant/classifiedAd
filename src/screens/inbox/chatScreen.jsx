import { StatusBar } from "expo-status-bar";
import React,{ useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Button,useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {chatData, userList} from  './data'
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = (props) => {
  const tempChat= props.chats? props.route.params.chats:[]
    const [messages, setMessages] = useState([]);
    const [authUser,setAuthUser]= useState(226)
   


    useEffect(() => {
      const refinedChatList = chatData.filter((data,index)=>{
        if(authUser > props.route.params.sender._id){
         return data.id ===  (props.route.params.sender._id + "-" + authUser).toString()
        }
        return data.id ===  (authUser+ "-" + props.route.params.sender._id).toString()

      })   
      setMessages(refinedChatList[0].chats)
     }, [])
   
   
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  return (
    // <SafeAreaView>
<GiftedChat
      messages={messages}
    isTyping={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: authUser,
      }}
    />
  );
};



export default ChatScreen;
