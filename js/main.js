price = prompt ("Введите стоимость товара")
cash = prompt ("Введите количество денег клиента")
 if(price==cash){
  textarea.textContent = ('Покупка совершена')
 } else {
  if(price>=cash){
    ost = cash - price;
    textarea.textContent = ('Для покупки не хватает ' + -ost + ' р.')
  }else{
    sdacha = price - cash;
    textarea.textContent = ('Покупка совершена. Сдача ' + -sdacha + 'р.')
  }
 }

textarea.style.background = 'darkblue'
textarea.style.height = '40px'
textarea.style.width = '250px'
textarea.style.padding = '20px'
textarea.style.borderRadius = '20px'
textarea.style.color = 'white'
textarea.style.fontSize = '18px'
textarea.style.fontFamily = 'Poppins'

textarea = document.getElementById('textarea')