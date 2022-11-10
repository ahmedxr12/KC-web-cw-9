// أنشئ المصفوفة تحت هذا الكومنت
let orders = []

function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
  const newOrder = {
    name ,
    id ,
    phone ,
    order
  }
  // أدرج الكائن إلى المصفوفة
  orders.push(newOrder)
  // طبق الخطوة 7 تحت هذا الكومنت
  load()

  console.log(orders)
}


function load() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  // طبّق الخطوة 6 تحت هذا الكومنت
  orders.forEach(order => {
    `<div>
      <h1>${order.name} - ${order.id}</h1>
      <h3>${order.order}</h3>
    </div>`
  });
  
}
