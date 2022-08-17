import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };
  let data = {
    username: "pnrmhcl",
    password: "Oyunlar1.",
  };
  const handleClick = (e) => {
    if (user.name === "") {
      alert("Kullanıcı adı boş geçilemez.");
    } else if (user.password === "") {
      alert("Şifre alanı boş geçilemez.");
    } else if (user.name === data.username && user.password === data.password) {
      alert("Giriş Yapabilirsiniz.");
    } else {
      alert("Kullanıcı adı yada şifreniz yanlış");
    }
  };
  return (
    <div className="App">
      <h2>Giriş Formu</h2>
      <Form>
        <label className="label">Email or Username</label>
        <Input
          type={"text"}
          value={user.name}
          placeHolder={"Email or Username"}
          onChange={handleChange}
        />
        <label className="label">Password</label>
        <Input
          type={"password"}
          placeHolder={"Password"}
          value={user.password}
          onChange={handleChange}
        />
        <div>
          <label className="custom-checkbox-label">
            <input type="checkbox" name="foobar" className="custom-checkbox" />
            Keep me logged in
          </label>
        </div>
        <div className="forget_password_container">
          <a href="https://chaincert.io/" className="forget_password">
            Forget Your Password ?
          </a>
        </div>
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
