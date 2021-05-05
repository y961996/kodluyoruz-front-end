import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import food2 from "./assets/ratatuy.jpg";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const recipeAuthor2 = "Fare";
  const recipeItem2 = {
    title: "Ratatuy",
    date: "5 Mayıs 2021, Çarşamba",
    image: food2,
    description:
      "Ratatuy, bir farenin ellerinden çıkan lezzet.",
  };

  const likeCount = 193;
  const isLiked = true;

  const likeCount2 = 1566842;
  const isLiked2 = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          liked={isLiked}
        />
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor2}
          title={recipeItem2.title}
          date={recipeItem2.date}
          image={recipeItem2.image}
          description={recipeItem2.description}
          likeCount={likeCount2}
          liked={isLiked2}
        />
      </header>
    </div>
  );
}

export default App;
