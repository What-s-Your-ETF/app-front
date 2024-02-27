import instance from "./axios";

export const getPortfolios = async (desc) => {
  // 요청 보내기
  instance
    .get("user/portfolios", desc)

    .then((response) => {
      console.log("로그인 응답:", response.data);
      return response;
      // 여기에 로그인 성공 시 처리할 코드를 추가합니다.
    })

    .catch((error) => {
      console.error("로그인 에러:", error);
      // 여기에 로그인 실패 시 처리할 코드를 추가합니다.
    });
};

export async function postPortfolios(
  name,
  duration,
  investAmounts,
  itemCodes,
  weights
) {
  console.log(`Bearer ${localStorage.getItem("authToken")}`);
  const respo = await instance
    .post(
      "/portfolios",
      {
        name: name,
        duration: duration,
        investAmounts: investAmounts,
        itemCodes: itemCodes,
        weights: weights,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    )
    .then((respo) => {
      console.log("포트폴리오 등록 성공:", respo.data);
      return respo;
      // 여기에 로그인 성공 시 처리할 코드를 추가합니다.
    })

    .catch((error) => {
      console.error("포트폴리오 등록 실패:", error);
      // 여기에 로그인 실패 시 처리할 코드를 추가합니다.
    });
}
