 window.fn = {};

window.fn.open = function() {
var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
  .then(menu.close.bind(menu));
};

var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('login.html', { append: true })
    .then(function(dialog) {
      dialog.show();
    });
  }
};

var createAlertDialog = function() {
    var dialog = document.getElementById('my-alert-dialog');

      if (dialog) {
        dialog.show();
      } else {
        ons.createElement('alert-dialog.html', { append: true })
          .then(function(dialog) {
            dialog.show();
          });
      }
    };

var hideDialog = function(id) {
  document
  .getElementById(id)
  .hide();  
};

var prev = function() {
var carousel = document.getElementById('carousel');
  carousel.prev();
};

var next = function() {
  var carousel = document.getElementById('carousel');
  carousel.next();
};

ons.ready(function() {
  var carousel = document.addEventListener('postchange', function(event) {
    console.log('Changed to ' + event.activeIndex)
  });
});

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
  .innerHTML = event.tabItem.getAttribute('label');
});

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

            function load(){
               $.ajax({
               url: 'https://digilib19.000webhostapp.com/index.php/user/index_get',
               type: 'GET',
               dataType: 'jsonp',
             
              success: function(data) {                  
                  var list_holder=document.getElementById("list_data");
    
                  list_holder.innerHTML="";

                  for (var i = 0; i < data.length; i++){
                     list_holder.innerHTML+="<tr><td>"+ data[i].nama+"</td><td>"+ data[i].email+"</td><td>"+ data[i].telepon+"</td><td>"+ data[i].username+"</td><td><a class='button color-green' href='javascript:void(0);' onclick='edit_data(\""+data[i].nama+"\",\""+data[i].email+"\",\""+data[i].telepon+"\",\""+data[i].username+"\");'>Edit</a><a class='button color-red' href='javascript:void(0);' onclick='hapus_data(\""+data[i].nama+"\");'>Hapus</a> </td></tr>";
                  }                     
               }
             });
           }
             


        // menampilkan dr web server, (URL)--> tempat penyimpanan dari ajax

           function daftar(){
            var nama = document.getElementById('nama').value;
            var email = document.getElementById('email').value;
            var telepon = document.getElementById('telepon').value;
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var data_input = {"nama": nama,"email": email, "telepon": telepon, "username": username, "password": password};

            $.ajax({
               type: 'POST',
               url: 'https://digilib19.000webhostapp.com/index.php/user/index_post',
               data: data_input,               
                                    
            });
            alert("Data telah tersimpan");
               window.location.reload();
             }
         function login(){
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                var data_login = {"username": username, "password": password};


                    alert(username);

                    $.ajax({ 
                           type: "GET",
                           dataType: "jsonp",
                            data: data_login, 
                           url: "https://digilib19.000webhostapp.com/index.php/user/test/username/"+username+"/password/"+password,
                           success: function(data)
                           {        
                             alert("Selamat Datang di DIGILIB");
                            
                           }
                        });
                     };
                