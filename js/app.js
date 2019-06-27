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
               url: 'http://localhost/restserver_digilib/index.php/admin/index_get',
              /* 'http://localhost/restserver_digilib/index.php/buku/index_get',*/
               type: 'GET',
               dataType: 'jsonp',
             
               success: function(data) {      
            /*   var list_holder=document.getElementById("list_data");
    
                  list_holder.innerHTML="";

                  for (var i = 0; i < data.length; i++){
                     list_holder.innerHTML+="<tr><td>"+ data[i].judul+"</td><td>"+ data[i].pengarang+"</td><td>"+ data[i].penerbit+"</td><td>"+ data[i].isbn+"</td><td>"+ data[i].sinopsis+"</td><td>"+ data[i].buku+"</td><td><a class='button color-green' href='javascript:void(0);' onclick='edit_data(\""+data[i].judul+"\",\""+data[i].pengarang+"\",\""+data[i].penerbit+"\",\""+data[i].isbn+"\",\""+data[i].sinopsis+"\",\""+data[i].buku+"\");'>Edit</a><a class='button color-red' href='javascript:void(0);' onclick='hapus_data(\""+data[i].isbn+"\");'>Hapus</a> </td></tr>";
                  }         */        
                             
               }
              });
             }
            
       

        // menampilkan dr web server, (URL)--> tempat penyimpanan dari ajax

           function daftar(){
            var nama = document.getElementById('nama').value;
            var email = document.getElementById('email').value;
            var telepon = document.getElementById('telepon').value;
            var user = document.getElementById('user').value;
            var pass = document.getElementById('pass').value;
            var data_input = {"nama": nama,"email": email, "telepon": telepon, "user": user, "pass": pass};

            $.ajax({
               type: 'POST',
               url: 'http://localhost/restserver_digilib/index.php/admin/index_post',
               data: data_input,               
                                    
            });
            alert("Data telah tersimpan");
               window.location.reload();
             }
         function login(){
                var user = document.getElementById('user').value;
                var pass = document.getElementById('pass').value;
                var data_login = {"user": user, "pass": pass};


                    alert("Selamat datang"+user+"DI DIGILIB");

                    $.ajax({ 
                           type: "GET",
                           dataType: "jsonp",
                            data: data_login, 
                           url: "http://localhost/restserver_digilib/index.php/admin/test/user/"+user+"/pass/"+pass,
                           success: function(data)
                           {        
                             alert("Selamat Datang di DIGILIB");
                            
                           }
                        });
                     };



           /* function input(){
            var judul = document.getElementById('judul').value;
            var pengarang = document.getElementById('pengarang').value;
            var penerbit = document.getElementById('penerbit').value;
            var isbn = document.getElementById('isbn').value;
            var sinopsis = document.getElementById('sinopsis').value;
            var buku = document.getElementById('buku').value;
            var data_input = {"judul": judul,"pengarang": pengarang, "penerbit": penerbit, "isbn": isbn, "sinopsis": sinopsis, "buku": buku};

            $.ajax({
               type: 'POST',
               url: 'http://localhost/restserver_digilib/index.php/buku/index_post',
               data: data_input,               
                                    
            });
            alert("Data telah tersimpan");
               window.location.reload();
             }
                     
*/

                  