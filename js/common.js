$(document).ready(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('content-toggle-close');
    $(this).toggleClass('open');
  });

  $('#sidebar .dropdown-toggle').click(function() {
    $('.dropdown-toggle')
      .parent()
      .children('.collapse.show')
      .collapse('hide');
  });

  if ($(window).width() < 1270) {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('content-toggle-close');
    $(this).toggleClass('open');
  }
});

function IsNullOrEmpty(item) {
  if (item === null || item === undefined || item === '') {
    return true;
  }
  return false;
}
var ajaxRequestCount = 0;
function AjaxRequestStart() {
  ajaxRequestCount++, $('#ProgressBar').show();
}

function AjaxRequestFinish() {
  ajaxRequestCount > 0 && ajaxRequestCount--, ajaxRequestCount === 0 && $('#ProgressBar').hide();
}

// remove image from the list
s;

function hideThemepalate(e) {
  debugger;
  if (
    $(e)
      .parent()
      .hasClass('Active')
  ) {
    $(e)
      .parent()
      .removeClass('Active');
  } else {
    $(e)
      .parent()
      .addClass('Active');
  }
}

//clockpicker fix position
function ClockPickerFixPosition(Id) {
  $(Id).scroll(function() {
    var topPos = $('.clockpicker').offset().top;
    var leftPos = $('.clockpicker').offset().left;
    $('.popover').css('top', topPos + 35);
    //$(".popover").css("left", leftPos);
  });
}

function Goto(url) {
  window.location.href = url;
}
