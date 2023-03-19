import "./style.css";

const Container = (prpos) => (
    <main className="main">
        {prpos.children}
    </main>
);

export default Container;