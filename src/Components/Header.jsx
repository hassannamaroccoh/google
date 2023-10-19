import"../Styles/Header.css";
import image from  "../assets/images/plane.png";
// import image from  "../assets/images/Group 688.png";
// import image from  "../assets/images/Vector.png ";


const Header = () => {
    return ( 
        <>
        <main>
            <aside className="left">
                <h1>Travelista  Tours</h1>
                <p>Travel is the only purchase that enrivches you in ways<br/> beyond material wealth</p>
            </aside>

            <aside className="right">

                <section className="plane">
                     <img src={image} />
                </section>
                <section className="welcome">
                    <h1>Welcome</h1>
                    <p>Login with Email</p>
                </section>
                <section className="details">
                    
                    <input type="text" placeholder="enter your mail" />

                    <input type="password" placeholder="************" />

                    <a href="">forgot your password</a>

                    <button>LOGIN</button>
                    <p>OR</p>
                    
                </section>
                <section className="links">
                    <button>go</button>
                    <button>f</button>
                    <button>A</button>
                </section>
                <footer>
                <img src={image} />
                <img src={image} />

                </footer>

            </aside>
        </main>
        </>
     );
}
 
export default Header;