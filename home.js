const button=document.getElementById('see-review')
button.addEventListener('click', function(){
   const rev=document.getElementById("review")

   if (rev.classList.contains("d-none")){
   rev.classList.remove("d-none")
   button.textContent='Hide review'
}
   else{
       rev.classList.add("d-none")
       
       button.textContent="SEE REview"
   }
})