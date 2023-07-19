import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { saveUserInDB } from "../../api/auth";

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = async event => {
        const phoneNumber = event.phoneNumber;
        const email = event.email;
        const password = event.password;
        const userRole = event.role;
        saveUserInDB(phoneNumber,email,password,userRole);

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
                            <label htmlFor='phoneNumber' className='block mb-2 text-sm'>
                                 Phone Number
                            </label>
                            <input
                                type='number'
                                name='phoneNumber'
                                placeholder='Enter Your Number'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-blue-900'
                                data-temp-mail-org='0'
                                {...register('phoneNumber', {
                                     required: true,
                                     minLength:11, 
                                     pattern: /^01[3-9]\d{8}$/,
                                    })}
                            />
                            {errors.phoneNumber && <span>Number must be 11 digit and only for BD Number support</span>}
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
                        <select className="select select-info w-full" {...register('role',{required:true})}>
                            <option disabled selected>Select Role</option>
                            <option value="houseOwner">House Owner</option>
                            <option value="houseRenter">House Renter</option>
                        </select>

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
                    Already have an account?
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