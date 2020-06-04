function content() {
    var editor = 'sublime text';
    var editor1 = 'brackets';
    var editor2 = 'php storm';

    return [editor.split(''), editor1.split(''), editor2.split('')];
  }

  var forexport = content();
  var element = document.getElementById('el');
  element.innerHTML = '';
  var i = 0;

  setInterval(function () {
    if(forexport[i].length>0){
      element.innerHTML += forexport[i].shift();
    } else {
      element.innerHTML += ', ';
      i++;
      if(i == forexport.length){
        i = 0;
        element.innerHTML = '';
        forexport = content();
      }
    }
  },300);



