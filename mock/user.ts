import { MockMethod } from 'vite-plugin-mock';
import { successResult, errorResult, requestParams, getRequestToken } from '/@/utils/result';
import { TokenPrefix } from '/@/utils/auth';

export function createFakeUserList() {
  return [
    {
      user_id: '111',
      user_name: 'admin',
      real_name: 'drama yang',
      avatar: 'https://api.multiavatar.com/blindmonk.svg',
      desc: 'drama yang 真牛逼',
      password: 'admin',
      token: 'P1DeqWBao0HTU47Q',
      location: '中国',
      email: '1312@qq.com',
      auths: [],
      is_admin: 1,
      role: 'admin',
    },
  ];
}
export default [
  {
    url: '/user/profile',
    timeout: 200,
    method: 'get',
    response: () => {
      return successResult(createFakeUserList()[0]);
    },
  },
  {
    url: '/user/login',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      const { username, password } = request?.body;
      const checkUser = createFakeUserList().find((item) => item.user_name === username && item.password === password);
      if (!checkUser) {
        return errorResult('不存在该用户');
      }
      return successResult({ token: checkUser.token });
    },
  },
  {
    url: '/user/logout',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      console.dir(request);
      const token = getRequestToken(request);
      if (!token) return errorResult('token缺失!');
      const checkUser = createFakeUserList().find((item) => `${TokenPrefix}${item.token}` === token);
      if (!checkUser) {
        return errorResult('token缺失!');
      }
      return successResult('Token 已失效');
    },
  },
] as MockMethod[];
