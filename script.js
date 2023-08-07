function displayCurrentDate() {
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);
  }
  
  function saveEvent() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  }
  
  function applyTimeBlockStyles() {
    var timeNow = moment().hour();
  
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      $(this).removeClass("past present future");
      if (blockTime < timeNow) {
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  
  function setSavedEvents() {
    $(".time-block").each(function () {
      var timeId = $(this).attr("id");
      var savedEvent = localStorage.getItem(timeId);
      $(this).find(".description").val(savedEvent);
    });
  }
$(document).ready(function () {
    displayCurrentDate();
    $(".saveBtn").on("click", saveEvent);
    applyTimeBlockStyles();
    setSavedEvents();
  });