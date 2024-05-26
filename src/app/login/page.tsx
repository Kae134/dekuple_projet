import LoginUser from "../components/login/Login"

export default async function Login() {
  return (
    <main className="login_page">
      <div className="main_frame">
        <LoginUser />
      </div>
    </main>
  )
}