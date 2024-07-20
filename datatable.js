(async function getData() {
  const url = "./datatable.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json.employees.employee.firstname);
  } catch (error) {
    console.error(error.message);
  }
})();
