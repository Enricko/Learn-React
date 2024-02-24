type GreetProps = {
  name: string;
  messageCount: number;
  isLogin: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div className="">
      <h2>
        {props.isLogin
          ? `Hello ${props.name}, Current Message ${props.messageCount}`
          : `Welcome anonymous`}
      </h2>
    </div>
  );
};
