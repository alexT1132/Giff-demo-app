import { useState } from "react"
import Categories from "./componets/categories"
import GifsExpo from "./GifsExpo"

function App() {
  const [categories, setCategories] = useState(["Code Geass", "Naruto"])

  return (
    <div className="m-5">
      <h3>Gif Demo App</h3>
      <hr />
      <Categories
        categories={categories}
        setCategories={setCategories}
      />
      <hr />
      <GifsExpo
        categories={categories}
        setCategories={setCategories}
      />
      {
        categories.length === 0 && (
          <div className="text-center">
            <h3>Your list is empty</h3>
            Add a new category to get started.
          </div>
        )
      }
    </div>
  )
}

export default App