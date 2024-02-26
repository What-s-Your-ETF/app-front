import instance from "./axios";

export const getPortfolios = async (desc) => {
    // 요청 보내기
    instance.post("user/portfolios",desc)

    .then(response => {
        console.log('로그인 응답:', response.data);
        return response
        // 여기에 로그인 성공 시 처리할 코드를 추가합니다.
    })

    .catch(error => {
        console.error('로그인 에러:', error);
        // 여기에 로그인 실패 시 처리할 코드를 추가합니다.
    });
};