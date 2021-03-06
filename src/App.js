import { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.scss";
import MainPage from "./Main-page/Main-page";
import CofeePage from "./Cofee-page/Cofee-page";
import ItemPage from "./Cofee-item-page/itemPage";
import GoodsPage from "./Goods-page/GoodsPage";

import product1 from "./Images/product-1.png";
import product2 from "./Images/product-2.png";
import product3 from "./Images/product-3.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: product1,
          title: "Solimo Coffee Beans 2 kg",
          price: 10.73,
          country: "Brazil",
          rise: true,
          id: 1,
          description:
            "salom choyslad asdlas salom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlas",
          region: true,
        },
        {
          img: product2,
          title: "SPresto Coffee Beans 1 kg",
          price: 15.99,
          country: "Keniya",
          rise: true,
          id: 2,
          description:
            "salom choyslad asdlas salom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlas",
          region: true,
        },
        {
          img: product3,
          title: "AROMISTICO Coffee 1 kg",
          price: 6.99,
          country: "Columbia",
          rise: true,
          id: 3,
          description:
            "salom choyslad asdlas salom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlas",
          region: true,
        },
        {
          img: product1,
          title: "AROMISTICO Coffee 1 kg",
          price: 6.99,
          country: "Keniya",
          rise: false,
          id: 4,
          description:
            "salom choyslad asdlas salom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlas",
          region: true,
        },
        {
          img: product3,
          title: "Backery Coffee 1 kg",
          price: 6.99,
          country: "Columbia",
          rise: false,
          id: 5,
          description:
            "salom choyslad asdlas salom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlas",
          region: true,
        },
        {
          img: product2,
          title: "AROMISTICO Coffee 1 kg",
          price: 6.99,
          country: "Columbia",
          rise: false,
          id: 6,
          description:
            "salom choyslad asdlas salom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlassalom choyslad asdlas",
          region: true,
        },
      ],
      term: "",
      filter: "",
      count: "",
    };

    this.BestGoods = this.state.data.filter((item) => item.rise !== false);
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "Brazil":
        return items.filter((item) => item.country === "Brazil");
      case "Keniya":
        return items.filter((item) => item.country === "Keniya");
      case "Columbia":
        return items.filter((item) => item.country === "Columbia");
      default:
        return items;
    }
  };
  itemSelect = (items) => {
    return items.filter((item) => item.id !== '');
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    const itemSelect = this.itemSelect(data);
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage
              data={this.BestGoods}
            // data={this.onUpdateCountry}
            />} />
            <Route path="/ourCofee" element={<CofeePage
              data={visibleData}
              onUpdateSearch={this.onUpdateSearch}
              term={term}
              filter={filter}
              onFilterSelect={this.onFilterSelect}
            />} />
            <Route path="/ourCofee/:item" element={<ItemPage itemSelect={itemSelect} />} />
            <Route path="/forYour" element={<GoodsPage data={data} />} />
          </Routes>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
