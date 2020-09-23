// Lecture에 대해 고객에게 반환할 정보를 의미, Appsync response말고 business적으로 이해할수 있는 단어를 찾아보장
export default interface ResponseAppsync {
    data: object;
    message: string;
}