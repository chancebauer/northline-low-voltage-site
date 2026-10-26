const menu=document.getElementById('menu'),links=document.getElementById('navlinks');
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit',e=>{
 e.preventDefault();
 const d=new FormData(e.target);
 const subject=encodeURIComponent('Website quote request - '+d.get('service'));
 const body=encodeURIComponent(`Name: ${d.get('name')}\nCompany: ${d.get('company')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\n\nProject details:\n${d.get('message')}`);
 window.location.href='mailto:YOUR_EMAIL@example.com?subject='+subject+'&body='+body;
});
