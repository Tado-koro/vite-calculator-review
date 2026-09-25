export enum CalcState {
  Ready,//初期状態/最初の数字か.→0除算→Clear/数字か.→Op→数字か.→0除算→Clear
  InputtingFirst,
  //最初の数字か.を入力された状態/数字か.→Op→数字か.→=→数字か.
  //最初の数字か.→0除算→数字か./数字か.→Op→数字か.→0除算→数字か.
  OperatorEntered,//数字か.→Op/数字か.→Op→=→Op/数字か.→Op→数字か.→=→Op/数字か.→Op→数字か.→op
  InputtingSecound,//数字か.→Op→数字か.
  ResultShown,//数字か.→Op→=/数字か.→Op→数字か.→=
  Error//最初の数字か.→0除算/数字か.→Op→数字か.→0除算
};
