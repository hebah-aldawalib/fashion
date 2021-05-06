var age = prompt('how old are?');
console.log(age);

if (age < 12) {
  document.write('<img src="https://upload.3dlat.com/uploads/3dlat.com_13908051911.gif" width="200px"');
}

else {
  alert("hello");

  var sex = prompt('are you man or women?');
  while (sex !== 'man' && sex !== 'women') {
    sex = prompt('plese answer whith man or women');
  }
  console.log(age);
}
if (sex == 'women') {
  document.write('<img src="https://assets.vogue.com/photos/5d5419178c966f000871275b/master/w_2560%2Cc_limit/00-story.jpg" width="200px"');
}
else {
  document.write('<img src="https://fashionista.com/.image/t_share/MTQ4MTI3OTEyOTM4MTg2MjYy/hp-paris-fashion-week-mens-spring-2018-street-style.jpg" width="200px"');
}

var love = prompt('did you love our web sit?')
console.log(love);

if (love == 'yes') {
  console.log('heba')
  document.write('<div>'+'<img src="https://cf2.s3.souqcdn.com/item/2017/04/01/22/36/23/88/item_XL_22362388_30324522.jpg" width="100px">'+'</div>')
  // document.write('<img src="https://cf2.s3.souqcdn.com/item/2017/04/01/22/36/23/88/item_XL_22362388_30324522.jpg" width="200px">');
}else {
  document.write('<div>'+'<img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-sad-depressed-and-sad-emoticon-with-tear-on-face-png-image_317660.jpg" width="200px">'+'</div>');
}


var rateing = prompt('how many haert you will give our websit?')
console.log(love);




