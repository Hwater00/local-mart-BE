import { StatusCodes } from "http-status-codes";

export const status = {
  // success
  SUCCESS: {
    status: StatusCodes.OK,
    isSuccess: true,
    code: 2000,
    message: "SUCCESS!",
  },

  // error
  // common err
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: "COMMON000",
    message: "서버 에러, 관리자에게 문의 바랍니다.",
  },
  BAD_REQUEST: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "COMMON001",
    message: "잘못된 요청입니다.",
  },
  UNAUTHORIZED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: "COMMON002",
    message: "권한이 잘못되었습니다.",
  },
  METHOD_NOT_ALLOWED: {
    status: StatusCodes.METHOD_NOT_ALLOWED,
    isSuccess: false,
    code: "COMMON003",
    message: "지원하지 않는 Http Method 입니다.",
  },
  FORBIDDEN: {
    status: StatusCodes.FORBIDDEN,
    isSuccess: false,
    code: "COMMON004",
    message: "금지된 요청입니다.",
  },

  // post err
  POST_NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "POST4001",
    message: "게시글이 없습니다.",
  },

  // user
  LOGINID_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4001",
    message: "가입되지 않은 아이디입니다.",
  },
  PASSWORD_NOT_MATCHED: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4002",
    message: "비밀번호가 일치하지 않습니다.",
  },
  TOKEN_UPDATE_FAILED: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4003",
    message: "토큰 저장에 실패했습니다.",
  },
  TOKEN_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4004",
    message: "토큰이 존재하지 않습니다.",
  },
  TOKEN_UNAUTHORIZED: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4005",
    message: "유효하지 않은 토큰입니다.",
  },

  FORBIDDEN_APPOROACH: {
    status: StatusCodes.FORBIDDEN,
    isSuccess: false,
    code: "USER4007",
    message: "로그인한 유저만 사용할 수 있는 서비스입니다.",
  },

  // db error
  PARAMETER_IS_WRONG: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "DATABASE4001",
    message:
      "쿼리 실행 시 전달되는 파라미터가 잘못되었습니다. 파라미터 개수 혹은 파라미터 형식을 확인해주세요.",
  },
};
