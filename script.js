$(() => {
  $('.buttons').on('click', () => {
    $('.buttons').toggleClass('active');
  });
  $('.fa-heart').on('click', () => {
    $('.fa-heart').toggleClass('active');
  });
  $('.fa-star').on('click', () => {
    $('.fa-star').toggleClass('active');
  });
});