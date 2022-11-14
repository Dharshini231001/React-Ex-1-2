import React from 'react';
import './style.css'

function Card() {
  return (
    <>
    <div id="container1">
    <h1><br></br><center><b>Fruits/Vegetable Shop</b></center><br></br></h1><br></br>
    <div class="row">
    <div class="col-md-6">
<div class="card">
  <img src="https://i1.wp.com/naturalfoodsfacts.com/wp-content/uploads/2018/09/Dragon-Fruit.jpg?fit=1920%2C1440&ssl=1" alt="Lago di Braies"></img>

  
  <div class="card__details">

    
    <span class="tag">Fruits</span>

    <span class="tag">Vegetables</span>

    
    <div class="name">Dragon Fruit</div><br></br>

    <p>Dragon fruit grows on the Hylocereus cactus, also known as the Honolulu queen, whose flowers only open at night.The plant is native to southern Mexico and Central America. Today, it is grown all over the world.It goes by many names, including pitaya, pitahaya, and strawberry pear.The two most common types have bright red skin with green scales that resemble a dragon — hence the name.
</p><br></br>

    <button>Add to cart</button>
  </div>
  </div>

</div>
<div class="col-md-6">
<div class="card">
  <img src="https://tse2.mm.bing.net/th?id=OIP.4hyQWQ3HEUFdBGY-uQlTVQHaHa&pid=Api&P=0" alt="Lago di Braies"></img>

  
  <div class="card__details">

    
    <span class="tag">Fruits</span>

    <span class="tag">Vegetables</span>

    
    <div class="name">Broccoli</div><br></br>

    <p>Broccoli is high in many nutrients, including fiber, vitamin C, vitamin K, iron, and potassium. It also boasts more protein than most other vegetables.
This green veggie can be enjoyed both raw and cooked, but recent research shows that gentle steaming provides the most health benefits.Broccoli is relatively high in protein, which makes up 29% of its dry weight, compared to most vegetables.
</p><br></br>

    <button>Add to cart</button>
  </div>
</div>
</div>
</div>

</div>

    </>
  );
}

export default Card;