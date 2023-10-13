import FoodItem from "./FoodItem";

const FoodCategory = () => {
  const starter = [
    { img: "s1.jpg ",name:"Panner Tikka", amount:"23.07" },
    { img: "s2.jpg" ,name:"Baby Corn" ,amount:"29.17"},
    { img: "s3.jpg" ,name:"Water Balls" ,amount:"17.99"},
    { img: "s4.jpg" ,name:"Pav Bhaji" ,amount:"13.79"},
    { img: "s5.jpg" ,name:"Tandoori Momo" ,amount:"21.39"},
    { img: "s6.jpg" ,name:"Sabudana vada" ,amount:"25.99"}
  ];
  const dishes = [
    { img: "di1.jpg" ,name:"Kadai Paneer" ,amount:"37.09"},
    { img: "di6.jpg" ,name:"Butter Chicken" ,amount:"39.99"},
    { img: "di2.jpg" ,name:"Egg Curry" ,amount:"31.29"},
    { img: "di8.jpg" ,name:"Pizza Margherita" ,amount:"37.99"},
    { img: "di4.jpg" ,name:"Fritters Dunked" ,amount:"33.89"},
    { img: "di9.jpg" ,name:"Biryani" ,amount:"32.59"}
  ];
  const dessert = [
    { img: "d1.jpg" ,name:"Strawberry Cake" ,amount:"79.99"},
    { img: "d2.jpg" ,name:"Baked Choco Cube" ,amount:"51.79"},
    { img: "d3.jpg" ,name:"Sweet Sides" ,amount:"33.39"},
    { img: "d4.jpg" ,name:"Choco Bite" ,amount:"57.59"},
    { img: "d7.jpg" ,name:"Pan Berry Pie" ,amount:"41.99"},
    { img: "d6.jpg" ,name:"Cream Berry Wrap" ,amount:"77.19"}
  ];

  return (
    <div>
      <FoodItem  category={starter} title="STARTER" titleBg='starter.jpg' />
      <FoodItem category={dishes} title="DISHES" titleBg='dishes.jpg' />
      <FoodItem category={dessert} title="DESSERT" titleBg='dessert.jpg' />
    </div>
  );
};

export default FoodCategory;