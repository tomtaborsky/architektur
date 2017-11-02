
$(function() {
  // Initialise a Controler
  var controller = new ScrollMagic.Controller();

  // Set Tweens
  var firstTween = new TweenMax.to('.myTween1', 4, {
  opacity: 1
  });
  var secoundTween = new TweenMax.to('.myTween2', 4, {
  opacity: 1
  });
  var thirdTween = new TweenMax.to('.myTween3', 4, {
  opacity: 1
  });
  var scene1 = new ScrollMagic.Scene({
  offset: -200,
  triggerElement: '#trigger1',
  duration: 400
  })
  .setTween(firstTween)
  .addIndicators()
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
  offset: -200,
  triggerElement: '#trigger2',
  duration: 400
  })
  .setTween(secoundTween)
  .addIndicators()
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
  offset: -200,
  triggerElement: '#trigger3',
  duration: 400
  })
  .setTween(thirdTween)
  .addIndicators()
  .addTo(controller);

});
