import React, { useEffect, useState } from "react";
import EmployerService from "../services/EmployerService";
import { Grid, GridColumn, Icon, Menu, Table } from "semantic-ui-react";
import LeftBar from "../layouts/LeftBar";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAllEmployer()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
<div>

</div>
  );
}
