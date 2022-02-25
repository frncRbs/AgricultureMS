import { useSelector } from 'react-redux';
import './_index.scss';

const Input = ({ type, name, placeholder, required, register, data }) => {
    const { isLoading } = useSelector((state) => state.auth);

    switch (type) {
        case 'textarea':
            return (
                <textarea
                    name={name}
                    {...register(name, { required })}
                    disabled={isLoading}
                >
                    {placeholder}
                </textarea>
            );
        case 'date':
            return (
                <div className="input__text">
                    <label>{placeholder}</label>
                    <input
                        type="date"
                        name={name}
                        disabled={isLoading}
                        {...register(name, { required })}
                    />
                </div>
            );
        case 'tel':
            return (
                <input
                    type="tel"
                    pattern=""
                    placeholder="+639123456789"
                    maxLength={9}
                    {...register(name, { required })}
                    disabled={isLoading}
                />
            );
        case 'select':
            return (
                <div className="input__text">
                    <label>{placeholder}</label>
                    <select
                        name={name}
                        {...register(name, { required })}
                        disabled={isLoading}
                    >
                        {data.map((obj, i) => (
                            <option
                                key={i}
                                value={obj['value']}
                                disabled={obj['disabled']}
                            >
                                {obj['name']}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case 'password':
            return (
                <div className="input__text">
                    <label>{placeholder}</label>
                    <input
                        type="password"
                        name={name}
                        disabled={isLoading}
                        {...register(name, { required })}
                    />
                </div>
            );

        default: {
            return (
                <div className="input__text">
                    <label>{placeholder}</label>
                    <input
                        type="text"
                        name={name}
                        disabled={isLoading}
                        {...register(name, { required })}
                    />
                </div>
            );
        }
    }
};

export default Input;
