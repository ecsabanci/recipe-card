import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
// import {useState} from 'react';

function App() {

  // API like structure
  const recipeItem = [
    {
      id: 0,
      recipeAuthor: "Kodluyoruz",
      title: "Avokado Ezmeli Taco",
      date: "12 Ocak 2021, Salı",
      likeNum: 20,
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    {
      id: 1,
      recipeAuthor: "Emre",
      title: "A Food",
      date: "13 Ocak 2021, Çarşamba",
      likeNum: 22,
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    {
      id: 2,
      recipeAuthor: "Cagri",
      title: "B Food",
      date: "14 Ocak 2021, Perşembe",
      likeNum: 23,
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    {
      id: 3,
      recipeAuthor: "Abdo",
      title: "C Food",
      date: "15 Ocak 2021, Cuma",
      likeNum: 30,
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    {
      id: 4,
      recipeAuthor: "Faruk",
      title: "D Food",
      date: "16 Ocak 2021, Cumartesi",
      likeNum: 35,
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    {
      id: 4,
      recipeAuthor: "Mert",
      title: "E Food",
      date: "17 Ocak 2021, Pazar",
      likeNum: 40,
      image: food,
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    },
    

  ]


  return (
    <div className="App">
      <header className="App-header">
        <div className="recipies">
          {recipeItem.map((data,index) => (
            <Card
            /* prop ismi = { değişken } */
              item={data}
              author={data.recipeAuthor}
              foodImg={data.image}
              likeNum={data.likeNum}
              key={index}
            />
          ))}
        </div>
        
      </header>
    </div>
  );
}

export default App;
