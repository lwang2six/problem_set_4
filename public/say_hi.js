var xhr = new XMLHttpRequest();

var say_something =function() {
  xhr.onreadstatecahnge = message_callback();
  xhr.open("GET", "/seats.xml?" + new Date().getTime());
  xhr.send(null);

}

var update_dom =function(user, count){
  var user_seat = document.getElementById("seats");

}
var message_callback =function() {
  if (xhr.readyState===4){
    if (xhr.status === 200){
      parse_xml(xhr.responseXML);
      console.log(xhr.responseText);
    } else {
      alert("oops:" + xhr.statusText);
    }
  }
}

var parse_xml =function(seats_xml){
  var seat_root = seats_xml.firstChild,
      seats = seat_root.getElementsByTagName("seat"),
      i = 0,
      len = seats.length,
      seat;
  for (; i < len; i = i+1){
    seat = seats[i];
    var user = seat.getElementsByTagName("user-id")[0].firstChild;
    update_dom(user, i);
  }
}
