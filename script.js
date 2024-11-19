tl = gsap.timeline();

tl.from("#page1 nav #logo", {
  opacity: 0,
  duration: 1.4,
  y: -40,
});
tl.from("#page1 nav #right", {
  opacity: 0,
  duration: 1.4,
  y: -40,
});
tl.from("#page1 h1 span", {
  opacity: 0,
  duration: 1,
});
tl.from("#page1 #bg-con", {
  opacity: 0,
  duration: 1,
});
tl.from("#page1 h4", {
  opacity: 0,
  duration: 1,
  x: 20,
});
