const b=document.querySelector("#i1");
const c = document.querySelector("#i2");

b.addEventListener("mouseover",function(){
    document.querySelector("#i1").style.transform = "scale(1.2,1.2)";
})

b.addEventListener("mouseout",function(){
    document.querySelector("#i1").style.transform = "scale(1,1)";
})

c.addEventListener("mouseover",function(){
    document.querySelector("#i2").style.transform = "scale(1.2,1.2)";
})

c.addEventListener("mouseout",function(){
    document.querySelector("#i2").style.transform = "scale(1,1)";
})

const boxes = document.querySelectorAll('.l1');

for (const l1 of boxes) {
  l1.addEventListener('mouseover', function(event) {
    console.log('box clicked', event);
       l1.setAttribute('style', 'background-color: #f4c2c2;');
  });
    
     l1.addEventListener('mouseout', function(event) {
    console.log('box clicked', event);
       l1.setAttribute('style', 'background-color: #CDF0EA;');
  });
}