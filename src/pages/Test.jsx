import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [extraData, setExtraData] = useState([]);
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  function fetchData() {
    const url = "https://randomuser.me/api/?results=100";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExtraData(data.results);
        setData(data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectData = (e) => {
    const { value } = e.target;
    setSelect(value);
    let arr = [];
    for (let i = 0; i < extraData.length; i++) {
      if (extraData[i].gender === value) {
        arr.push(extraData[i]);
      }
      setData(arr);
    }
  };

  const handleSearchData = (e) => {
    const { value } = e.target;
    setSearch(value);
    let arr = [];
    for (let i = 0; i < extraData.length; i++) {
      if (extraData[i].name.first.includes(value)) {
        arr.push(extraData[i]);
      }
      setData(arr);
    }
  };

  return (
    <>
      <div className="testContainer">
        <select value={select} onChange={handleSelectData}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input type="text" value={search} onChange={handleSearchData} />

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{items.name.first}</td>
                <td>{items.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;
