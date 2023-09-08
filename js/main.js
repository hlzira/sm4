price = prompt ("Введите стоимость товара")
cash = prompt ("Введите количество денег клиента")
 if(price==cash){
  alert('Покупка совершена')
 } else {
  if(price>cash){
    ost = cash - price;
    alert('Для покупки не хватает ' + -ost + ' р.')
  }else{
    sdacha = price - cash;
    alert('Покупка совершена. Сдача ' + -sdacha + 'р.')
  }
 }