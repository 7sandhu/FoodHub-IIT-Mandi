import { Link } from "react-router-dom";

function TestRouting() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Test Routing Page</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/auth/login">Login</Link></li>
                <li><Link to="/auth/signup">Signup</Link></li>
                <li><Link to="/product/6860cb3bf097014f6544af89">Test Product</Link></li>
            </ul>
            
            <div style={{ marginTop: '20px' }}>
                <h2>Click Test</h2>
                <button onClick={() => alert('Button works!')}>Test Button Click</button>
                <br/><br/>
                <Link to="/auth/login" style={{ 
                    padding: '10px 20px', 
                    backgroundColor: 'blue', 
                    color: 'white', 
                    textDecoration: 'none',
                    border: 'none',
                    borderRadius: '5px'
                }}>
                    Test Link (styled as button)
                </Link>
            </div>
        </div>
    );
}

export default TestRouting;
