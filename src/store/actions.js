import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?f=${keyword}`).then(({ data }) => {
    debugger;
    commit("setSearchedMeals", data);
  });
}
