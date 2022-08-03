
import { useRouter } from 'next/router';

const Login_id = () => {
    const router = useRouter();
    return (
        <div style={{padding: '10px'}}>
            {router.query.login_id}
        </div>
    );
};

export default Login_id;
