import "./Categories.css";
import cat1 from "../../assets/images/cat-1-Dff_xs0d (1).jpg"
import cat2 from "../../assets/images/cat-2-DuslB7R8.jpg"
import cat3 from "../../assets/images/cat-3-CeSXsjz-.jpg"
import cat4 from "../../assets/images/cat-4-Df4eiVwg (1).jpg"

function Categories() {
  return <div className="Categories">
    <div className="container">
      <h2 className="fs-1 h2">Categories</h2>
      <div className="row g">
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat1} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat2} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat3} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat4} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat3} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat4} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat1} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat2} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat4} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat3} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat2} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="cat-item shadow-sm radius-8">
            <img src={cat1} alt="category" />
            <div className="info">
              <b>Category Name</b>
              <p className="m-0">100 Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Categories;
