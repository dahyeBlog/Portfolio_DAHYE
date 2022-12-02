const emailCopy = document.querySelector('.copyMail h3')
console.log(emailCopy);

emailCopy.addEventListener('click', ()=>{
  const emailText = emailCopy.textContent
  
  navigator.clipboard.writeText(emailText).then(
    alert('이메일 주소가 복사되었습니다.')
  )

})
