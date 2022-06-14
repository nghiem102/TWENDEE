import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./component/DataTable.js";
import { getUsers } from "./features/UserSlice.js";
import { TableFieldsType } from "./types/common.js";

function App() {
  const { results } = useSelector((users) => users.users.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({page:1,pageSize:10}));
  }, []);

  const fields: TableFieldsType = {
    name: {
      label: "Name",
      renderContent: ({ name }) => (
        <b>{`${name.title} ${name.first} ${name.last} `}</b>
      ),
    },
    picture: {
      label: "Avatar",
      renderContent: ({ picture }) => (
        <b>
          <img src={picture.large} alt="" />
        </b>
      ),
    },
    gender: { label: "Gender" },
    dob: { label: "Age", renderContent: ({ dob }) => <b>{dob.age}</b> },
    email: { label: "Email" },
    phone: { label: "Phone" },
  };

  return (
    <div className="App">
      <DataTable data={results} fields={fields} />
    </div>
  );
}

export default App;
