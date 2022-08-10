/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */
type UserInformation = {
  userId: string;
  userName: string;
  userRole: 'normal' | 'vip' | 'admin';
  password: string;
};

type IUserInformation = Omit<UserInformation, 'userRole'> & {userRole: string};

const a: IUserInformation = { password: 'ab', userId: 'cd', userName: 'ef', userRole: 'tt' };