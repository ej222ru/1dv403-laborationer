{"filter":false,"title":"script.js","tooltip":"/2-labbymezzage/script.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"insert","lines":["i"]},{"start":{"row":63,"column":38},"end":{"row":63,"column":39},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":39},"end":{"row":63,"column":40},"action":"insert","lines":["d"]},{"start":{"row":63,"column":40},"end":{"row":63,"column":41},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":41},"end":{"row":63,"column":42},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":62,"column":2},"end":{"row":62,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":62,"column":3},"end":{"row":62,"column":4},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":64,"column":0},"end":{"row":64,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":64,"column":1},"end":{"row":64,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":43},"end":{"row":44,"column":44},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":47},"end":{"row":8,"column":56},"action":"remove","lines":["innerHTML"]},{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["V"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":51},"end":{"row":8,"column":52},"action":"insert","lines":["E"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":51},"end":{"row":8,"column":52},"action":"remove","lines":["E"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"remove","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"remove","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"remove","lines":["V"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"insert","lines":["u"]},{"start":{"row":8,"column":51},"end":{"row":8,"column":52},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":0},"end":{"row":88,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":4},"end":{"row":88,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":8},"end":{"row":88,"column":66},"action":"insert","lines":["        document.getElementById(\"messageArea\").value = \"\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":12},"end":{"row":88,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":8},"end":{"row":88,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":173,"column":0},"action":"remove","lines":["\"use strict\";","","var MessageBoard = {","    ","","    messages : [],","","    renderMessages: function(){","        document.getElementById(\"messageArea\").value = \"\";","        for (var i=0; i<MessageBoard.messages.length;i++){","            MessageBoard.renderMessage(i);","        };","    },","","    renderMessage: function(index){","        var messageArea = document.getElementById(\"messageArea\"),","            text = document.createElement(\"p\"),","            remLink = document.createElement(\"a\"),","            remPic = document.createElement(\"img\"),","            timeLink = document.createElement(\"a\"),","            timePic = document.createElement(\"img\");","        ","        // remPic.classList.add(\"imgClose\");","        remPic.setAttribute(\"id\", \"imgClose\");   // Varför funkar inte class ?? hur många element med id=imgClose kan man skapa?","        remPic.setAttribute(\"src\", \"css/pics/remove_16.png\");","","        timePic.setAttribute(\"id\", \"imgClose\");","        timePic.setAttribute(\"src\", \"css/pics/time_16.png\");","                ","//        remLink.setAttribute(\"class\", \"Close\");","        remLink.setAttribute(\"alt\", \"Close\");","        remLink.setAttribute(\"href\", \"#\");","        remLink.appendChild(remPic);    ","        text.appendChild(remLink); ","","        timeLink.setAttribute(\"alt\", \"Time\");","        timeLink.setAttribute(\"href\", \"#\");","        timeLink.appendChild(timePic);    ","        text.appendChild(timeLink); ","        ","        text.innerHTML += MessageBoard.messages[index].getHTMLText();","        messageArea.appendChild(text);","","","        var time = document.createElement(\"p\");","        time.setAttribute(\"id\", \"msgTime\");","        var date = MessageBoard.messages[index].getDate();","        var hours = date.getHours();","        var minutes = date.getMinutes();","        var seconds = date.getSeconds();","        if (hours < 10){","            hours = \"0\"+ hours;","        }","        if (minutes < 10){","            minutes = \"0\"+ minutes;","        }","        if (seconds < 10){","            seconds = \"0\"+ seconds;","        }","        time.innerHTML = hours + \":\" + minutes + \":\" + seconds;","        text.appendChild(time);","      ","  //      var messageID = document.createElement(\"p\");","        text.setAttribute(\"data-id\", index);        ","//        messageID.innerHTML = index;","       // text.appendChild(messageID);        ","","    },","    ","    removeMessage: function(index){","","        if (window.confirm(\"Vill du verkligen radera meddelandet?\")) { ","            MessageBoard.messages.splice(index, 1);","            MessageBoard.renderMessages();","            var count = document.getElementById(\"msgCount\");","            count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;        ","        }","    },","    alertTime: function(index){","        var date = MessageBoard.messages[index].getDate();","        var monthNames = [ \"Januari\", \"Februari\", \"Mars\", \"April\", \"Maj\", \"Juni\",","            \"Juli\", \"Augusti\", \"September\", \"Oktober\", \"November\", \"December\" ];","    ","        var text = \"Inlägget skapades den \" + date.getDate() + \" \" +  monthNames[date.getMonth()] + \" \" + date.getFullYear() + \" klockan \" + date.toLocaleTimeString(); ","        alert(text);","        ","    },    ","    init:function(){","        document.getElementById(\"messageArea\").value = \"\";","        var myButton = document.getElementById(\"sendButton\");","        myButton.addEventListener(\"click\", function(e){","            var f = this.parentNode;","            var text = f.message.value;","            var newMsg = new Message(text,new Date());","            f.message.value = \"\";","            MessageBoard.messages.push(newMsg);","","            for (var i=0;i<MessageBoard.messages.length; i+=1)","            {","               console.log(MessageBoard.messages[i].toString() );","            };","            MessageBoard.renderMessages();","            var count = document.getElementById(\"msgCount\");","            count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;"," //             MessageBoard.renderMessage(MessageBoard.messages.length-1);","              e.preventDefault();             ","        });","//        var remove = document.getElementById(\"messageArea\");","/*        var remove = document.getElementsByClassName(\"imgClose\");","          remove.onclick = function(){","            var index = this;","            MessageBoard.removeMessage(index);","        };       ","        var remove2 = document.getElementsByClassName(\"Close\");","          remove2.onclick = function(){","            var index = this;","            MessageBoard.removeMessage(index);","        };       ","        var remove3 = document.getElementsByClassName(\"msgTag\");","          remove3.onclick = function(){","            var index = this;","            MessageBoard.removeMessage(index);","        };       ","*/      var remove4 = document.getElementById(\"messageArea\");","        remove4.onclick = function(e){","            console.log(e.target);","            console.log(e.currentTarget);","            console.log(e.target.parentNode);","            console.log(e.target.parentNode.parentNode.lastChild);  ","","                        ","            console.log(e.target.parentNode.parentNode.lastChild.firstChild);   ","            console.log(e.target.parentNode.parentNode.lastChild.firstChild.nodeValue);   ","                                ","            if (e.target.parentNode.getAttribute(\"alt\") === \"Close\"){","                var index = e.target.parentNode.parentNode.lastChild.firstChild.nodeValue;","                MessageBoard.removeMessage(index);","            }","            if (e.target.parentNode.getAttribute(\"alt\") === \"Time\"){","                var index = e.target.parentNode.parentNode.lastChild.firstChild.nodeValue;","                MessageBoard.alertTime(index);","            }           ","        };  ","        var remove5 = document.getElementById(\"messageInput\");","        remove5.onkeypress = function(e){","            console.log(e.target);","            console.log(e.currentTarget);","            console.log(e.target.parentNode);","            if (!e) var e = window.event;","            if ((e.keyCode == 13) && !e.shiftKey){","                ","                var f = this.parentNode.parentNode.parentNode;","                var text = f.message.value;","                var newMsg = new Message(text,new Date());","                f.message.value = \"\";","                MessageBoard.messages.push(newMsg);","    ","                for (var i=0;i<MessageBoard.messages.length; i+=1)","                {","                   console.log(MessageBoard.messages[i].toString() );","                };","                MessageBoard.renderMessages();","                var count = document.getElementById(\"msgCount\");","                count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;","     //             MessageBoard.renderMessage(MessageBoard.messages.length-1);","                e.preventDefault();                  ","            };","        };","    }","}; ","","window.addEventListener(\"load\", MessageBoard.init);","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":139,"column":0},"action":"insert","lines":["\"use strict\";","","var MessageBoard = {","    ","","    messages : [],","","    renderMessages: function(){","        document.getElementById(\"messageArea\").innerHTML = \"\";","        for (var i=0; i<MessageBoard.messages.length;i++){","            MessageBoard.renderMessage(i);","        };","    },","","    renderMessage: function(index){","        var messageArea = document.getElementById(\"messageArea\"),","            text = document.createElement(\"div\"),","            remLink = document.createElement(\"a\"),","            remPic = document.createElement(\"img\"),","            timeLink = document.createElement(\"a\"),","            timePic = document.createElement(\"img\"),","            time = document.createElement(\"div\");","        ","        text.setAttribute(\"data-messageID\", index);        ","","        remPic.classList.add(\"imgClose\");","        remPic.setAttribute(\"src\", \"css/pics/remove_16.png\");","","        timePic.classList.add(\"imgTime\");","        timePic.setAttribute(\"src\", \"css/pics/time_16.png\");","                ","        remLink.setAttribute(\"title\", \"Close\");","        remLink.setAttribute(\"href\", \"#\");","        remLink.appendChild(remPic);    ","        text.appendChild(remLink); ","","        timeLink.setAttribute(\"title\", \"Time\");","        timeLink.setAttribute(\"href\", \"#\");","        timeLink.appendChild(timePic);    ","        text.appendChild(timeLink); ","        ","        text.innerHTML += MessageBoard.messages[index].getHTMLText();","","","        time.classList.add(\"msgTime\");        ","        var date = MessageBoard.messages[index].getDate();","        var hours = date.getHours();","        var minutes = date.getMinutes();","        var seconds = date.getSeconds();","        if (hours < 10){","            hours = \"0\"+ hours;","        }","        if (minutes < 10){","            minutes = \"0\"+ minutes;","        }","        if (seconds < 10){","            seconds = \"0\"+ seconds;","        }","        time.innerHTML = hours + \":\" + minutes + \":\" + seconds;","        text.appendChild(time);","","        messageArea.appendChild(text);      ","    },","    ","    removeMessage: function(index){","        var count;","        if (window.confirm(\"Vill du verkligen radera meddelandet?\")) { ","            MessageBoard.messages.splice(index, 1);","            MessageBoard.renderMessages();","            count = document.getElementById(\"msgCount\");","            count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;        ","        }","    },","    alertTime: function(index){","        var date = MessageBoard.messages[index].getDate();","        var monthNames = [ \"Januari\", \"Februari\", \"Mars\", \"April\", \"Maj\", \"Juni\",","            \"Juli\", \"Augusti\", \"September\", \"Oktober\", \"November\", \"December\" ];","    ","        var text = \"Inlägget skapades den \" + date.getDate() + \" \" +  monthNames[date.getMonth()] + \" \" + date.getFullYear() + \" klockan \" + date.toLocaleTimeString(); ","        alert(text);","        ","    },    ","    init:function(){","        document.getElementById(\"messageInput\").value = \"\";","        var myButton = document.getElementById(\"sendButton\");","        myButton.addEventListener(\"click\", function(e){","            var f = this.parentNode;","            var text = f.message.value;","            var newMsg = new Message(text,new Date());","            f.message.value = \"\";","            MessageBoard.messages.push(newMsg);","","            MessageBoard.renderMessages();","            var count = document.getElementById(\"msgCount\");","            count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;"," //             MessageBoard.renderMessage(MessageBoard.messages.length-1);","              e.preventDefault();             ","        });"," ","        var remove = document.getElementById(\"messageArea\");","        remove.onclick = function(e){","            var index;","            if (e.target.parentNode.getAttribute(\"title\") === \"Close\"){","                index = e.target.parentNode.parentNode.getAttribute(\"data-messageID\");","                MessageBoard.removeMessage(index);","            }","            if (e.target.parentNode.getAttribute(\"title\") === \"Time\"){","                index = e.target.parentNode.parentNode.getAttribute(\"data-messageID\");","                MessageBoard.alertTime(index);","            }           ","        };  ","        var checkKey = document.getElementById(\"messageInput\");","        checkKey.onkeypress = function(e){","","            if (!e) var e = window.event;","            if ((e.keyCode == 13) && !e.shiftKey){","                ","                var f = this.parentNode.parentNode.parentNode;","                var text = f.message.value;","                var newMsg = new Message(text,new Date());","                f.message.value = \"\";","                MessageBoard.messages.push(newMsg);","    ","                for (var i=0;i<MessageBoard.messages.length; i+=1)","                {","                   console.log(MessageBoard.messages[i].toString() );","                };","                MessageBoard.renderMessages();","                var count = document.getElementById(\"msgCount\");","                count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;","     //             MessageBoard.renderMessage(MessageBoard.messages.length-1);","                e.preventDefault();                  ","            };","        };","    }","}; ","","window.addEventListener(\"load\", MessageBoard.init);","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":81,"column":10},"end":{"row":82,"column":0},"action":"insert","lines":["",""]},{"start":{"row":82,"column":0},"end":{"row":82,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":4},"end":{"row":82,"column":5},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":5},"end":{"row":82,"column":6},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":6},"end":{"row":82,"column":7},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":7},"end":{"row":82,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":8},"end":{"row":82,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":9},"end":{"row":82,"column":10},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":10},"end":{"row":82,"column":11},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":11},"end":{"row":82,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":12},"end":{"row":82,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":13},"end":{"row":82,"column":14},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":13},"end":{"row":82,"column":14},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":13},"end":{"row":82,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":14},"end":{"row":82,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":15},"end":{"row":82,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":16},"end":{"row":82,"column":17},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":17},"end":{"row":82,"column":18},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":17},"end":{"row":82,"column":18},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":16},"end":{"row":82,"column":17},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":16},"end":{"row":82,"column":17},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":17},"end":{"row":82,"column":18},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":43},"end":{"row":98,"column":9},"action":"remove","lines":["function(e){","            var f = this.parentNode;","            var text = f.message.value;","            var newMsg = new Message(text,new Date());","            f.message.value = \"\";","            MessageBoard.messages.push(newMsg);","","            MessageBoard.renderMessages();","            var count = document.getElementById(\"msgCount\");","            count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;"," //             MessageBoard.renderMessage(MessageBoard.messages.length-1);","              e.preventDefault();             ","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":82,"column":18},"end":{"row":94,"column":9},"action":"insert","lines":["function(e){","            var f = this.parentNode;","            var text = f.message.value;","            var newMsg = new Message(text,new Date());","            f.message.value = \"\";","            MessageBoard.messages.push(newMsg);","","            MessageBoard.renderMessages();","            var count = document.getElementById(\"msgCount\");","            count.innerHTML = \"Antal meddelanden: \" + MessageBoard.messages.length;"," //             MessageBoard.renderMessage(MessageBoard.messages.length-1);","              e.preventDefault();             ","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":94,"column":9},"end":{"row":94,"column":10},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":94,"column":10},"end":{"row":95,"column":0},"action":"insert","lines":["",""]},{"start":{"row":95,"column":0},"end":{"row":95,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":43},"end":{"row":99,"column":54},"action":"insert","lines":["alertButton"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":43},"end":{"row":99,"column":55},"action":"insert","lines":["MessageBoard"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":55},"end":{"row":99,"column":56},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":43},"end":{"row":99,"column":55},"action":"remove","lines":["MessageBoard"]},{"start":{"row":99,"column":43},"end":{"row":99,"column":44},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":44},"end":{"row":99,"column":45},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":45},"end":{"row":99,"column":46},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":46},"end":{"row":99,"column":47},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":59},"end":{"row":98,"column":0},"action":"insert","lines":["",""]},{"start":{"row":98,"column":0},"end":{"row":98,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":8},"end":{"row":98,"column":9},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":9},"end":{"row":98,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":10},"end":{"row":98,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":11},"end":{"row":98,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":12},"end":{"row":98,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":13},"end":{"row":98,"column":14},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":14},"end":{"row":98,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":15},"end":{"row":98,"column":16},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":16},"end":{"row":98,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":17},"end":{"row":98,"column":18},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":18},"end":{"row":98,"column":19},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":19},"end":{"row":98,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":20},"end":{"row":98,"column":21},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":21},"end":{"row":98,"column":22},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":23},"end":{"row":98,"column":24},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":98,"column":24},"action":"remove","lines":["        var that = this;"]},{"start":{"row":98,"column":0},"end":{"row":99,"column":0},"action":"insert","lines":["",""]},{"start":{"row":99,"column":0},"end":{"row":99,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":0},"end":{"row":100,"column":0},"action":"insert","lines":["",""]},{"start":{"row":100,"column":0},"end":{"row":100,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":99,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":99,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":99,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":43},"end":{"row":99,"column":47},"action":"remove","lines":["this"]},{"start":{"row":99,"column":43},"end":{"row":99,"column":44},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":44},"end":{"row":99,"column":45},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":45},"end":{"row":99,"column":46},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":46},"end":{"row":99,"column":47},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":47},"end":{"row":99,"column":48},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":48},"end":{"row":99,"column":49},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":49},"end":{"row":99,"column":50},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":50},"end":{"row":99,"column":51},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":51},"end":{"row":99,"column":52},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":51},"end":{"row":99,"column":52},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":51},"end":{"row":99,"column":52},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":52},"end":{"row":99,"column":53},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":53},"end":{"row":99,"column":54},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":54},"end":{"row":99,"column":55},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":55},"end":{"row":99,"column":56},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":50},"end":{"row":99,"column":51},"action":"remove","lines":["."]}]}]]},"ace":{"folds":[],"scrolltop":1440,"scrollleft":0,"selection":{"start":{"row":125,"column":9},"end":{"row":125,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417555376146,"hash":"b393c3624256172bc683b81837663ab200e5f070"}