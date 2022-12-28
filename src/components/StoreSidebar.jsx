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
          <h3 className="margin-xs">Filter class</h3>
          <div className="flex-column">
            <label htmlFor="weapon">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="weapon"
                defaultChecked={true}
              />
              Weapon
            </label>
            <label htmlFor="melee">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="melee"
              />
              Melee
            </label>
            <label htmlFor="ranged">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="ranged"
              />
              Ranged
            </label>
            <label htmlFor="magic">
              <input
                className="marginr-xs"
                type="checkbox"
                name="itemClassFilter"
                id="magic"
              />
              Magic 
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
