import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { data, chatData, userList } from "./data";
import { Avatar } from "react-native-paper";

const Chat = (props) => {
  var units = [
    { name: "milliseconds", scale: 1000 },
    { name: "seconds", scale: 60 },
    { name: "minutes", scale: 60 },
    { name: "hours", scale: 24 },
  ];
  const [authUser,setAuthUser]= useState(226)
  const [users, setUserList] = useState(userList)
  const [chats, setChats] = useState(chatData)
  const [friendList, setFriendList] = useState(chatData)


  const getChatFriends = ()=>{
    const refinedChatList = chats.filter((data,index)=>{
      
      return authUser === data.user1 || authUser===data.user2
       
    })
    const fList = refinedChatList.map(data=>{

      const senderId   = data.user1 === authUser? data.user2:data.user1
      const sender = users.filter(data=>{
        return senderId ===  data._id
      })
      data['sender']=sender[0]
      return data
    })
    return fList
  

  }

  // calculates difference between dates
  function calculatePeriod(t1, t2) {
    var dt = t2 - t1;
    var result = {};
    for (var i = 0; i < units.length; ++i) {
      var unit = units[i];
      var total = Math.floor(dt / unit.scale);
      var rest = dt - total * unit.scale;
      result[unit.name] = rest;
      dt = total;
    }
    result.days = dt;
    return result;
  }

  // calculates difference between dates and creates string
  function renderPeriod(t1, t2) {
    var period = calculatePeriod(t1, t2);
    var result = "";
    function addPart(value, unit) {
      if (value) {
        if (result) {
          result += " ";
        }
        result += value + " " + (value === 1 ? unit : unit + "s");
      }
    }
    addPart(period.days, "day");
    addPart(period.hours, "hour");
    addPart(period.minutes, "min");
    addPart(period.seconds, "s");
    addPart(period.milliseconds, "ms");
    return result || "dates are same";
  }
  return (
    <FlatList
      data={getChatFriends()}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        return (
        <Pressable
          style={{flex:1, flexDirection:'row'}}
          onPress={() => props.navigation.navigate("ChatScreen", {chats: item.chats, sender:item.sender})}
        >
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              // justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              flex: 1,
              width:'100%'
            }}
          >
            <View style={{width:'25%', justifyContent:'center', alignItems:'center'}}>
              <Avatar.Image size={24} source={{ uri: item.sender.profileImage }} />
            </View>
            <View style={{width:'50%'}}>
              <Text style={{}}>{item.sender.name}</Text>

              <Text style={{}}>{item.chats[0].text}</Text>
            </View>
            <View style={{width:'15%', justifyContent:'flex-end', flexDirection:'row', alignItems:'center'}}>
              <Text style={{}}>
                {renderPeriod(item.chats[0].createdAt, new Date()).split(" ")[0] +
                  " " +
                  renderPeriod(item.chats[0].createdAt, new Date()).split(" ")[1]}
              </Text>
            </View>
          </View>
        </Pressable>
      )}}
    />
  );
};

export default Chat;