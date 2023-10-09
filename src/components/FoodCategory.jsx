import FoodItem from "./FoodItem";

const FoodCategory = () => {
  const starter = [
    { img: "s1.jpg" },
    { img: "s2.jpg" },
    { img: "s3.jpg" },
    { img: "s4.jpg" },
    { img: "s5.jpg" },
    { img: "s6.jpg" }
  ];
  const dishes = [
    { img: "di1.jpg" },
    { img: "di6.jpg" },
    { img: "di2.jpg" },
    { img: "di8.jpg" },
    { img: "di4.jpg" },
    { img: "di9.jpg" }
  ];
  const dessert = [
    { img: "d1.jpg" },
    { img: "d2.jpg" },
    { img: "d3.jpg" },
    { img: "d4.jpg" },
    { img: "d7.jpg" },
    { img: "d6.jpg" }
  ];

  return (
    <div>
      <FoodItem category={starter} title="STARTER" titleBg='starter.jpg' />
      <FoodItem category={dishes} title="DISHES" titleBg='dishes.jpg' />
      <FoodItem category={dessert} title="DESSERT" titleBg='dessert.jpg' />
    </div>
  );
};

export default FoodCategory;
