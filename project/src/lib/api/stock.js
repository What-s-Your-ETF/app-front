import instance from "./axios";

export async function fetchkospi200(id) {
  return await instance
    .get(`/stocks?page=${id}&limit=10&isKospi200=true`)
    .then((respo) => {
      console.log("종목 O:", respo.data);
      const a = respo.data;
      return a;
    })

    .catch((error) => {
      console.error("종목 실패:", error);
    });
}

export async function searchkospi200(id, keyword) {
  return await instance
    .get(`/stocks?page=${id}&limit=10&isKospi200=true&name=${keyword}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}

export async function fetchkospi200price(item) {
  console.log('aaa')
  console.log(item);
  return await instance
    .post("/stocks/return-trend", {
      stockItems: item.stockItems,
      duration: item.duration,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
}
