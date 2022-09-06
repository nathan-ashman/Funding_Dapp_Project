function GuestRoutes() {
    return(
        <>
          <li class="nav-item">
            <a class="nav-link active dapp-links" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link dapp-links" href="/register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link dapp-links" href="/login">Login</a>
            </li>
        </>
    )
}

export default GuestRoutes;