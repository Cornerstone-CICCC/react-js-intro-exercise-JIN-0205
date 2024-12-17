interface Props {
  message: string;
}
const Welcome = ({ message }: Props) => {
  return <p>{message}</p>;
};

export default Welcome;
