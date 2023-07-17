import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();

    const onSubmit = event => {
        const name = event.name;
        const email = event.email;
        const password = event.password;

        createUser(email, password)
            .then(result => {
                const signUpUser = result.user;
                console.log(signUpUser);

                updateUserProfile(name)
                    .then(() => {
                        console.log('user profile updated');
                        // saveUserInDd(result.user);
                        alert('User created successfully');
                        navigate('/');
                    })
                    .catch(error => {
                        console.error(error.message);
                        alert(error.message);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-300 text-blue-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-5 text-5xl font-semibold'>Sign Up Form</h1>
                    <p className='text-sm text-blue-500'>
                        Create an account using your credentials
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                User Name
                            </label>
                            <input
                                type='name'
                                name='name'
                                placeholder='Enter Your Name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-blue-900'
                                data-temp-mail-org='0'
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email Address
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Your Mail'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-blue-900'
                                data-temp-mail-org='0'
                                {...register('email', { required: true })}
                            />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name='password'
                                placeholder='Enter Your Password'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-blue-900'
                                data-temp-mail-org='0'
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                })}
                            />
                            {errors.password && (
                                <span>
                                    Password should contain at least one capital letter, one special character, and be at least 6 digits long.
                                </span>
                            )}
                        </div>

                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 hover:bg-rose-700 w-full rounded-md py-3 text-white'
                        >
                            SignUp
                        </button>
                    </div>
                </form>

                <p className='px-6 py-0 text-sm text-center text-blue-400'>
                    Don't have an account?
                    <Link
                        to='/login'
                        className='hover:underline hover:text-violet-400 text-blue-400'
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;