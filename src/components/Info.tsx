interface Props {
  firstname: string;
  lastname: string;
  age: number;
  isStudent: boolean;
}
const Info = ({ firstname, lastname, age, isStudent }: Props) => {
  return (
    <div>
      Name: {firstname} {lastname},<br /> Age: {age},<br /> Is student:
      {isStudent ? " Yes" : " No"}
    </div>
  );
};

export default Info;
