var xhr = new XMLHttpRequest();

var update_dom =function(from, text) {
  var message_area = document.getElementById("messages");

  var td_from = document.createElement("span");
  message_area.appendChild(td_from);

  var from_node = document.createTextNode(from);
  td_from.appendChild(from_node);

  var td_text = document.createElement("span");
  message_area.appendChild(td_text);

  var text_node = document.createTextNode(text);
  td_text.appendChild(text_node);
}
var parse_xml = function(messages_xml){
  var messages_root = messages_xml.firstChild,
      i = 0,
      len = messages_root.length,
      message, messages;

  messages = messages_root.getElementsByTagName("message");

  for (; i < len; i = i+1){
    message = messages[i];
    var user = message.getElementsByTagName("user-id")[0].firstChild.nodeValue;
    var msg = message.getElementsByTagName("msg")[0].firstChild.nodeValue;
    update_dom(user, msg);
    console.log(user, msg);
  }
}

var message_callback =function(){
  if (xhr.readyState === 4){
    if (xhr.status === 200){
       parse_xml(xhr.responseXML);
       console.log(xhr.responseText);
    } else {
      alert("oops:" + xhr.statusText);
    }
  }
}
var update_messages =function(xml_link){
  xhr.onreadystatechange = message_callback;
  xhr.open("GET", xml_link);
  xhr.send(null);
  
}

