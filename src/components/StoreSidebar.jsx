function StoreSidebar() {
  return (
    <div className="store-sidebar">
      <form className="store-sidebar--form">
        <div>
          <h2 className="margin-xs">Search</h2>
          <input type="text" placeholder="Awesome weapon here" />
        </div>
        <div>
          <h3 className="margin-xs">Store type</h3>
          <div className="store-radio">
            <label>
              <input
                type="radio"
                name="storeType"
                id="common"
                value="common"
                defaultChecked={true}
              />{" "}
              Common
            </label>
            <label>
              <input type="radio" name="storeType" id="rare" value="rare" />{" "}
              Rare
            </label>
          </div>
        </div>

        <div>
          <h3 className="margin-xs">Order by</h3>

          <label htmlFor="store-order">
            <select name="store-order" id="store-order">
              <option value="auto" defaultValue={true}>
                Auto
              </option>
              <option value="new">New</option>
              <option value="price-l">Price - increasing</option>
              <option value="price-h">Price - decreasing</option>
            </select>
          </label>
        </div>

        <div className="flex-center">
          <h3 className="margin-xs">Filter items</h3>
          <div className="flex-column">
            <label htmlFor="weapons">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="weapons"
                defaultChecked={true}
              />
              Weapons
            </label>
            <label htmlFor="consumables">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="consumables"
              />
              Consumables
            </label>
            <label htmlFor="companions">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="companions"
              />
              Companions
            </label>
            <label htmlFor="realEstate">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="realEstate"
              />
              Real Estate
            </label>
          </div>
        </div>
        <div>
          <h3 className="margin-s">Filter price</h3>
          <div>
            <input type="range" name="filterPrice" id="filterPrice" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default StoreSidebar;
