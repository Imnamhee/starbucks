console.log('jq_ajax_start');
$.ajax({
  type: 'GET',
  url: 'data1.json',
  dataType: 'json',
  success: function (data) {
    let elem = '';
    console.log(data);
    $.each(data, function (index, obj) {
      elem += '<tr>';
      elem += "<th scope='row'>" + obj.name + '</th>';
      elem += '<td>' + obj.score1 + '</td>';
      elem += '<td>' + obj.score2 + '</td>';
      elem += '<td>' + obj.score3 + '</td>';
      elem += '<td>' + obj.score4 + '</td>';
      elem += '</tr>';
    });
    $('table tbody').append(elem);
  },
  error: function (xhr) {
    console.log(xhr.status, '/', xhr.errorText);
  },
});
