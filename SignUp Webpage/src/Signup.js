import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form>
        <input type={"email"} placeholder={"Email"} />
        <input
          type={"password"}
          name="pw1"
          placeholder={"Password"}
          onChange={onChange()}
        />
        <input
          type={"password"}
          name="pw2"
          placeholder={"Confirm Password"}
          onChange={onChange()}
        />
        <button type={"submit"}>Sign Up</button>
      </form>
    </div>
  );
};
function onChange() {
  const password = document.querySelector("input[name=pw1]");
  const confirm = document.querySelector("input[name=pw2]");
  if (confirm !== password) {
    confirm.setCustomValidity("Passwords do not match");
  }
}
export default Signup;
