import { Data } from "../@types/hooks/useDataFilter.type";

const randomDataFilter = (data: Data[], search: string) => {
  return data.filter(function (el) {
    return (
      el.name.first.toLowerCase().includes(search.toLowerCase()) ||
      el.name.last.toLowerCase().includes(search.toLowerCase()) ||
      `${el.name.first} ${el.name.last}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      el.login.username.toLowerCase().includes(search.toLowerCase()) ||
      el.email.toLowerCase().includes(search.toLowerCase())
    );
  });
}


export default randomDataFilter;